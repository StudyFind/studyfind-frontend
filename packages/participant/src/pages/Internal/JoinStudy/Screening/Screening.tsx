import { useState, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import { auth } from "@studyfind/firebase";
import { actions } from "@studyfind/api";

import { StudyParticipantReponse } from "@studyfind/types";

import { UserContext } from "context/UserContext";
import { StudiesContext } from "context/StudiesContext";

import { Card, Message } from "components/atoms";

import {
  Box,
  SimpleGrid,
  Grid,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";

interface Params {
  studyID: string;
}

function Screening() {
  const toast = useToast();
  const history = useHistory();

  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);

  const { studyID } = useParams<Params>();

  const study = studies?.find((study) => study.id === studyID);

  const verified = auth.getUser().emailVerified;

  const [responses, setResponses] = useState<StudyParticipantReponse[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!verified) {
      history.goBack();
    }
  }, [history, verified]);

  useEffect(() => {
    if (study) {
      setResponses(study?.questions?.map(() => "" as StudyParticipantReponse | ""));
    }
  }, [study]);

  const handleResponseChange = (index: number, value: StudyParticipantReponse) => {
    setResponses((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSave = async () => {
    setIsSubmitting(true);

    if (user && study) {
      actions.participant
        .enrollForStudy({
          studyID,
          timezone: user.timezone.region || "America/New_York",
          availability: user.availability || "",
          questions: study.questions || [],
          responses,
          enrolled: user.enrolled.concat(studyID),
        })
        .then(() => setIsSubmitting(false))
        .then(() => {
          toast({
            title:
              "You have successfully attempted to enroll in this research study. Wait to hear back from the researcher for the next steps!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        })
        .then(() => history.push(`/view-study/${study.id}/details`));
    }
  };

  return (
    <>
      <Heading fontSize="28px">Screening Survey</Heading>
      <SimpleGrid spacing="20px" marginY="20px">
        {study?.questions?.length ? (
          study?.questions.map((question, i) => (
            <Card key={i} padding="20px">
              <Text fontWeight="500" mb="5px">
                {i + 1}. {question.prompt}
              </Text>
              <RadioGroup
                value={responses[i]}
                onChange={(v) => handleResponseChange(i, v as StudyParticipantReponse)}
              >
                <Grid>
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No">No</Radio>
                  <Radio value="Unsure">Unsure</Radio>
                </Grid>
              </RadioGroup>
            </Card>
          ))
        ) : (
          <Box height="400px">
            <Message
              status="neutral"
              title="No Questions"
              description={`This research study does not have any questions for you to answer. Click "Submit" to complete your enrollment process`}
              showBackground
            />
          </Box>
        )}
      </SimpleGrid>
      <Flex justify="flex-end" gridGap="10px">
        <Button variant="outline" color="gray.500" onClick={history.goBack}>
          Back
        </Button>
        <Button colorScheme="green" onClick={handleSave} isLoading={isSubmitting}>
          Submit
        </Button>
      </Flex>
    </>
  );
}

export default Screening;

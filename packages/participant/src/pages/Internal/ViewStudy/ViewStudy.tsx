import { useParams } from "react-router-dom";
import { useStudies } from "hooks";

import { Message } from "components/atoms";
import { HorizontalTabs } from "components/molecules";

import { Box } from "@chakra-ui/react";

import Details from "./Details/Details";
import Locations from "./Locations/Locations";
import Questions from "./Questions/Questions";
import Resources from "./Resources/Resources";
import Files from "./Files/Files";

interface URLParams {
  studyID: string;
}

function ViewStudy() {
  const { studyID } = useParams<URLParams>();

  const studies = useStudies();
  const study = studies?.find((s) => s.id === studyID);

  if (!study) {
    return (
      <Box height="400px" rounded="md">
        <Message
          status="failure"
          title="Study Not Found"
          description={`The study with ID "${studyID}" does not exist in our database. It may have been either deleted or never existed in the first place.`}
          showBackground
        />
      </Box>
    );
  }

  const tabs = [
    {
      name: "Details",
      link: `/view-study/${studyID}/details`,
      content: <Details study={study} />,
    },
    {
      name: "Locations",
      link: `/view-study/${studyID}/locations`,
      content: <Locations study={study} />,
    },
    {
      name: "Questions",
      link: `/view-study/${studyID}/questions`,
      content: <Questions study={study} />,
    },
    {
      name: "Resources",
      link: `/view-study/${studyID}/resources`,
      content: <Resources study={study} />,
    },
    {
      name: "Files",
      link: `/view-study/${studyID}/files`,
      content: <Files study={study} />,
    },
  ];

  return <HorizontalTabs tabs={tabs} paddingY="20px" />;
}

export default ViewStudy;

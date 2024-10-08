import { useColorModeValue } from "hooks";
import { useParams } from "react-router-dom";
import { Link } from "components/atoms";
import { Flex, Text, Button } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  confirmed: boolean;
  meetingLink?: string;
  handleConfirm: () => void;
}

interface Params {
  studyID: string;
}

function Confirm({ confirmed, meetingLink, handleConfirm }: Props) {
  const { studyID } = useParams<Params>();

  const confirmedColor = useColorModeValue("green.500", "green.400");
  const confirmedBackground = useColorModeValue("green.100", "green.900");

  return (
    <Flex justify="flex-start" marginTop="16px" gridGap="10px">
      {confirmed ? (
        meetingLink ? (
          <Link to={meetingLink}>
            <Button size="sm" colorScheme="teal">
              Join Meeting
            </Button>
          </Link>
        ) : (
          <Flex
            align="center"
            gridGap="6px"
            paddingX="12px"
            color={confirmedColor}
            background={confirmedBackground}
            rounded="md"
            fontSize="14px"
            fontWeight="600"
            height="32px"
          >
            <FaCheckCircle />
            <Text marginBottom="2px">Confirmed</Text>
          </Flex>
        )
      ) : (
        <Button size="sm" colorScheme="blue" onClick={handleConfirm}>
          Confirm
        </Button>
      )}
      <Link to={`/your-studies/${studyID}/messages`}>
        <Button size="sm" colorScheme="purple">
          Suggest New Time
        </Button>
      </Link>
    </Flex>
  );
}

export default Confirm;

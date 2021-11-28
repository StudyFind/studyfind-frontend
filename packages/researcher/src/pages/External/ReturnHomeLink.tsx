import { Icon, Text, HStack } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "components/atoms/Link/Link";

function ReturnHomeLink() {
  return (
    <Link to="/home">
      <HStack
        spacing="5px"
        align="center"
        color="blue.500"
        _hover={{ textDecoration: "underline" }}
      >
        <Icon as={FaChevronLeft} fontSize="12px" /> <Text>Return home</Text>
      </HStack>
    </Link>
  );
}

export default ReturnHomeLink;

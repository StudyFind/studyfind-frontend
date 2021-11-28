// import { useDevice } from "hooks";
// import { Card } from "components/atoms/Card/Card";
import { Image, Heading, Text, Stack, VStack } from "@chakra-ui/react";

interface Section {
  title: string;
  description: string;
}

interface Props {
  logo: string;
  sections: Section[];
}

function CollaborationItem({ logo, sections }: Props) {
  // const { isPhone } = useDevice();

  return (
    // <Card padding="40px" width="100%">
    //   <Stack direction={isPhone ? "column" : "row"} spacing="40px" align="flex-start">
    //     <Image borderRadius="5px" height="150px" width="150px" src={logo} />
    //     <VStack spacing="25px">
    //       {sections?.map((section, i) => (
    //         <VStack key={i} align="flex-start">
    //           <Heading size="md">{section.title}</Heading>
    //           <Text color="gray.500">{section.description}</Text>
    //         </VStack>
    //       ))}
    //     </VStack>
    //   </Stack>
    // </Card>
    <Image borderRadius="5px" height="150px" width="150px" src={logo} />
  );
}

export default CollaborationItem;

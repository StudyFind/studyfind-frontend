import { useColor, useDevice } from "hooks";
import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "components/atoms/Link/Link";
import { ColorScheme } from "types/global";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  colorScheme: ColorScheme;
}

function TeamPanel({ title, description, buttonText, buttonLink, colorScheme }: Props) {
  const { isPhone } = useDevice();

  const headingColor = useColor(`${colorScheme}.700`, `${colorScheme}.200`);
  const backgroundColor = useColor(`${colorScheme}.100`, `${colorScheme}.700`);

  return (
    <VStack
      align="flex-start"
      spacing="25px"
      padding="30px"
      maxWidth={isPhone ? "" : "360px"}
      width="100%"
      borderRadius="10px"
      background={backgroundColor}
    >
      <VStack align="flex-start" spacing="10px">
        <Heading color={headingColor} size="lg" fontWeight="700">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      <Link to={buttonLink} isWrapper>
        <Button colorScheme={colorScheme} fontWeight="bold">
          {buttonText}
        </Button>
      </Link>
    </VStack>
  );
}

export default TeamPanel;

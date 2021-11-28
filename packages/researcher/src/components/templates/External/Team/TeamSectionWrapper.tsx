import { Box, Heading } from "@chakra-ui/react";

interface Props {
  id: string;
  background: string;
  children: React.ReactNode;
  [key: string]: any;
}

function TeamSectionWrapper({ id, heading, background, children, ...rest }: Props) {
  return (
    <Box id={id} background={background} minHeight="100vh" padding="40px">
      <Heading color="blue.500" size="2xl" lineHeight="1.25" textAlign="center" marginY="20px">
        {heading}
      </Heading>
      {children}
    </Box>
  );
}

export default TeamSectionWrapper;

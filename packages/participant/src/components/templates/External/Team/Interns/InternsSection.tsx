import { useDevice } from "hooks";

import { Box, SimpleGrid, Heading } from "@chakra-ui/react";

import TeamMember from "components/templates/External/Home/Team/TeamMember";

interface Member {
  image: string;
  name: string;
  position: string;
  linkedinURL?: string;
}

interface Props {
  heading: string;
  members: Member[];
}

function InternsSection({ heading, members }: Props) {
  const { responsive } = useDevice();

  return (
    <Box>
      <Heading align="center" size="lg" marginBottom="60px">
        {heading}
      </Heading>
      <SimpleGrid columns={responsive([1, 2, 4])} spacingY="40px">
        {members.map((member, i) => (
          <TeamMember key={i} {...member} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default InternsSection;

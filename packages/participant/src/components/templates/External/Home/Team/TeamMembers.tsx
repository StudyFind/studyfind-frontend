import { useDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";
import TeamMember from "./TeamMember";

interface Founder {
  image: string;
  name: string;
  position: string;
  description: string;
}

interface Props {
  founders: Founder[];
}

function TeamMembers({ founders }: Props) {
  const { isPhone, responsive } = useDevice();

  return (
    <SimpleGrid spacing={isPhone ? "50px" : "100px"} columns={responsive([1, 2, 2])}>
      {founders.map((founder, i) => (
        <TeamMember key={i} {...founder} />
      ))}
    </SimpleGrid>
  );
}

export default TeamMembers;

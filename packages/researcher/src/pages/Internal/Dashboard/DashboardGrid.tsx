import { useDevice } from "hooks";

import { StudyDocumentExtended } from "types/extended";

import { SimpleGrid, HStack, Heading } from "@chakra-ui/react";
import { Link } from "components/atoms";

import DashboardButton from "./DashboardButton";
import DashboardCard from "./DashboardCard";

interface Props {
  verified: boolean;
  studies: StudyDocumentExtended[];
}

function DashboardGrid({ verified, studies }: Props) {
  const { responsive } = useDevice();

  return (
    <SimpleGrid spacing="25px">
      <HStack justify="space-between" align="center">
        <Heading size="lg">Dashboard</Heading>
        <DashboardButton verified={verified} />
      </HStack>
      <SimpleGrid spacing="25px" align="flex-start" columns={responsive([1, 2, 2])}>
        {studies.map((study) => (
          <Link key={study.id} to={`/study/${study.id}/details`} isWrapper>
            <DashboardCard study={study} />
          </Link>
        ))}
      </SimpleGrid>
    </SimpleGrid>
  );
}

export default DashboardGrid;

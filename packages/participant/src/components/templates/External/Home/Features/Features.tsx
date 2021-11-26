import { useColorModeValue, useDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";

import HomeSectionWrapper from "../HomeSectionWrapper";
import Feature from "./Feature";

interface FeatureItem {
  icon: React.ReactElement;
  title: string;
  description: string;
}

type FeatureList = FeatureItem[];

interface Props {
  features: FeatureList;
}

function Features({ features }: Props) {
  const background = useColorModeValue("gray.100", "gray.800");

  const { isPhone } = useDevice();

  return (
    <HomeSectionWrapper background={background}>
      <SimpleGrid columns={isPhone ? 1 : 2} spacing="80px 60px" paddingY="40px">
        {features.map((feature, i) => (
          <Feature key={i} {...feature} />
        ))}
      </SimpleGrid>
    </HomeSectionWrapper>
  );
}

export default Features;

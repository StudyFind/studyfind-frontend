import { useColorModeValue } from "hooks";
import { Flex } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

import PricingPlanBadge from "./PricingPlanBadge";
import PricingPlanHeader from "./PricingPlanHeader";
import PricingPlanPrice from "./PricingPlanPrice";
import PricingPlanFeatures from "./PricingPlanFeatures";
import PricingPlanButton from "./PricingPlanButton";

interface Props {
  icon: IconType;
  name: string;
  price: [number, number];
  features: string[];
  isPopular: boolean;
  isBilledAnnually: boolean;
}

function PricingPlan({ icon, name, price, features, isPopular, isBilledAnnually }: Props) {
  const background = useColorModeValue("white", "gray.900");
  const accentColor = useColorModeValue("blue.600", "blue.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex
      gridGap="24px"
      padding="24px"
      paddingTop="48px"
      position="relative"
      overflow="hidden"
      shadow="lg"
      direction="column"
      rounded="xl"
      borderWidth="1px"
      background={background}
      borderColor={borderColor}
    >
      {isPopular && <PricingPlanBadge>Popular</PricingPlanBadge>}
      <PricingPlanHeader icon={icon} name={name} color={accentColor} />
      <PricingPlanPrice price={price} isBilledAnnually={isBilledAnnually} color={accentColor} />
      <PricingPlanFeatures features={features} color={accentColor} />
      <PricingPlanButton />
    </Flex>
  );
}

export default PricingPlan;

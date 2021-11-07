import { useDevice } from "hooks";

import { SimpleGrid } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

import PricingPlan from "./PricingPlan";

interface Plan {
  icon: IconType;
  name: string;
  price: [number, number];
  features: string[];
  isPopular: boolean;
}

interface Props {
  plans: Plan[];
  isBilledAnnually: boolean;
}

function PricingPlans({ plans, isBilledAnnually }: Props) {
  const { responsive } = useDevice();

  return (
    <SimpleGrid gap="30px" width="100%" columns={responsive([1, 2, 3])}>
      {plans.map((plan, i) => (
        <PricingPlan key={i} {...plan} isBilledAnnually={isBilledAnnually} />
      ))}
    </SimpleGrid>
  );
}

export default PricingPlans;

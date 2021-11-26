import { useState } from "react";
import { useColorModeValue } from "hooks";
import { IconType } from "react-icons/lib";

import PricingHeader from "./PricingHeader";
import PricingPlans from "./PricingPlans";
import HomeSectionWrapper from "../HomeSectionWrapper";

interface Plan {
  icon: IconType;
  name: string;
  price: [number, number];
  features: string[];
  isPopular: boolean;
}

interface Props {
  title: string;
  description: string;
  plans: Plan[];
}

function Pricing({ title, description, plans }: Props) {
  const [isBilledAnnually, setIsBilledAnnually] = useState(true);

  const handleChange = (_: string, value: boolean) => {
    setIsBilledAnnually(value);
  };

  const background = useColorModeValue("gray.100", "gray.800");

  return (
    <HomeSectionWrapper background={background} align="flex-start">
      <PricingHeader
        title={title}
        description={description}
        isBilledAnnually={isBilledAnnually}
        handleChange={handleChange}
      />
      <PricingPlans plans={plans} isBilledAnnually={isBilledAnnually} />
    </HomeSectionWrapper>
  );
}

export default Pricing;

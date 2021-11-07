import { VStack, Heading, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Props {
  icon: IconType;
  name: string;
  color: string;
}

function PricingPlanHeader({ icon, name, color }: Props) {
  return (
    <VStack spacing="24px">
      <Icon as={icon} fontSize="4xl" color={color} />
      <Heading size="lg" fontWeight="bold">
        {name}
      </Heading>
    </VStack>
  );
}

export default PricingPlanHeader;

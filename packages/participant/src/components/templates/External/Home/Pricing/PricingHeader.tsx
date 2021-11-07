import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { SwitchInput } from "components/atoms/Inputs/SwitchInput/SwitchInput";
import { useDevice } from "hooks";

interface Props {
  title: string;
  description: string;
  isBilledAnnually: boolean;
  handleChange: (name: string, value: boolean) => void;
}

function PricingHeader({ title, description, isBilledAnnually, handleChange }: Props) {
  const { isPhone } = useDevice();

  return (
    <VStack align="flex-start" spacing="24px" marginBottom="48px">
      <VStack align="flex-start" spacing="15px">
        <Heading fontWeight="900">{title}</Heading>
        <Text color="gray.500" width={isPhone ? "100%" : "450px"}>
          {description}
        </Text>
      </VStack>
      <HStack align="center" fontWeight="500">
        <Text>Monthly</Text>
        <SwitchInput name="billingFrequency" value={isBilledAnnually} onChange={handleChange} />
        <Text>Annually</Text>
      </HStack>
    </VStack>
  );
}

export default PricingHeader;

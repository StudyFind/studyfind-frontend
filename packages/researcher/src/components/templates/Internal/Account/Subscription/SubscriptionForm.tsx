import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { SwitchInput } from "components/atoms";
import { PlanData, UserPlan } from "./Subscription";

import SubscriptionPlan from "./SubscriptionPlan";

interface Props {
  plans: PlanData[];
  redirecting: boolean;
  selectedPlan: UserPlan;
  isBilledAnnually: boolean;
  handleSubscribe: () => Promise<void>;
  handleSelectPlan: (name: UserPlan) => void;
  handleChangeBilledAnnually: (name: string, value: boolean) => void;
}

function SubscriptionForm({
  plans,
  redirecting,
  selectedPlan,
  isBilledAnnually,
  handleSubscribe,
  handleSelectPlan,
  handleChangeBilledAnnually,
}: Props) {
  return (
    <VStack align="flex-start" spacing="24px" marginBottom="48px">
      <HStack align="center" fontWeight="500">
        <Text>Billed Monthly</Text>
        <SwitchInput name="" value={isBilledAnnually} onChange={handleChangeBilledAnnually} />
        <Text>Billed Annually</Text>
      </HStack>
      <VStack spacing="10px" paddingY="4px" width="100%">
        {plans.map((plan, i) => (
          <SubscriptionPlan
            key={i}
            value={plan.name === selectedPlan}
            isBilledAnnually={isBilledAnnually}
            handleSelect={handleSelectPlan}
            {...plan}
          />
        ))}
      </VStack>
      <HStack width="100%" justify="flex-end">
        <Button colorScheme="green" onClick={handleSubscribe} isLoading={redirecting}>
          Continue
        </Button>
      </HStack>
    </VStack>
  );
}

export default SubscriptionForm;

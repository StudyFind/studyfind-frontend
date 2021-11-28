import { Hint, Card, CheckboxInput } from "components/atoms";
import { Heading, HStack, Icon, Text, Flex } from "@chakra-ui/react";
import { FaQuestionCircle } from "react-icons/fa";
import { PlanData, UserPlan } from "./Subscription";

interface Props extends PlanData {
  value: boolean;
  isBilledAnnually: boolean;
  handleSelect: (value: UserPlan) => void;
}

function SubscriptionPlan({
  icon,
  name,
  title,
  value,
  price,
  features,
  isPopular,
  isBilledAnnually,
  handleSelect,
}: Props) {
  const selectedCardStyle = {
    borderWidth: "2px",
    borderColor: "blue.300",
  };

  const billedPrice = price[isBilledAnnually ? 1 : 0];

  return (
    <Card
      padding="20px"
      cursor="pointer"
      onClick={() => handleSelect(name)}
      width="100%"
      {...(value ? selectedCardStyle : {})}
    >
      <Flex width="100%">
        <HStack spacing="10px">
          <CheckboxInput name={name} value={value} width="auto" onChange={() => {}} />
          <HStack>
            <Icon as={icon} color="blue.200" />
            <Heading size="md">{title}</Heading>
          </HStack>
        </HStack>
        <HStack spacing="10px" marginLeft="auto">
          <Text color="blue.200" fontWeight="bold">
            {billedPrice} per month
          </Text>
          <Hint icon={FaQuestionCircle} label={features.join(", ")} colorScheme="gray" />
        </HStack>
      </Flex>
    </Card>
  );
}

export default SubscriptionPlan;

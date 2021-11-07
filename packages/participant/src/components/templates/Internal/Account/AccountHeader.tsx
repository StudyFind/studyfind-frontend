import { Grid, Heading, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
}

function AccountHeader({ title, description }: Props) {
  return (
    <Grid gap="5px">
      <Heading size="md">{title}</Heading>
      <Text color="gray.500">{description}</Text>
    </Grid>
  );
}

export default AccountHeader;

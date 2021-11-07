import { Grid, Heading, Text } from "@chakra-ui/react";

interface Props {
  subtitle: string;
  subdescription: string;
}

function AccountSubHeader({ subtitle, subdescription }: Props) {
  return (
    <Grid gap="3px">
      <Heading size="sm" marginBottom="0">
        {subtitle}
      </Heading>
      <Text color="gray.500" fontSize="14px">
        {subdescription}
      </Text>
    </Grid>
  );
}

export default AccountSubHeader;

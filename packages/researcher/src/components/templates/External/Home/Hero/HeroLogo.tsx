import { Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "components/atoms/Link/Link";
import SFLogo from "images/logo.png";

interface Props {
  logoLink: string;
}

function HeroLogo({ logoLink }: Props) {
  return (
    <Link to={logoLink}>
      <HStack align="center" spacing="10px">
        <Image src={SFLogo} height="1.8rem" />
        <Heading fontSize="1.7rem">StudyFind</Heading>
      </HStack>
    </Link>
  );
}

export default HeroLogo;

import { useState, useEffect } from "react";
import { useColorModeValue, useDevice } from "hooks";
import { useWindowScroll, useWindowSize } from "react-use";

import { Flex, Button } from "@chakra-ui/react";
import { Link } from "components/atoms/Link/Link";

import HeaderLogo from "./HeaderLogo";

interface Props {
  logoLink: string;
  buttonText: string;
  buttonLink: string;
}

function Header({ logoLink, buttonText, buttonLink }: Props) {
  const [active, setActive] = useState(false);

  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  useEffect(() => {
    setActive(y > height);
  }, [y, height]);

  const { isPhone } = useDevice();
  const background = useColorModeValue("white", "gray.900");

  const borderColor = useColorModeValue("gray.200", "gray.700");

  if (!active) {
    return null;
  }

  return (
    <Flex
      top="0"
      position="fixed"
      justify="space-between"
      align="center"
      padding={isPhone ? "20px" : "20px 50px"}
      background={background}
      width="100%"
      boxShadow="sm"
      zIndex="400"
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
    >
      <Link to={logoLink}>
        <HeaderLogo />
      </Link>
      <Link to={buttonLink}>
        <Button size={isPhone ? "sm" : "md"} colorScheme="blue">
          {buttonText}
        </Button>
      </Link>
    </Flex>
  );
}

export default Header;

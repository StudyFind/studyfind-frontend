import styled from "styled-components";

import { Link } from "components/atoms/Link/Link";
import { Flex, Heading, Image } from "@chakra-ui/react";

import SFLogo from "images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

interface Props {
  isPhone: boolean;
  active: boolean;
  toggleActive: () => void;
}

function SidebarLogo({ isPhone, active, toggleActive }: Props) {
  const ToggleIcon = active ? FaTimes : FaBars;

  return (
    <Flex justify="space-between" align="center" padding="20px">
      <LogoLink to="/" isWrapper>
        <Image height="1.6rem" marginRight="10px" src={SFLogo} />
        <Heading fontSize="1.5rem" color="white">
          StudyFind
        </Heading>
      </LogoLink>
      {isPhone && <ToggleIcon size="24px" color="white" onClick={toggleActive} />}
    </Flex>
  );
}

const LogoLink = styled(Link)`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default SidebarLogo;

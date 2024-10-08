import styled from "styled-components";
import { useColorModeValue } from "hooks";

import { CustomFile } from "./types";

import { Box, Flex, Divider, Text, Icon, Tooltip } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Props {
  file: CustomFile;
  handleOpen: (name: string) => void;
}

function FileCard({ file, handleOpen }: Props) {
  const iconBackgroundColor = useColorModeValue("white", "gray.900");
  const detailsBackgroundColor = useColorModeValue("gray.50", "gray.800");
  const fileNameColor = useColorModeValue("gray.600", "gray.100");
  const secondaryColor = useColorModeValue("gray.400", "gray.500");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box borderRadius="6px" borderWidth="1px" borderColor={borderColor}>
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderTopRadius="6px"
        cursor="pointer"
        background={iconBackgroundColor}
        onClick={() => handleOpen(file.name)}
      >
        <Icon as={FaFilePdf} color={secondaryColor} height="30px" width="30px" />
      </Flex>
      <Divider color={borderColor} />
      <Box padding="15px" background={detailsBackgroundColor} borderBottomRadius="6px">
        <Name
          color={fileNameColor}
          fontSize="14px"
          fontWeight="500"
          cursor="pointer"
          onClick={() => handleOpen(file.name)}
        >
          <Tooltip label={file.name}>{file.name}</Tooltip>
        </Name>
        <Flex justify="space-between" align="center">
          <Text color={secondaryColor} fontSize="14px">
            {file.date}
          </Text>
          <Flex gridGap="6px" align="center">
            <Tooltip label="Open File">
              <Box>
                <Icon
                  as={ExternalLinkIcon}
                  fontSize="14px"
                  color={secondaryColor}
                  _hover={{ color: "blue.400" }}
                  pointerEvents="all"
                  onClick={() => handleOpen(file.name)}
                  cursor="pointer"
                />
              </Box>
            </Tooltip>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

const Name = styled(Text)`
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 100%; /* fallback */
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export default FileCard;

import { useEffect } from "react";
import styled from "styled-components";
import moment from "moment-timezone";

import Linkify from "react-linkify";

import { Flex, Text, Icon, Link as ChakraLink } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";
import { MessageDocumentExtended } from "types/extended";
import { Link } from "components/atoms";

interface Props {
  message: MessageDocumentExtended;
  handleMessageRead: (messageID: string) => void;
  isUserMessageSender: boolean;
}

function Message({ message, handleMessageRead, isUserMessageSender }: Props) {
  useEffect(() => {
    if (!isUserMessageSender) {
      handleMessageRead(message.id);
    }
  }, []);

  const placement = isUserMessageSender ? "flex-end" : "flex-start";

  return (
    <Flex direction="column" align={placement}>
      <MessageBox direction="column" align={placement}>
        <Text
          maxWidth="300px"
          padding="5px 10px"
          rounded="md"
          color={isUserMessageSender ? "white" : "gray.700"}
          background={isUserMessageSender ? "blue.500" : "gray.200"}
        >
          <Linkify
            componentDecorator={(decoratedHref, decoratedText, key) =>
              decoratedHref.includes("@") ? (
                <ChakraLink target="_blank" href={decoratedHref} textDecoration="underline">
                  {decoratedText}
                </ChakraLink>
              ) : (
                <Link
                  key={key}
                  to={decoratedHref}
                  color={isUserMessageSender ? "white" : "blue.500"}
                  textDecoration="underline"
                >
                  {decoratedText}
                </Link>
              )
            }
          >
            {message.text}
          </Linkify>
        </Text>
        <Meta paddingTop="4px" align="center" gridGap="2px" justify={placement}>
          {isUserMessageSender && (
            <Icon
              fontSize="12px"
              color={message.read ? "green.500" : "gray.500"}
              as={HiCheckCircle}
            />
          )}
          <Text fontSize="xs" color="gray.500" fontWeight="500">
            {moment(message.createdAt).fromNow()}
          </Text>
        </Meta>
      </MessageBox>
    </Flex>
  );
}

const Meta = styled(Flex)`
  display: none;
`;

const MessageBox = styled(Flex)`
  &:hover > ${Meta} {
    display: flex;
  }
`;

export default Message;

import { useColorModeValue, useCred } from "hooks";

import { MutableRefObject, useEffect, useRef } from "react";
import { MessageDocumentExtended } from "types/extended";

import { Box, Flex } from "@chakra-ui/react";
import { Disclaimer, LoadMoreButton } from "components/atoms";

import MessagesItem from "./MessagesItem";

interface Props {
  messages: MessageDocumentExtended[];
  fetchedAll: boolean;
  handleMessageRead: (messageID: string) => void;
  handleLoadMore: () => void;
  loadingMore: boolean;
}

function MessageList({
  messages,
  fetchedAll,
  handleMessageRead,
  handleLoadMore,
  loadingMore,
}: Props) {
  const cred = useCred();
  const messageListbackground = useColorModeValue("#f8f9fa", "gray.800");

  const bottomRef = useRef<HTMLElement>(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView();
  };

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 20);
  }, []);

  return (
    <Box overflowY="scroll" background={messageListbackground}>
      <Flex justify="center" width="100%" padding="20px" paddingBottom="0">
        {fetchedAll ? (
          <Box maxWidth="330px">
            <Disclaimer colorScheme="red">
              Messages are not end-to-end encrypted. Please avoid sharing personal health
              information through this chat.
            </Disclaimer>
          </Box>
        ) : (
          <LoadMoreButton
            fetchedAll={fetchedAll}
            fetchedAllText=""
            onClick={handleLoadMore}
            isLoading={loadingMore}
          />
        )}
      </Flex>
      <Flex justify="flex-start" direction="column" padding="20px" gridGap="8px" width="100%">
        {messages?.map((message) => (
          <MessagesItem
            key={message.id}
            message={message}
            handleMessageRead={handleMessageRead}
            isUserMessageSender={message.user === cred.uid}
          />
        ))}
      </Flex>
      <Box ref={bottomRef as MutableRefObject<HTMLDivElement>} />
    </Box>
  );
}

export default MessageList;

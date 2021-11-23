import { useColor } from "hooks";

import { auth } from "@studyfind/firebase";

import { MutableRefObject } from "react";
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
  bottomRef: MutableRefObject<HTMLDivElement | undefined>;
}

function MessageList({
  messages,
  fetchedAll,
  handleMessageRead,
  handleLoadMore,
  loadingMore,
  bottomRef,
}: Props) {
  const messageListbackground = useColor("#f8f9fa", "gray.800");

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
            isUserMessageSender={message.user === auth.getUser().uid}
          />
        ))}
      </Flex>
      <Box ref={bottomRef as MutableRefObject<HTMLDivElement>} />
    </Box>
  );
}

export default MessageList;

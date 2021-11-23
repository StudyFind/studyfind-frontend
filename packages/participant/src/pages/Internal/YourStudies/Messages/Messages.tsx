import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { usePagination } from "hooks";

import { Grid } from "@chakra-ui/react";
import { Loader } from "components/atoms";

import MessagesList from "./MessagesList";
import MessagesInput from "./MessagesInput";
import { actions, queries } from "@studyfind/api";

interface Params {
  studyID: string;
}

function Messages() {
  const { studyID } = useParams<Params>();

  const bottomRef = useRef<HTMLDivElement>();

  const {
    documents: messages,
    loading,
    error,
    loadingMore,
    handleLoadMore,
    fetchedAll,
  } = usePagination(queries.participant.getStudyParticipantMessagesQuery(studyID), 15);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView();
  };

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        scrollToBottom();
      }, 10);
    }
  }, [loading]);

  const handleMessageSend = async (text: string) => {
    return actions.participant.sendMessage({ studyID, text }).then(() => scrollToBottom());
  };

  const handleMessageRead = async (messageID: string) => {
    return actions.participant.readMessage({ studyID, messageID });
  };

  if (loading) {
    return <Loader height="calc(100vh - 80px)" />;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <Grid height="100%" gridTemplateRows="1fr 49px">
      <MessagesList
        messages={messages.slice().reverse()}
        fetchedAll={fetchedAll}
        loadingMore={loadingMore}
        handleLoadMore={handleLoadMore}
        handleMessageRead={handleMessageRead}
        bottomRef={bottomRef}
      />
      <MessagesInput handleMessageSend={handleMessageSend} />
    </Grid>
  );
}

export default Messages;

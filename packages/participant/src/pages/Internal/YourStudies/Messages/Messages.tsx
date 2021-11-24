import { useParams } from "react-router-dom";
import { usePagination } from "hooks";

import { actions, queries } from "@studyfind/api";

import { Grid } from "@chakra-ui/react";
import { Loader } from "components/atoms";

import MessagesList from "./MessagesList";
import MessagesInput from "./MessagesInput";

interface Params {
  studyID: string;
}

function Messages() {
  const { studyID } = useParams<Params>();

  const {
    documents: messages,
    loading,
    error,
    loadingMore,
    handleLoadMore,
    fetchedAll,
  } = usePagination(queries.participant.getStudyParticipantMessagesQuery(studyID), 15);

  const handleMessageSend = async (text: string) => {
    actions.participant.sendMessage({ studyID, text });
  };

  const handleMessageRead = async (messageID: string) => {
    actions.participant.readMessage({ studyID, messageID });
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
      />
      <MessagesInput handleMessageSend={handleMessageSend} />
    </Grid>
  );
}

export default Messages;

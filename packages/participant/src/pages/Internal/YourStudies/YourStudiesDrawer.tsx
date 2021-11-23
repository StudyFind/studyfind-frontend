import { SideDrawer } from "components/molecules";

import { Action, StudyFull } from "./types";

import Meetings from "./Meetings/Meetings";
import Messages from "./Messages/Messages";
import Reminders from "./Reminders/Reminders";
import Questions from "./Questions/Questions";

interface Props {
  action: Action;
  isOpen: boolean;
  study: StudyFull;
  handleClose: () => void;
}

function YourStudiesDrawer({ action, isOpen, study, handleClose }: Props) {
  if (!isOpen) {
    return null;
  }

  const render = {
    meetings: action === "meetings" && <Meetings study={study} />,
    reminders: action === "reminders" && <Reminders study={study} />,
    messages: action === "messages" && <Messages />,
    questions: action === "questions" && (
      <Questions questions={study.questions} responses={study.participant.responses} />
    ),
  };

  return (
    <SideDrawer heading={action} subheading={study.id} isOpen={isOpen} onClose={handleClose}>
      {render[action]}
    </SideDrawer>
  );
}

export default YourStudiesDrawer;

import { useContext } from "react";
import { useCred } from "hooks";

import { actions } from "@studyfind/api";

import { StudyDocumentExtended } from "types/extended";

import { FindStudiesContext } from "./FindStudiesContext";

import { StudyCardSmallParticipant } from "components/organisms";

interface Props {
  study: StudyDocumentExtended;
}

function StudyCardSmall({ study }: Props) {
  const cred = useCred();
  const { user, filters, handleAddCondition } = useContext(FindStudiesContext);

  const detailsRedirectLink = `/view-study/${study.id}/details`;
  const enrollRedirectLink = `/join-study/${study.id}/screening`;
  const hasParticipantEnrolled = user?.enrolled?.includes(study.id);
  const hasParticipantSaved = user?.saved?.includes(study.id);
  const isParticipantVerified = cred.emailVerified;

  const handleBookmark = () => {
    const saved = user?.saved;

    if (saved) {
      actions.participant.updateUserAccount({
        saved: saved.includes(study.id)
          ? saved.filter((studyID) => studyID !== study.id)
          : saved.concat(study.id),
      });
    }
  };

  return (
    <StudyCardSmallParticipant
      study={study}
      selectedConditions={filters.conditions}
      detailsRedirectLink={detailsRedirectLink}
      enrollRedirectLink={enrollRedirectLink}
      isParticipantVerified={isParticipantVerified}
      hasParticipantSaved={hasParticipantSaved || false}
      hasParticipantEnrolled={hasParticipantEnrolled || false}
      handleAddCondition={handleAddCondition}
      handleBookmark={handleBookmark}
    />
  );
}

export default StudyCardSmall;

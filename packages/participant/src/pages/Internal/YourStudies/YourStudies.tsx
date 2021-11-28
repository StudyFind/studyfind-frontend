import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Action, StudyFull } from "./types";

import { Loader } from "components/atoms";

import YourStudiesList from "./YourStudiesList";
import YourStudiesDrawer from "./YourStudiesDrawer";
import YourStudiesEmpty from "./YourStudiesEmpty";
import { useStudies, useUser } from "hooks";

interface Params {
  action: Action;
  studyID: string;
}

function YourStudies() {
  const { action, studyID } = useParams<Params>();

  const [yourStudiesFull, setYourStudiesFull] = useState<StudyFull[] | null>();

  const user = useUser();
  const studies = useStudies();

  const history = useHistory();

  const selectedStudy = yourStudiesFull?.find((study) => study.id === studyID);

  const handleLoadStudyParticipantData = async () => {
    const yourStudies = studies?.filter((study) => user?.enrolled.includes(study.id));
    const promises = yourStudies?.map(async (study) => {
      const snapshot = await study.ref.collection("participants").doc(user?.id).get();

      return {
        ...study,
        participant: {
          id: snapshot.id,
          ref: snapshot.ref,
          ...snapshot.data(),
        },
      } as StudyFull;
    });

    if (promises) {
      const data = await Promise.all(promises);
      setYourStudiesFull(data);
    }
  };

  useEffect(() => {
    handleLoadStudyParticipantData();
  }, []);

  const isOpen = !!(action && selectedStudy);

  const handleOpen = (studyID: string, action: Action) => {
    history.push(`/your-studies/${studyID}/${action}`);
  };

  const handleClose = () => {
    history.push(`/your-studies`);
  };

  if (!yourStudiesFull) {
    return <Loader height="100%" />;
  }

  return yourStudiesFull.length ? (
    <>
      <YourStudiesList studies={yourStudiesFull} handleOpen={handleOpen} />
      {selectedStudy && (
        <YourStudiesDrawer
          action={action}
          isOpen={isOpen}
          study={selectedStudy}
          handleClose={handleClose}
        />
      )}
    </>
  ) : (
    <YourStudiesEmpty />
  );
}

export default YourStudies;

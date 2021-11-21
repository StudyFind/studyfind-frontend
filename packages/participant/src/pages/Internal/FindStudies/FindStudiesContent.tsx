import { useContext } from "react";

import { Loader, Message } from "components/atoms";
import { FindStudiesContext } from "./FindStudiesContext";

import Filters from "./Filters";
import StudyGrid from "./StudyGrid";

function FindStudiesContent() {
  const { loading, error } = useContext(FindStudiesContext);

  if (loading) {
    return <Loader height="calc(100vh - 128px)" />;
  }

  if (error) {
    return (
      <Message
        status="failure"
        title="Database Error"
        description="We could not load the studies"
        showBackground
      />
    );
  }

  return (
    <>
      <Filters />
      <StudyGrid />
    </>
  );
}

export default FindStudiesContent;

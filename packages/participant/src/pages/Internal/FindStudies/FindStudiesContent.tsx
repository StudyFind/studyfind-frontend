import { useRef } from "react";

import StudyFilters from "./StudyFilters";
import StudyGrid from "./StudyGrid";

function FindStudiesContent() {
  const topRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <span ref={topRef} />
      <StudyFilters />
      <StudyGrid scrollToTop={scrollToTop} />
    </>
  );
}

export default FindStudiesContent;

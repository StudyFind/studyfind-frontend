import { useRef } from "react";

import FindStudiesFilters from "./FindStudiesFilters";
import FindStudiesGrid from "./FindStudiesGrid";

function FindStudiesContent() {
  const topRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <span ref={topRef} />
      <FindStudiesFilters />
      <FindStudiesGrid scrollToTop={scrollToTop} />
    </>
  );
}

export default FindStudiesContent;

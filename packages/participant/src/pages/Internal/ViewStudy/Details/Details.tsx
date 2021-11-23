import DetailsHead from "./DetailsHead";
import DetailsCard from "./DetailsCard";

import { StudyDocumentExtended } from "types/extended";

interface Props {
  study: StudyDocumentExtended;
}

function Details({ study }: Props) {
  return (
    <>
      <DetailsHead study={study} />
      <DetailsCard study={study} />
    </>
  );
}

export default Details;

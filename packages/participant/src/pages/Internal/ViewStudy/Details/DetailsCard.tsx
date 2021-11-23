import { StudyCardLarge } from "components/organisms";
import { StudyDocumentExtended } from "types/extended";

interface Props {
  study: StudyDocumentExtended;
}

function DetailsCard({ study }: Props) {
  return <StudyCardLarge study={study} />;
}

export default DetailsCard;

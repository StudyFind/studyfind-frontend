import FindStudiesContent from "./FindStudiesContent";
import { FindStudiesProvider } from "./FindStudiesContext";

function FindStudies() {
  return (
    <FindStudiesProvider>
      <FindStudiesContent />
    </FindStudiesProvider>
  );
}
export default FindStudies;

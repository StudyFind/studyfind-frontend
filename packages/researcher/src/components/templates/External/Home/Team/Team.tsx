import { ColorScheme } from "types/global";
import HomeSectionWrapper from "../HomeSectionWrapper";
import TeamHeader from "./TeamHeader";
import TeamMembers from "./TeamMembers";
import TeamPanels from "./TeamPanels";

interface Founder {
  image: string;
  name: string;
  position: string;
  description: string;
}

interface Panel {
  title: string;
  colorScheme: ColorScheme;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface Props {
  title: string;
  description: string;
  founders: Founder[];
  panels: Panel[];
}

function Team({ title, description, founders, panels }: Props) {
  return (
    <HomeSectionWrapper direction="column" spacing="80px">
      <TeamHeader title={title} description={description} />
      <TeamMembers founders={founders} />
      <TeamPanels panels={panels} />
    </HomeSectionWrapper>
  );
}

export default Team;

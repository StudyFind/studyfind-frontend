import { useDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";
import { ColorScheme } from "types/global";

import TeamPanel from "./TeamPanel";

interface Panel {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  colorScheme: ColorScheme;
}

interface Props {
  panels: Panel[];
}

function TeamPanels({ panels }: Props) {
  const { isPhone, responsive } = useDevice();

  return (
    <SimpleGrid
      alignItems="center"
      spacing={isPhone ? "20px" : "60px"}
      columns={responsive([1, 2, 3])}
      width="100%"
    >
      {panels.map((panel, i) => (
        <TeamPanel
          key={i}
          title={panel.title}
          colorScheme={panel.colorScheme}
          description={panel.description}
          buttonText={panel.buttonText}
          buttonLink={panel.buttonLink}
        />
      ))}
    </SimpleGrid>
  );
}

export default TeamPanels;

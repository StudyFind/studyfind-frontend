import React from "react";
import styled from "styled-components";
import { useTabs, useColor, useDevice } from "hooks";
import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Tab as TabType } from "types/global";

interface Props {
  tabs: TabType[];
  useURL?: boolean;
  [key: string]: any;
}

function HorizontalTabs({ tabs, useURL = true, ...rest }: Props) {
  const color = useColor("gray.400", "gray.500");
  const borderColor = useColor("gray.300", "gray.600");

  const { tabIndex, setTabIndex } = useTabs(tabs, useURL);

  const { isPhone } = useDevice();

  return (
    <Tabs index={tabIndex} colorScheme="blue" height="100%">
      <TabList
        overflowX={isPhone ? "scroll" : undefined}
        overflowY={isPhone ? "hidden" : undefined}
        borderBottomWidth={isPhone ? "0" : "2px"}
        borderBottomColor={borderColor}
        height="42px"
      >
        {tabs.map((t, i) => (
          <TabItem
            key={i}
            className="tab-item"
            onClick={() => setTabIndex(i)}
            color={color}
            borderBottomColor={borderColor}
          >
            {t.name}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((t, i) => (
          <TabPanel key={i} paddingX="0" {...rest}>
            {t.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

const TabItem = styled(Tab)`
  font-weight: 600;
  display: flex;
  grid-gap: 8px;
  align-items: center;

  &:active {
    background: transparent !important;
    color: rgb(101, 115, 132);
  }

  &:focus {
    box-shadow: none !important;
  }
`;

export default HorizontalTabs;

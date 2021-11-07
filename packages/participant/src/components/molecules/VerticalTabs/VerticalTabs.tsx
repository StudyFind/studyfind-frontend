import { useTabs } from "hooks";

import { useDevice } from "hooks";

import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Tab } from "types/global";

import VerticalTabItem from "./VerticalTabItem";

type Props = {
  tabs: Tab[];
  useURL: boolean;
  [key: string]: any;
};

function VerticalTabs({ tabs, useURL = true, ...rest }: Props) {
  const { tabIndex, setTabIndex } = useTabs(tabs, useURL);
  const { isPhone } = useDevice();

  return (
    <Flex direction={isPhone ? "column" : "row"} align={isPhone ? undefined : "flex-start"}>
      <SimpleGrid spacing="10px" columns={isPhone ? 2 : 1} width={isPhone ? "100%" : "180px"}>
        {tabs.map((t, i) => (
          <VerticalTabItem
            key={i}
            name={t.name}
            icon={t.icon}
            selected={tabIndex === i}
            onClick={() => setTabIndex(i)}
            showBorder={isPhone}
          />
        ))}
      </SimpleGrid>
      <Flex {...rest}>{tabs[tabIndex].content}</Flex>
    </Flex>
  );
}

export default VerticalTabs;

import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tab } from "types/global";

function useTabs(tabs: Tab[], useURL: boolean) {
  const history = useHistory();
  const { tab } = useParams<{ tab: string }>();

  const findTabIndex = () => {
    if (!useURL) {
      return 0;
    }

    const found = tabs.findIndex((t) => {
      const split = t.link.split("/");
      const last = split[split.length - 1];
      return last === tab;
    });

    return found === -1 ? null : found;
  };

  const [tabIndex, setTabIndex] = useState(findTabIndex() ?? 0);

  const handleUpdatePath = () => {
    history.push(tabs[tabIndex].link);
  };

  useEffect(() => {
    const firstIndex = 0;
    const lastIndex = tabs.length - 1;

    const handleBack = () => {
      setTabIndex((prevIndex) => {
        if (prevIndex === firstIndex) {
          return lastIndex;
        }

        return prevIndex - 1;
      });
    };

    const handleNext = () => {
      setTabIndex((prevIndex) => {
        if (prevIndex === lastIndex) {
          return firstIndex;
        }

        return prevIndex + 1;
      });
    };

    const handleArrowKeys = (e: any) => {
      // TODO: find the correct event instead of using "any"

      const keyCode = e.keyCode;
      const isTabActive = document.activeElement?.classList.contains("tab-item");

      if (isTabActive) {
        e.preventDefault();

        if ([37, 38].includes(keyCode)) handleBack(); // down & left arrow keys
        if ([39, 40].includes(keyCode)) handleNext(); // up & right arrow keys
      }
    };

    (document.querySelector(".tab-item") as HTMLElement)?.focus();
    document.addEventListener("keydown", handleArrowKeys, false);

    return () => {
      document.removeEventListener("keydown", handleArrowKeys, false);
    };
  }, []);

  useEffect(() => {
    const found = findTabIndex() ?? 0;
    setTabIndex(found);
  }, [tab]);

  useEffect(() => {
    const tabItems = document.querySelectorAll(".tab-item");
    (tabItems[tabIndex] as HTMLElement)?.focus();

    if (useURL) {
      if (tabIndex !== findTabIndex()) {
        handleUpdatePath();
      }
    }
  }, [tabIndex]);

  return { tabIndex, setTabIndex };
}

export default useTabs;

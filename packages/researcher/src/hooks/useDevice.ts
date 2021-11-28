import { useMediaQuery } from "@chakra-ui/react";

function useDevice() {
  const [isDesktop] = useMediaQuery("(min-width: 1280px)");
  const [isTablet] = useMediaQuery("(min-width: 768px)");
  const [isPhone] = useMediaQuery("(min-width: 0px)");

  const responsive = <T>(values: [T, T, T]) => {
    if (isDesktop) return values[2];
    if (isTablet) return values[1];
    if (isPhone) return values[0];
    return values[0];
  };

  return {
    responsive,
    isDesktop,
    isTablet: isTablet && !isDesktop,
    isPhone: isPhone && !isTablet && !isDesktop,
  };
}

export default useDevice;

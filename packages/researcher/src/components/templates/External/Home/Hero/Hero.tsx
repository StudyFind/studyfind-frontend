import { useDevice } from "hooks";

import HomeSectionWrapper from "../HomeSectionWrapper";

import HeroLogo from "./HeroLogo";
import HeroCallout from "./HeroCallout";

interface Props {
  logoLink: string;
  blackText: string;
  blueText: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

function Hero({ logoLink, blackText, blueText, buttonText, buttonLink, image }: Props) {
  const { isPhone } = useDevice();

  return (
    <HomeSectionWrapper
      direction="column"
      justify="space-between"
      align="flex-start"
      padding={isPhone ? "30px" : "50px"}
      backgroundImage={isPhone || `url(${image})`}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="right"
    >
      <HeroLogo logoLink={logoLink} />
      <HeroCallout
        blackText={blackText}
        blueText={blueText}
        buttonText={buttonText}
        buttonLink={buttonLink}
      />
    </HomeSectionWrapper>
  );
}

export default Hero;

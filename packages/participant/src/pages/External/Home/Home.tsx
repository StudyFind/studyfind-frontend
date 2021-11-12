import { useColor } from "hooks";
import { Box, Divider } from "@chakra-ui/react";
import { ColorScheme } from "types/global";
import {
  FcSurvey,
  FcCalendar,
  FcCollaboration,
  FcVideoCall,
  FcOvertime,
  FcAbout,
} from "react-icons/fc";

import Header from "components/templates/External/Home/Header/Header";
import Footer from "components/templates/External/Home/Footer/Footer";

import Hero from "components/templates/External/Home/Hero/Hero";
import Features from "components/templates/External/Home/Features/Features";
import Team from "components/templates/External/Home/Team/Team";
import Mailing from "components/templates/External/Home/Mailing/Mailing";

import Background from "images/microscope.jpg";
import Yohan from "images/founders/yohan.png";
import Andrew from "images/founders/andrew.png";

interface Panel {
  title: string;
  colorScheme: ColorScheme;
  description: string;
  buttonText: string;
  buttonLink: string;
}

function Home() {
  const dividerColor = useColor("gray.200", "gray.600");

  const features = [
    {
      icon: <FcSurvey />,
      title: "Screening Survey",
      description:
        "A brief survey that will help you automatically know what studies you may qualify for",
    },
    {
      icon: <FcOvertime />,
      title: "Reminders",
      description: "Our reminders feature will keep you on track with study requirements",
    },
    {
      icon: <FcCollaboration />,
      title: "Secure Messaging",
      description:
        "We value your privacy, so rest assured our messaging feature is HIPAA compliant",
    },
    {
      icon: <FcVideoCall />,
      title: "Meetings",
      description:
        "Get on calls with researchers at different milestones in the participation process",
    },
    {
      icon: <FcCalendar />,
      title: "Calendar",
      description:
        "The calendar feature allows you to view all your scheduled meetings in a single place",
    },
    {
      icon: <FcAbout />,
      title: "Notifications",
      description:
        "The notification feature keeps you updated about your status in the recruitment process",
    },
  ];

  const title = "About Us";
  const description =
    "StudyFind was founded by Andrew and Yohan with the aim of making it easier for anyone and everyone to participate in clinical research. The StudyFind platform provides participants and researchers a conducive ecosystem to connect seamlessly.";

  const founders = [
    {
      image: Yohan,
      name: "Yohan Jhaveri",
      position: "Co-Founder",
      description:
        "Yohan recently graduated from Emory University with a degree in Computer Science and Economics",
    },
    {
      image: Andrew,
      name: "Andrew Garcia",
      position: "Co-Founder",
      description:
        "Andrew earned his Masters in Public Health at Emory University with a focus on Health Policy and Management",
    },
  ];

  const panels: Panel[] = [
    {
      title: "Interns",
      colorScheme: "blue",
      description: "The talented individuals resonsible for the day-to-day operations at StudyFind",
      buttonText: "Meet the team",
      buttonLink: "/team#interns",
    },
    {
      title: "Advisors",
      colorScheme: "teal",
      description:
        "The diverse group of professionals that guide us in making a product researchers love",
      buttonText: "Meet the advisors",
      buttonLink: "/team#board",
    },
    {
      title: "Collaborations",
      colorScheme: "purple",
      description: "The institutions that enable us to constantly push boundaries and innovate",
      buttonText: "View our collaborations",
      buttonLink: "/team#collaborations",
    },
  ];

  const handleSubscribe = (email: string) => {
    // return mailing.subscribe({ email });
    // subscribe
    return Promise.resolve(email); // TODO: Create mailing document
  };

  const SectionDivider = () => <Divider borderColor={dividerColor} />;

  return (
    <Box>
      <Header logoLink="/home#" buttonText="Join Now" buttonLink="/auth" />

      <Hero
        logoLink="/home#"
        blackText="Participating in clinical trials"
        blueText="is just a click away"
        buttonText="Join Now"
        buttonLink="/auth"
        image={Background}
      />

      <SectionDivider />

      <Features features={features} />

      <SectionDivider />

      <Team title={title} description={description} founders={founders} panels={panels} />

      <SectionDivider />

      <Mailing handleSubscribe={handleSubscribe} />

      <SectionDivider />

      <Footer
        links={{
          linkedin: "https://www.linkedin.com/company/studyfind",
          instagram: "https://www.instagram.com/studyfindco",
          facebook: "https://www.facebook.com/studyfindco",
        }}
      />
    </Box>
  );
}

export default Home;

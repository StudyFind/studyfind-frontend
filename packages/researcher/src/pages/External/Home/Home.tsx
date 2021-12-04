import { useColorModeValue } from "hooks";
import { Box, Divider } from "@chakra-ui/react";
import { ColorScheme } from "types/global";
import {
  FcSurvey,
  FcCalendar,
  FcCollaboration,
  FcVideoCall,
  FcOvertime,
  FcAbout,
  FcBarChart,
  FcRules,
} from "react-icons/fc";
import { SiHive, SiMarketo, SiMicrosoft } from "react-icons/si";

import Header from "components/templates/External/Home/Header/Header";
import Footer from "components/templates/External/Home/Footer/Footer";

import Hero from "components/templates/External/Home/Hero/Hero";
import Features from "components/templates/External/Home/Features/Features";
import Team from "components/templates/External/Home/Team/Team";
import Pricing from "components/templates/External/Home/Pricing/Pricing";
import Mailing from "components/templates/External/Home/Mailing/Mailing";

import Background from "images/microscope.jpg";
import Yohan from "images/founders/yohan.png";
import Andrew from "images/founders/andrew.png";
import { IconType } from "react-icons/lib";

interface Panel {
  title: string;
  colorScheme: ColorScheme;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface Plan {
  icon: IconType;
  name: string;
  price: [number, number];
  features: string[];
  isPopular: boolean;
}

function Home() {
  const dividerColor = useColorModeValue("gray.200", "gray.600");

  const features = [
    {
      icon: <FcSurvey />,
      title: "Pre-Screening Survey",
      description:
        "The pre-screening survey can filter participants based on customizable inclusionary and exclusionary criteria",
    },
    {
      icon: <FcBarChart />,
      title: "Participant Eligibility Score",
      description:
        "The participant eligibility score will highlight the most qualified candidates based on their reponses to the survey",
    },
    {
      icon: <FcOvertime />,
      title: "Participant Reminders",
      description:
        "The reminder feature can be customized to alert your participants according to your study's specific needs",
    },
    {
      icon: <FcRules />,
      title: "Participant Notes",
      description:
        "The notes feature allows you to privately record important details for the participants of your study",
    },
    {
      icon: <FcCollaboration />,
      title: "HIPAA Compliant Messaging",
      description:
        "The HIPAA compliant messaging feature allows you to communicate with participants securely and effectively",
    },
    {
      icon: <FcVideoCall />,
      title: "Scheduling Meetings",
      description:
        "The meetings feature enables you to schedule meetings for participants at different milestones in the lifecycle of your study",
    },
    {
      icon: <FcCalendar />,
      title: "Calendar View",
      description:
        "The calendar view allows you to glance at meetings scheduled with participants across all studies",
    },
    {
      icon: <FcAbout />,
      title: "Notification Updates",
      description:
        "The notification feature allows you to recieve timely notification in and out of application through emails and text",
    },
  ];

  const title = "About Us";
  const description =
    "Andrew and Yohan met at HackATL, an annual event organized by Emory University. During the event they composed and pitched an early prototype of the StudyFind software. Yohan's tech skills in confluence with Andrew's public health expertise drove them to futher develop StudyFind and make it a viable solution to the participant recruitment problem we see today.";

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
        "The diverse group of professionals that guide us in making a product our users love",
      buttonText: "Meet the Advisory Board",
      buttonLink: "/team#board",
    },
    {
      title: "Collaborations",
      colorScheme: "purple",
      description: "The institutions that enable us to constantly push boundaries and innovate",
      buttonText: "View our Collaborations",
      buttonLink: "/team#collaborations",
    },
  ];

  const plans: Plan[] = [
    {
      icon: SiMicrosoft,
      name: "Free",
      price: [0, 0],
      features: ["Create Studies", "Write Participant Notes", "Track Participant Status"],
      isPopular: false,
    },

    {
      icon: SiMarketo,
      name: "Standard",
      price: [99, 79],
      features: ["Everything in Basic", "Participant Reminders", "Schedule Meetings"],
      isPopular: true,
    },

    {
      icon: SiHive,
      name: "Premium",
      price: [249, 199],
      features: ["Everything in Standard", "Instant Messaging", "Email and Text Notifications"],
      isPopular: false,
    },
  ];

  const SectionDivider = () => <Divider borderColor={dividerColor} />;

  return (
    <Box>
      <Header logoLink="/home#" buttonText="Join Now" buttonLink="/auth" />

      <Hero
        logoLink="/home#"
        blackText="We simplify coordinating"
        blueText="with your participants"
        buttonText="Start Now"
        buttonLink="/auth"
        image={Background}
      />

      <SectionDivider />

      <Features features={features} />

      <SectionDivider />

      <Team title={title} description={description} founders={founders} panels={panels} />

      <SectionDivider />

      <Pricing
        title="Pricing Plans"
        description="Start with a free three month trial and then pick the plan of your liking. Account plans
  unlock additional features and newer features may arrive to higher tier plans first."
        plans={plans}
      />

      <SectionDivider />

      <Mailing />

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

import { useColor } from "hooks";

import { Box, Divider, HStack } from "@chakra-ui/react";

import David from "images/interns/david.jpeg";
import Gustavo from "images/interns/gustavo.png";
import Jeremy from "images/interns/jeremy.png";
import Jonathon from "images/interns/jonathon.jpeg";
import Keely from "images/interns/keely.png";
import Michael from "images/interns/michael.png";
import Wendy from "images/interns/wendy.jpeg";
import Wenkai from "images/interns/wenkai.png";
import Yuyao from "images/interns/yuyao.png";
import Mikolaj from "images/interns/mikolaj.jpg";
import Zeil from "images/interns/zeil.jpg";
import Mileen from "images/interns/mileen.jpg";
import Natalie from "images/interns/natalie.jpg";
import Eric from "images/interns/eric.jpg";
import Jason from "images/interns/jason.jpg";
import Nikita from "images/interns/nikita.jpg";
import Liang from "images/interns/liang.jpg";
import Sundari from "images/interns/sundari.jpg";
import Sandra from "images/interns/sandra.jpeg";
import Randy from "images/interns/randy.png";
import Ivan from "images/interns/ivan.png";
import Etna from "images/interns/etna.png";
import Biraj from "images/interns/biraj.png";
import Brandon from "images/interns/brandon.png";

import Vir from "images/advisory/vir.png";
import Alexis from "images/advisory/alexis.png";
import Ayesha from "images/advisory/ayesha.png";
import Evans from "images/advisory/evans.png";
import Gabi from "images/advisory/gabi.png";
import Hannah from "images/advisory/hannah.png";
import Reina from "images/advisory/reina.png";
import Romina from "images/advisory/romina.png";
import Steven from "images/advisory/steven.png";
import Suraj from "images/advisory/suraj.png";
import Talia from "images/advisory/talia.png";

import Emory from "images/collaborations/emory.png";
import SBU from "images/collaborations/sbu.png";
import GaTech from "images/collaborations/gatech.png";
import Stanford from "images/collaborations/stanford.png";

import Interns from "components/templates/External/Team/Interns/Interns";
import Advisors from "components/templates/External/Team/Advisors/Advisors";
import Collaborations from "components/templates/External/Team/Collaborations/Collaborations";
import ReturnHomeLink from "pages/External/ReturnHomeLink";

function Team() {
  const dividerColor = useColor("gray.200", "gray.600");

  const interns = [
    {
      image: David,
      name: "David Chen",
      position: "Sr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/david-chen-105ba9158/",
    },
    {
      image: Jeremy,
      name: "Jeremy Webb",
      position: "Sr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/jwebb45/",
    },
    {
      image: Jonathon,
      name: "Jonathon Sisson",
      position: "Sr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/jonathon-sisson/",
    },
    {
      image: Eric,
      name: "Eric Park",
      position: "Jr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/eric-park-1a03421b7/",
    },
    {
      image: Jason,
      name: "Jason Ji",
      position: "Jr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/jason-ji-566673166/",
    },
    {
      image: Etna,
      name: "Etna Ozkara",
      position: "Jr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/etna-ozkara-1a876b204/",
    },
    {
      image: Biraj,
      name: "Biraj Ghimire",
      position: "SBU-CSTEP Fellow",
      linkedinURL: "https://www.linkedin.com/in/biraj-ghimire-4b01891b1/",
    },
    {
      image: Brandon,
      name: "Brandon Banarsi",
      position: "SBU-CSTEP Fellow",
      linkedinURL: "https://www.linkedin.com/in/brandon-banarsi/",
    },
    {
      image: Sandra,
      name: "Sandra Mustopa",
      position: "Marketing and Technical Writing",
      linkedinURL: "https://www.linkedin.com/in/sandra-mustopa7090-graphicdesigner/",
    },
    {
      image: Randy,
      name: "Randy Erickson",
      position: "Marketing and Technical Writing",
      linkedinURL: "https://www.linkedin.com/in/randy-erickson-2138878a/",
    },
  ];

  const alumni = [
    {
      image: Mileen,
      name: "Mileen Meyer",
      position: "Marketing",
      linkedinURL: "https://www.linkedin.com/in/mileenmeyer/",
    },
    {
      image: Natalie,
      name: "Natalie Merizalde",
      position: "Marketing",
      linkedinURL: "https://www.linkedin.com/in/natalie-m-115095136/",
    },
    {
      image: Nikita,
      name: "Nikita Kute",
      position: "Research",
      linkedinURL: "https://www.linkedin.com/in/nikita-kute-bds-mph/",
    },
    {
      image: Mikolaj,
      name: "Mikolaj Figurski",
      position: "Software Developer",
      linkedinURL: "https://www.linkedin.com/in/mikolaj-figurski-1257a7149/",
    },
    {
      image: Zeil,
      name: "Zeil Ren",
      position: "Software Developer",
      linkedinURL: "https://www.linkedin.com/in/ziyaoren/",
    },
    {
      image: Sundari,
      name: "Sundari Arunarasu",
      position: "Backend Developer",
      linkedinURL: "https://www.linkedin.com/in/sivasomasundari-arunarasu-6299131a6/",
    },
    {
      image: Gustavo,
      name: "Gustavo Fonseca",
      position: "Jr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/gustavo-fonseca-a69b55135/",
    },
    {
      image: Michael,
      name: "Michael Albo",
      position: "Jr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/michael-albo-55b74b196/",
    },
    {
      image: Wenkai,
      name: "Wenkai Zheng",
      position: "Sr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/wenkai-zheng/",
    },
    {
      image: Wendy,
      name: "Wendy Mo",
      position: "Sr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/weiting-mo-82974b138/",
    },
    {
      image: Liang,
      name: "Liang Chen",
      position: "Software Developer",
    },
    {
      image: Yuyao,
      name: "Yuyao Wang",
      position: "Data Scientist",
      linkedinURL: "https://www.linkedin.com/in/yuyao-wang-march/",
    },
    {
      image: Keely,
      name: "Keely Culbertson",
      position: "Software Developer",
      linkedinURL: "https://www.linkedin.com/in/keely-culbertson/",
    },
    {
      image: Ivan,
      name: "Ivan Yau",
      position: "Jr. Software Developer",
      linkedinURL: "https://www.linkedin.com/in/ivan-yau/",
    },
  ];

  const advisors = [
    {
      image: Alexis,
      name: "Alexis Whitmire",
      position: "Atlanta VA Medical Center",
      linkedinURL: "https://www.linkedin.com/in/alexiswhitmire/",
    },
    {
      image: Ayesha,
      name: "Ayesha Hameed",
      position: "BioPharma Informatic",
      linkedinURL: "https://www.linkedin.com/in/ayesha-hameed-20196a40/",
    },
    {
      image: Evans,
      name: "Evans Pope",
      position: "Cleveland Clinic",
      linkedinURL: "https://www.linkedin.com/in/evans-d-pope-iii-ms-4839a118/",
    },
    {
      image: Gabi,
      name: "Gabrielle Schiller",
      position: "Mount Sinai",
      linkedinURL: "https://www.linkedin.com/in/gabrielle-schiller/",
    },
    {
      image: Hannah,
      name: "Hannah Lipper",
      position: "University of Massachusetts",
      linkedinURL: "https://www.linkedin.com/in/hannah-s-lipper-mph-she-her-2190a765/",
    },
    {
      image: Reina,
      name: "Reina Factor",
      position: "UCLA",
      linkedinURL: "https://www.linkedin.com/in/reina-factor-5a5745202/",
    },
    {
      image: Romina,
      name: "Romina Nejad",
      position: "Stanford",
      linkedinURL: "https://www.linkedin.com/in/romina-nejad/",
    },
    {
      image: Steven,
      name: "Steven Choi",
      position: "ThreeWire",
      linkedinURL: "https://www.linkedin.com/in/steven-choi-3b547973/",
    },
    {
      image: Suraj,
      name: "Suraj Oomman",
      position: "UNC-Chapel Hill",
      linkedinURL: "https://www.linkedin.com/in/surajoomman/",
    },
    {
      image: Talia,
      name: "Talia Korn",
      position: "Mount Sinai",
      linkedinURL: "https://www.linkedin.com/in/talia-korn-3a28b4132/",
    },
    {
      image: Vir,
      name: "Vir Mittal",
      position: "SAP",
      linkedinURL: "https://www.linkedin.com/in/vir-m-1b1981130/",
    },
  ];

  const collaborations = [
    {
      logo: Emory,
      sections: [
        {
          title: "Emory Entrepreneurial Excellerator (EEE)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
          title: "Emory Biotech Consulting Club (EBCC)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
    },
    {
      logo: GaTech,
      sections: [
        {
          title: "Computer Science Junior Design Capstone",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
    },
    {
      logo: SBU,
      sections: [
        {
          title: "CSTEP Fellowship Program",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
    },
    {
      logo: Stanford,
      sections: [
        {
          title: "Software Pilot",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
    },
  ];

  return (
    <Box>
      <HStack justify="flex-start" padding="30px">
        <ReturnHomeLink />
      </HStack>
      <Interns interns={interns} alumni={alumni} />
      <Divider borderColor={dividerColor} />
      <Advisors advisors={advisors} />
      <Divider borderColor={dividerColor} />
      <Collaborations collaborations={collaborations} />
    </Box>
  );
}

export default Team;

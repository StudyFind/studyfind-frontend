import { Grid } from "@chakra-ui/react";
import { FaVenusMars, FaBirthdayCake, FaHeart, FaGlobe } from "react-icons/fa";

import StudyBullet from "./StudyBullet";

function StudyBullets({
  sex = "All",
  minAge = 0,
  maxAge = 100,
  acceptsHealthyParticipants = false,
  acceptsRemoteParticipants = false,
}) {
  return (
    <Grid gap="10px">
      <StudyBullet icon={FaVenusMars} value={sex} />
      <StudyBullet icon={FaBirthdayCake} value={`${minAge}-${maxAge} years`} />
      <StudyBullet
        icon={FaHeart}
        value={
          acceptsHealthyParticipants
            ? "Accepts Healthy Participants"
            : "Does Not Accept Healthy Participants"
        }
      />
      <StudyBullet
        icon={FaGlobe}
        value={
          acceptsRemoteParticipants
            ? "Accepts Remote Participants"
            : "Does Not Accept Remote Participants"
        }
      />
    </Grid>
  );
}

export default StudyBullets;

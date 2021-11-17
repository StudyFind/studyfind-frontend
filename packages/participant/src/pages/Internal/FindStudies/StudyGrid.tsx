export {};

// import { Message } from "components";
// import { Box, SimpleGrid } from "@chakra-ui/react";

// import { useDevice } from "hooks";

// import AutoScroll from "./AutoScroll";

// import { auth } from "database/firebase";

// function StudyGrid({ user, conditions, filteredStudies, handleAddCondition }) {
//   const { responsive } = useDevice();

//   return filteredStudies.length ? (
//     <SimpleGrid spacing="25px" align="flex-start" columns={responsive([1, 2, 2])}>
//       {filteredStudies.map((study) => (
//         <StudyCardSmall
//           key={study.id}
//           study={study}
//           conditions={conditions}
//           handleAddCondition={handleAddCondition}
//           handleBookmark={
//             user.saved.includes(study.id) ? () => Promise.resolve() : () => Promise.resolve()
//           }
//           detailsRedirectLink={`/study/${study.id}/details`}
//           enrollRedirectLink={`/study/${study.id}/screening`}
//           hasParticipantEnrolled={user.enrolled.includes(study.id)}
//           hasParticipantSaved={user.saved.includes(study.id)}
//           isParticipantVerified={auth.currentUser.emailVerified}
//         />
//       ))}
//       <AutoScroll />
//     </SimpleGrid>
//   ) : (
//     <Box h="500px">
//       <Message
//         type="neutral"
//         title="Find Studies"
//         description="No studies to display. Try changing your search filters for better results!"
//       />
//     </Box>
//   );
// }

// export default StudyGrid;

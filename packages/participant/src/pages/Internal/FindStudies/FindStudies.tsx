export default () => <div>Find Studies</div>;

// import moment from "moment-timezone";

// import { auth, firestore } from "@studyfind/firebase";

// import { useMemo, useState } from "react";
// import { useDocument, useCollection } from "hooks";

// import { Side } from "types/global";
// import { Document } from "types/side";
// import { StudyDocument } from "@studyfind/types";
// import { StudyDocumentExtended, Filters } from "./types";

// import { Flex, Heading, Icon } from "@chakra-ui/react";

// import StudyGrid from "./StudyGrid";
// import FilterList from "./FilterList";
// import ConditionsList from "./ConditionsList";

// import { FaSearch } from "react-icons/fa";
// import { Loader, Message, TextInput } from "components/atoms";
// import { getStudiesReference } from "@studyfind/firebase/dist/firestore/references";

// function FindStudies() {
//   const cred = auth.getUser();
//   const side = process.env.REACT_APP_SIDE as Side;

//   const reference = {
//     RESEARCHER: firestore.references.getResearcherReference(cred?.uid),
//     PARTICIPANT: firestore.references.getParticipantReference(cred?.uid),
//   }[side];

//   const [user, userLoading, userError] = useDocument<Document>(reference);
//   const [studies, studiesLoading, studiesError] = useCollection<StudyDocument>(
//     getStudiesReference().where("activated", "==", true)
//   );

//   const loading = userLoading || studiesLoading;
//   const error = userError || studiesError;

//   const [filters, setFilters] = useState<Filters>({
//     search: "",
//     control: false,
//     observational: false,
//     interventional: false,
//     hideEnrolled: false,
//     hideSaved: false,
//     onlySaved: false,
//     acceptsHealthyParticipants: true,
//     acceptsRemoteParticipants: true,
//     conditions: [],
//   });

//   const handleFilters = (name: string, value: boolean | string | string[]) => {
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddCondition = (condition: string) => {
//     setFilters((prev) => {
//       if (!prev.conditions.includes(condition)) {
//         const updated = prev.conditions.concat(condition);
//         return { ...prev, conditions: updated };
//       }
//       return prev;
//     });
//   };

//   const handleDeleteCondition = (index: number) => {
//     setFilters((prev) => {
//       const updated = prev.conditions.filter((_, i) => i !== index);
//       return { ...prev, conditions: updated };
//     });
//   };

//   const handleClearConditions = () => {
//     setFilters((prev) => ({ ...prev, conditions: [] }));
//   };

//   const isValidAge = (studyMinAge: number, studyMaxAge: number, userBirthdate: string) => {
//     if (!studyMinAge || !studyMaxAge || !userBirthdate) {
//       return true;
//     }

//     const userAge = moment().diff(userBirthdate, "years");
//     return studyMinAge <= userAge && userAge <= studyMaxAge;
//   };

//   const filter = (studies: StudyDocumentExtended[] | undefined) => {
//     if (!user || !studies) {
//       return [];
//     }

//     return studies.filter((study) => {
//       // ========== MANDATORY ==========
//       if (study.researcher.id && !study.activated) return false;
//       if (user.sex && ![user.sex, "All"].includes(study.sex)) return false;
//       if (user.birthdate && !isValidAge(study.minAge, study.maxAge, user.birthdate)) return false;

//       // ========== OPTIONAL ==========

//       // FILTERS
//       if (filters.acceptsHealthyParticipants && !study.acceptsHealthyParticipants) return false;
//       if (filters.observational && study.type !== "Observational") return false;
//       if (filters.interventional && study.type !== "Interventional") return false;
//       if (filters.hideEnrolled && user.enrolled.includes(study.id)) return false;
//       if (filters.hideSaved && user.saved.includes(study.id)) return false;
//       if (filters.onlySaved && !user.saved.includes(study.id)) return false;

//       if (filters.search) {
//         const cleanedSearch = filters.search.trim().toLowerCase();
//         const cleanedTitle = study.title.toLowerCase();
//         const match = cleanedTitle.includes(cleanedSearch);

//         if (!match) {
//           return false;
//         }
//       }

//       // CONDITIONS
//       if (filters.conditions.length) {
//         const intersection = study.conditions.filter((value) => filters.conditions.includes(value));

//         if (!intersection.length) {
//           return false;
//         }
//       }
//       return true;
//     });
//   };

//   const filteredStudies = useMemo(() => filter(studies), [studies, filters]);

//   if (loading) {
//     return <Loader />;
//   }

//   if (error) {
//     return (
//       <Message
//         status="failure"
//         title="Database Error"
//         description="We could not load the studies"
//       />
//     );
//   }

//   return (
//     <>
//       <Flex justify="space-between" align="center" mb="25px">
//         <Heading size="lg">Find Studies</Heading>
//       </Flex>

//       <Flex justify="space-between" mb="25px" gridGap="15px">
//         <TextInput
//           name="search"
//           value={filters.search}
//           onChange={handleFilters}
//           placeholder="Search"
//           left={<Icon color="gray.400" as={FaSearch} />}
//           leftWidth="40px"
//         />
//       </Flex>

//       <FilterList filters={filters} handleFilters={handleFilters} />

//       <ConditionsList
//         conditions={filters.conditions}
//         handleDeleteCondition={handleDeleteCondition}
//         handleClearConditions={handleClearConditions}
//       />

//       <StudyGrid
//         conditions={filters.conditions}
//         filteredStudies={filteredStudies}
//         handleAddCondition={handleAddCondition}
//       />
//     </>
//   );
// }

// export default FindStudies;

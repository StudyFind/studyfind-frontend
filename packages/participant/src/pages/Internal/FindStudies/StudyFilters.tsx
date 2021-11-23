import { useContext } from "react";

import { Box, Flex, Heading, Icon, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import { TextInput, ToggleInput } from "components/atoms";
import { FaSearch } from "react-icons/fa";

import { FindStudiesContext } from "./FindStudiesContext";

function StudyFilters() {
  const { filters, handleFilters, handleDeleteCondition, handleClearConditions } =
    useContext(FindStudiesContext);

  return (
    <>
      <Flex justify="space-between" mb="25px" gridGap="15px">
        <TextInput
          name="search"
          value={filters.search}
          onChange={handleFilters}
          placeholder="Search"
          left={<Icon color="gray.400" as={FaSearch} />}
          leftWidth="40px"
        />
      </Flex>
      <Box my="25px">
        <Heading size="md" mb="10px">
          Filters
        </Heading>
        <Flex gridGap="10px" wrap="wrap">
          <ToggleInput
            name="acceptsRemoteParticipants"
            label="Accepts Remote Participants"
            value={filters.acceptsRemoteParticipants}
            onChange={handleFilters}
          />
          <ToggleInput
            name="acceptsHealthyParticipants"
            label="Accepts Healthy Participants"
            value={filters.acceptsHealthyParticipants}
            onChange={handleFilters}
          />
          <ToggleInput
            name="observational"
            label="Observational Studies"
            value={filters.observational}
            onChange={handleFilters}
          />
          <ToggleInput
            name="interventional"
            label="Interventional Studies"
            value={filters.interventional}
            onChange={handleFilters}
          />
          <ToggleInput
            name="hideEnrolled"
            label="Hide Enrolled Studies"
            value={filters.hideEnrolled}
            onChange={handleFilters}
          />
          <ToggleInput
            name="hideSaved"
            label="Hide Saved Studies"
            value={filters.hideSaved}
            onChange={handleFilters}
          />
          <ToggleInput
            name="onlySaved"
            label="Only Saved Studies"
            value={filters.onlySaved}
            onChange={handleFilters}
          />
        </Flex>
      </Box>
      {!!filters.conditions.length && (
        <Box my="25px">
          <Heading size="md" mb="10px">
            Conditions
          </Heading>
          <Flex gridGap="10px" wrap="wrap">
            {filters.conditions.map((condition, index) => (
              <Tag key={index} variant="solid" size="md" colorScheme="green">
                <TagLabel>{String(condition)}</TagLabel>
                <TagCloseButton onClick={() => handleDeleteCondition(index)} />
              </Tag>
            ))}
            {filters.conditions.length > 3 && (
              <Box onClick={() => handleClearConditions()}>
                <Tag m="3px" size="md">
                  <TagLabel>Clear all</TagLabel>
                </Tag>
              </Box>
            )}
          </Flex>
        </Box>
      )}
    </>
  );
}

export default StudyFilters;

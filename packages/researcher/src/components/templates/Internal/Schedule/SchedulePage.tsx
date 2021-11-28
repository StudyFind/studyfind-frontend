import { useState } from "react";
import { useDevice } from "hooks";

import { datetime } from "@studyfind/utils";

import { Stack, Box, Heading, Text } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";

import { SecondaryButton } from "components/atoms";
import { Modal, Calendar } from "components/molecules";

import ScheduleMeetings from "./ScheduleMeetings";

function SchedulePage() {
  const { isDesktop } = useDevice();

  const today = datetime.getToday();

  const [date, setDate] = useState(today);
  const [open, setOpen] = useState(false);

  const displayDate = datetime.getFriendlyDate(datetime.getNow());

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleSelectDate = (value: string) => {
    setDate(value);
    handleCloseModal();
  };

  return (
    <Stack direction={isDesktop ? "row" : "column-reverse"} spacing="20px" align="flex-start">
      <Box width="100%">
        <Stack direction="row" justify="space-between" align="flex-start">
          <Box>
            <Heading size="md">Meetings</Heading>
            {isDesktop && <Text color="gray.500">{displayDate}</Text>}
          </Box>
          {isDesktop || (
            <SecondaryButton size="sm" leftIcon={<FaCalendar />} onClick={handleOpenModal}>
              {displayDate || "Select Date"}
            </SecondaryButton>
          )}
        </Stack>
        <ScheduleMeetings date={date} />
      </Box>
      {isDesktop ? (
        <Stack justify="center">
          <Calendar date={date} setDate={setDate} />
        </Stack>
      ) : (
        <Modal open={open} handleClose={handleCloseModal} width="330px">
          <Box padding="15px">
            <Calendar date={date} setDate={handleSelectDate} />
          </Box>
        </Modal>
      )}
    </Stack>
  );
}

export default SchedulePage;

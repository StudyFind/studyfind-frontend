import { useState } from "react";
import { useColorModeValue } from "hooks";

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { SecondaryButton } from "components/atoms";
import { Confirm } from "context/ConfirmContext";

interface Props extends Confirm {
  handleClose: () => void;
}

function ConfirmModal({
  title,
  description,
  colorScheme,
  buttonText,
  handleClose,
  handleConfirm,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    return handleConfirm().finally(() => {
      handleClose();
      setLoading(false);
    });
  };

  const handleClosing = () => {
    if (!loading) {
      handleClose();
    }
  };

  const textColor = useColorModeValue("gray.500", "gray.400");
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <AlertDialog
      size="lg"
      motionPreset="scale"
      isCentered
      isOpen={true}
      onClose={handleClosing}
      leastDestructiveRef={undefined}
    >
      <AlertDialogOverlay background="rgb(0, 0, 0, 0.75)">
        <AlertDialogContent background={backgroundColor}>
          <Box padding="20px" width="100%">
            <Heading fontSize="lg" marginBottom="8px">
              {title}
            </Heading>
            <Text color={textColor}>{description}</Text>
            <Flex marginTop="24px" gridGap="10px" justify="flex-end">
              <SecondaryButton isDisabled={loading} onClick={handleClose}>
                Cancel
              </SecondaryButton>
              <Button
                isLoading={loading}
                colorScheme={colorScheme}
                loadingText={buttonText}
                onClick={handleSubmit}
              >
                {buttonText}
              </Button>
            </Flex>
          </Box>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default ConfirmModal;

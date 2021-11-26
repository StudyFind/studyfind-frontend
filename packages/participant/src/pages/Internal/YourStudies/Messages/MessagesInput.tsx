import { useEffect, useState } from "react";
import { useColorModeValue } from "hooks";

import { Flex } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import { Form, TextInput, ActionButton } from "components/atoms";

interface Props {
  handleMessageSend: (text: string) => Promise<void>;
}

function MessagesInput({ handleMessageSend }: Props) {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const input = document.querySelector('input[value=""]') as HTMLInputElement;
    input?.focus();
  }, []);

  const handleChange = (_: string, value: string) => {
    setText(value);
  };

  const handleSubmit = () => {
    if (text.trim()) {
      setIsSending(true);
      handleMessageSend(text).then(() => {
        setText("");
        setIsSending(false);
      });
    } else {
      setText((prev) => prev.trim());
    }
  };

  const background = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Form onSubmit={handleSubmit}>
      <Flex
        background={background}
        borderTopWidth="1px"
        borderTopColor={borderColor}
        width="100%"
        align="center"
        padding="4px"
        gridGap="4px"
      >
        <TextInput
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Type your message here..."
          borderWidth="0"
        />
        <ActionButton
          size="md"
          type="submit"
          background="transparent"
          icon={<FaPaperPlane />}
          isLoading={isSending}
        />
      </Flex>
    </Form>
  );
}

export default MessagesInput;

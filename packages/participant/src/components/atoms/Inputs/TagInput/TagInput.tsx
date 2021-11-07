import React, { useState } from "react";
import { useColor } from "hooks";
import { useMeasure } from "react-use";

import {
  Box,
  Button,
  Flex,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

import { TextInput } from "../TextInput/TextInput";
import { Form } from "../../Form/Form";

type Props = {
  readonly name: string;
  readonly value: string[];
  readonly error?: string;
  readonly label?: string;
  readonly buttonText?: string;
  readonly keepTagsSorted?: boolean;
  readonly allowDuplicates?: boolean;
  readonly formatTag?: (text: string) => string;
  readonly onChange: (name: string, value: string[]) => void;
};

export const TagInput = React.memo(
  ({
    name,
    label,
    value,
    error,
    onChange,
    buttonText = "Add Tag",
    keepTagsSorted = false,
    allowDuplicates = false,
    formatTag = (text) => text,
  }: Props) => {
    const [textValue, setTextValue] = useState("");
    const [textError, setTextError] = useState("");

    const [ref, { width }] = useMeasure<HTMLButtonElement>();

    const handleAddTag = () => {
      if (!textValue) {
        setTextError("Tag cannot be empty");
        return;
      }

      if (!allowDuplicates && value.includes(textValue)) {
        setTextError("Tag already exists");
        return;
      }

      const updated = [...value, textValue];

      if (keepTagsSorted) {
        updated.sort();
      }

      onChange(name, updated);

      setTextValue("");
    };

    const handleDeleteTag = (index: number) => {
      const updated = value.filter((_, i) => i !== index);
      onChange(name, updated);
    };

    const handleTextChange = (_: string, v: string) => {
      setTextValue(v);
      setTextError("");
    };

    const grayColor = useColor("gray.500", "gray.200");

    return (
      <Box width="100%">
        <Form onSubmit={handleAddTag}>
          <TextInput
            name="text"
            label={label}
            value={textValue}
            error={textError || error}
            right={
              <Button ref={ref} size="xs" type="submit" color={grayColor}>
                <FaPlus size="10px" />
                <Text marginLeft="4px">{buttonText}</Text>
              </Button>
            }
            rightWidth={`${width + 30}px`}
            onChange={handleTextChange}
          />
          <Flex gridGap="8px" marginTop="10px" flexWrap="wrap">
            {value.map((v, i) => (
              <Tag key={i} colorScheme="blue">
                <TagLabel>{formatTag(v)}</TagLabel>
                <TagCloseButton onClick={() => handleDeleteTag(i)} />
              </Tag>
            ))}
          </Flex>
        </Form>
      </Box>
    );
  }
);

import React from "react";
import { useColorModeValue } from "hooks";
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

// headers is an array of strings of length x
// headers is a 2D array of children of length y and sublength x

interface Props {
  headers: string[];
  data: React.ReactElement[][];
  [key: string]: any;
}

function Table({ headers, data, ...rest }: Props) {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const headCellBackgroundColor = useColorModeValue("gray.100", "gray.800");
  const bodyCellBackgroundColor = useColorModeValue("white", "gray.900");

  return (
    <ChakraTable {...rest}>
      <Thead>
        <Tr>
          {headers.map((text, i) => (
            <Th
              key={i}
              fontSize="12px"
              borderWidth="1px"
              borderColor={borderColor}
              background={headCellBackgroundColor}
            >
              {text}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, i) => (
          <Tr key={i}>
            {row.map((cell, j) => (
              <Td
                key={j}
                padding="8px 12px"
                borderWidth="1px"
                borderColor={borderColor}
                background={bodyCellBackgroundColor}
                nowrap
              >
                {cell}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
}

export default Table;

import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
  content: React.ReactElement;
  width: string;
}

function CarouselSlide({ content, width }: Props) {
  return (
    <Box
      display="inline"
      textAlign="center"
      width={width}
      height="100%"
      padding="20px"
      margin="auto"
      float="left"
      overflowY="visible"
      whiteSpace="normal"
    >
      {content}
    </Box>
  );
}

export default CarouselSlide;

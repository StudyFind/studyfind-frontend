import { CustomFile } from "./types";

import { useDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";

import FilesCard from "./FilesCard";

interface Props {
  files: CustomFile[];
  handleOpen: (name: string) => void;
}

function FilesGrid({ files, handleOpen }: Props) {
  const { responsive } = useDevice();

  return (
    <SimpleGrid spacing="20px" columns={responsive([1, 3, 4])}>
      {files.map((file, i) => (
        <FilesCard key={i} file={file} handleOpen={handleOpen} />
      ))}
    </SimpleGrid>
  );
}

export default FilesGrid;

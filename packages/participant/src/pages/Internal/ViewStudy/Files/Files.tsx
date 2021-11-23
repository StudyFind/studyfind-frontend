import { useEffect, useState } from "react";

import { StudyDocumentExtended } from "types/extended";
import { CustomFile } from "./types";

import { storage } from "@studyfind/firebase";
import { datetime } from "@studyfind/utils";

import FilesGrid from "./FilesGrid";
import FilesEmpty from "./FilesEmpty";
import FilesLoading from "./FilesLoading";

import TabHeader from "../TabHeader";

interface Props {
  study: StudyDocumentExtended;
}

function Files({ study }: Props) {
  const [files, setFiles] = useState<CustomFile[]>([]);
  const [loading, setLoading] = useState(true);

  const handleFetch = async () => {
    const { items } = await storage.listFiles(`study/${study.id}`);

    const studyFiles = await Promise.all(
      items.map(async (ref) => {
        const meta = await ref.getMetadata();

        return {
          ref,
          name: ref.name,
          date: datetime.getFriendlyDate(meta.timeCreated),
        };
      })
    );

    setFiles(studyFiles);
    setLoading(false);
  };

  const handleOpen = async (name: string) => {
    const url = await storage.downloadFile(`study/${study.id}/${name}`);
    window.open(url, "_newtab");
  };

  // const handleDelete = async (name: string) => {
  //   return storage.deleteFile(`study/${study.id}/${name}`).then(handleFetch);
  // };

  // const handleUpload = (name: string, file: File) => {
  //   return new Promise(async (resolve, reject) => {
  //     setUploading(true);
  //     const task = storage.uploadFile(`study/${study.id}/${name}`, file);

  //     task.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const filesize = snapshot.totalBytes;
  //         const uploaded = snapshot.bytesTransferred;
  //         const percent = Math.round((100 * uploaded) / filesize);
  //         setUploadStatus(percent);
  //       },
  //       (error) => {
  //         setUploading(false);
  //         setUploadSuccess(false);
  //         setUploadError(error.message);
  //         reject(error.message);
  //       },
  //       () => {
  //         setUploading(false);
  //         setUploadSuccess(true);
  //         handleFetch();
  //         resolve("SUCCESS");
  //       }
  //     );
  //   });
  // };

  useEffect(() => {
    handleFetch();
  }, []);

  if (!loading && !files?.length) {
    return <FilesEmpty />;
  }

  return (
    <>
      <TabHeader heading="Files" />
      {loading ? <FilesLoading /> : <FilesGrid files={files} handleOpen={handleOpen} />}
    </>
  );
}

export default Files;

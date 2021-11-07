import firebase from "firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

function useDocument<T>(query: firebase.firestore.DocumentReference) {
  return useDocumentData<T, "id", "ref">(query, { idField: "id", refField: "ref" });
}

export default useDocument;

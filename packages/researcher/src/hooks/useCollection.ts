import firebase from "firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

function useCollection<T>(query: firebase.firestore.Query<firebase.firestore.DocumentData>) {
  return useCollectionData<T, "id", "ref">(query, { idField: "id", refField: "ref" });
}

export default useCollection;

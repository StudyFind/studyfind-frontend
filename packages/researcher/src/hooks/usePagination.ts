import firebase from "firebase";
import { useState, useEffect } from "react";
import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";

type Query<T> = firebase.firestore.Query<T>;
type QuerySnapshot<T> = firebase.firestore.QuerySnapshot<T>;
type QueryDocumentSnapshot<T> = firebase.firestore.QueryDocumentSnapshot<T>;

function usePagination<Document>(query: Query<Document>, limit: number) {
  type DocumentExtended = Data<Document, "id", "ref">;

  const [documents, setDocuments] = useState<DocumentExtended[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<Document> | null>(null);
  const [fetchedAll, setFetchedAll] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const transformData = (snapshot: QuerySnapshot<Document>) => {
    const documents: DocumentExtended[] = [];

    snapshot.forEach((doc) => {
      documents.push({
        id: doc.id,
        ref: doc.ref,
        ...doc.data(),
      });
    });

    return documents;
  };

  //  <- new            old->
  //  0 1 2 3 4 5 6 7 8 9 ...

  useEffect(() => {
    return query.limit(limit).onSnapshot(
      (snapshot) => {
        const count = snapshot.docs.length;

        setDocuments(() => {
          return transformData(snapshot);

          // if (prev.length < limit) {
          //   return newDocs;
          // }

          // const prevCopy = [...prev];
          // const prevLast = prevCopy.pop();

          // const matchingIndex = newDocs.findIndex((d) => d.id === prevLast.id);

          // const overlap = prev.slice(0, matchingIndex);
          // const extra = newDocs.slice(matchingIndex);

          // return overlap.concat(extra);
        });

        if (!lastDoc) {
          setLoading(false);
          setLastDoc(snapshot.docs[count - 1]);
        }

        setFetchedAll(count < limit);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, []);

  const handleLoadMore = () => {
    setLoadingMore(true);

    query
      .limit(limit)
      .startAfter(lastDoc)
      .get()
      .then((snapshot) => {
        const count = snapshot.docs.length;

        setDocuments((prev) => {
          const next = transformData(snapshot);
          return prev.concat(next);
        });

        if (count < limit) {
          setFetchedAll(true);
        }

        setLastDoc(snapshot.docs[count - 1]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoadingMore(false));
  };

  return { documents, loading, error, loadingMore, handleLoadMore, fetchedAll };
}

export default usePagination;

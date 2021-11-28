import { useContext } from "react";
import { StudiesContext } from "context/StudiesContext";

function useStudies() {
  return useContext(StudiesContext);
}

export default useStudies;

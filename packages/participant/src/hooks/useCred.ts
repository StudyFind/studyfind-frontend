import { useContext } from "react";
import { CredContext } from "context/CredContext";

function useCred() {
  return useContext(CredContext);
}

export default useCred;

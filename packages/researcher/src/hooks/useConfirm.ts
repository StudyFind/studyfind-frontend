import { useContext } from "react";
import { ConfirmContext } from "context/ConfirmContext";

function useConfirm() {
  return useContext(ConfirmContext);
}

export default useConfirm;

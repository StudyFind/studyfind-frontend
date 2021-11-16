import { useState, createContext } from "react";
import { ColorScheme } from "types/global";

import ConfirmModal from "components/organisms/common/ConfirmModal";

export interface Confirm {
  title: string;
  description: string;
  buttonText: string;
  colorScheme: ColorScheme;
  handleConfirm: () => Promise<any>;
}

type Context = React.Dispatch<React.SetStateAction<Confirm | null>>;

interface Props {
  children: React.ReactNode;
}

export const ConfirmContext = createContext<Context>({} as Context);

export const ConfirmProvider = ({ children }: Props) => {
  const [confirm, setConfirm] = useState<Confirm | null>(null);

  const handleClose = () => {
    setConfirm(null);
  };

  return (
    <ConfirmContext.Provider value={setConfirm}>
      {confirm && <ConfirmModal handleClose={handleClose} {...confirm} />}
      {children}
    </ConfirmContext.Provider>
  );
};

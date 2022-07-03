import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

interface IModal {
  isOpen: boolean;
  Header: FC | null;
  Content: FC | null;
}

interface IModalContext {
  modal: IModal;
  setModal: Dispatch<SetStateAction<IModal>>;
}

interface IModalContextProviderProps {
  children: React.ReactNode;
}

const initialModal = {
  isOpen: false,
  Header: null,
  Content: null,
};

export const ModalContext = createContext({} as IModalContext);

export const ModalContextProvider: FC<IModalContextProviderProps> = ({
  children,
}) => {
  const [modal, setModal] = useState<IModal>(initialModal);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};

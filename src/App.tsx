import { useContext } from "react";
import ManagerContainer from "./components/ManagerContainer/ManagerContainer";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import { ModalContext } from "./context/ModalContext";

function App() {
  const { modal } = useContext(ModalContext);

  return (
    <div className="App">
      <ManagerContainer />
      {modal.isOpen && <ModalWindow />}
    </div>
  );
}

export default App;

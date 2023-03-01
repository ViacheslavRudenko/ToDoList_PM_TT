import { ReactElement } from "react";
import { useActions } from "../../../hooks/useActions";
import "./index.css";

const Modal = ({ children }: ModalPropsType): ReactElement => {
  const { toggleModal } = useActions();
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="content-box"> {children}</div>
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;

interface ModalPropsType {
  children: React.ReactNode;
}

import { useActions } from "../../hooks/useActions";
import "./index.css";

const Modal = ({ content }: ModalPropsType) => {
  const { toggleModal } = useActions();
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="content-box"> {content}</div>
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;

interface ModalPropsType {
  content: any;
}

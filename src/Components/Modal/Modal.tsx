import "./index.css";

const Modal = ({ content }: ModalPropsType) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">{content}</div>
      </div>
    </>
  );
};

export default Modal;

interface ModalPropsType {
  content: any;
}

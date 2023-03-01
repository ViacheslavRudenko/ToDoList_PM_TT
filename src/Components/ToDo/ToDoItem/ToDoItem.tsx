import { ToDoType } from "../../../store/ToDo/types";
import "./index.css";
const ToDoItem = ({ toDo, openModal, isModal }: ToDoPropsType) => {
  const onItemClick = () => {
    openModal && openModal(toDo);
  };
  return (
    <div className={isModal ? "" : "item-box"} onClick={onItemClick}>
      {!isModal && <p>{toDo.id}</p>}
      <p className={isModal ? "modal__title" : ""}>{toDo.title}</p>
      {isModal && <p className="modal__description-span">Description:</p>}
      <p>{toDo.description}</p>
      <div className={isModal && "modal__status"}>
        {isModal && <span>Status:</span>}
        <input type="checkbox" checked={toDo.status}></input>
      </div>
    </div>
  );
};

export default ToDoItem;

interface ToDoPropsType {
  toDo: ToDoType;
  openModal?: (data: ToDoType) => void;
  isModal: Boolean;
}

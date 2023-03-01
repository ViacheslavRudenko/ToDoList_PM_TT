import { ToDoType } from "../../../store/ToDo/types";
import "./index.css";

const ToDoItem = (props: ToDoPropsType) => {
  const { toDo, openModal, isModal = false, changeStatus, cutString } = props;

  const onItemClick = () => {
    openModal && openModal(toDo);
  };
  const chnageItemStatus = () => {
    changeStatus && changeStatus(toDo.id);
  };

  return (
    <div className={isModal ? "" : "item-box"} onClick={onItemClick}>
      {!isModal && <p>{toDo.id}</p>}
      <p className={isModal ? "modal__title" : ""}>
        {cutString ? cutString(toDo.title) : toDo.title}
      </p>
      {isModal && <p className="modal__description-span">Description:</p>}
      <p>{cutString ? cutString(toDo.description) : toDo.description}</p>
      <div className={isModal ? "modal__status" : ""}>
        {isModal && <span>Status:</span>}
        <input
          type="checkbox"
          checked={toDo.status}
          onChange={chnageItemStatus}
        ></input>
      </div>
    </div>
  );
};

export default ToDoItem;

interface ToDoPropsType {
  toDo: ToDoType;
  openModal?: (data: ToDoType) => void;
  isModal?: Boolean;
  changeStatus?: (id: number) => void;
  cutString?: (str: string) => string;
}

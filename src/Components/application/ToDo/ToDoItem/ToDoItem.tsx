import { ReactElement } from "react";
import { ToDoType } from "../../../../store/ToDo/types";
import { cutString } from "../../functions";
import "./index.css";

const ToDoItem = ({ toDo, openModal }: ToDoPropsType): ReactElement => {
  const onItemClick = () => {
    openModal(toDo);
  };

  return (
    <div className="item-box" onClick={onItemClick}>
      <p>{toDo.id}</p>
      <p>{cutString(toDo.title)}</p>
      <p>{cutString(toDo.description)}</p>
      <div>
        <input
          type="checkbox"
          checked={toDo.status}
          onChange={() => {}}
        ></input>
      </div>
    </div>
  );
};

export default ToDoItem;

interface ToDoPropsType {
  toDo: ToDoType;
  openModal: (data: ToDoType) => void;
}

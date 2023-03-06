import { memo, ReactElement } from "react";
import { ToDoType } from "../../../../store/ToDo/types";
import { cutString } from "../../functions";
import "./index.css";

const ToDoItem = ({ toDo }: ToDoPropsType): ReactElement => {
  return (
    <div className="item-box">
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

export default memo(ToDoItem);

interface ToDoPropsType {
  toDo: ToDoType;
}

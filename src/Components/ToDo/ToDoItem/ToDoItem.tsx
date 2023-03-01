import { ToDoType } from "../../../store/ToDo/types";
import "./index.css";
const ToDoItem = ({ toDo }: ToDoPropsType) => {
  return (
    <div className="item-box">
      <p>{toDo.id}</p>
      <p>{toDo.title}</p>
      <p>{toDo.description}</p>
      <div>
        <input type="checkbox" checked={toDo.status}></input>
      </div>
    </div>
  );
};

export default ToDoItem;

interface ToDoPropsType {
  toDo: ToDoType;
}

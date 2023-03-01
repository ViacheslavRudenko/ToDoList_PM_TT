import { useSelector } from "react-redux";
import { RootState } from "../../../store/root-reducer";
import { ToDoType } from "../../../store/ToDo/types";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./index.css";

const ToDoList = () => {
  const data = useSelector((state: RootState) => state.ToDo.data);
  return (
    <div className="container">
      <div className="title">
        <p>ID</p>
        <p>Title</p>
        <p>Description</p>
        <p>Status</p>
      </div>
      {data.length ? (
        <ul className="content">
          {data.map((item: ToDoType) => (
            <ol key={item.id}>
              <ToDoItem toDo={item} />
            </ol>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ToDoList;

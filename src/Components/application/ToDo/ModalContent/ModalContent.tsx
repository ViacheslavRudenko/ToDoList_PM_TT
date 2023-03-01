import { ReactElement } from "react";
import { ToDoType } from "../../../../store/ToDo/types";
import "./index.css";

const ModalContent = ({
  toDo,
  changeStatus,
}: ModalContentPropsType): ReactElement => {
  const chnageItemStatus = () => {
    changeStatus(toDo.id);
  };

  return (
    <div>
      <p className="modal__title">{toDo.title}</p>
      <p className="modal__description-span">Description:</p>
      <p>{toDo.description}</p>
      <div className={"modal__status"}>
        <span>Status:</span>
        <input
          type="checkbox"
          checked={toDo.status}
          onChange={chnageItemStatus}
        ></input>
      </div>
    </div>
  );
};

export default ModalContent;

interface ModalContentPropsType {
  toDo: ToDoType;
  changeStatus: (id: number) => void;
}

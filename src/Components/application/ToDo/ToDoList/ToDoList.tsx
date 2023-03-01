import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { RootState } from "../../../../store/root-reducer";
import { ToDoType } from "../../../../store/ToDo/types";
import Modal from "../../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./index.css";

const ToDoList = () => {
  const { data, isModalOpen } = useSelector((state: RootState) => state.ToDo);
  const [selectedTodo, setSelectedToDo] = useState<any>({});
  const { toggleModal, changeToDoStatus } = useActions();
  const changeStatus = (id: number) => {
    changeToDoStatus(id);
  };

  useEffect(() => {
    const item = data?.find((item) => item?.id === selectedTodo?.id) ?? {};
    setSelectedToDo(item);
  }, [data]);

  const openModal = (data: ToDoType) => {
    toggleModal();
    setSelectedToDo(data);
  };

  return (
    <>
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
                <ToDoItem toDo={item} openModal={openModal} />
              </ol>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
      {isModalOpen ? (
        <Modal>
          <ModalContent toDo={selectedTodo} changeStatus={changeStatus} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default ToDoList;

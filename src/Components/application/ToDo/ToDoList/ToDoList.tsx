import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { RootState } from "../../../../store/root-reducer";
import { ToDoType } from "../../../../store/ToDo/types";
import Modal from "../../Modal/Modal";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./index.css";

const ToDoList = () => {
  const { data, isModalOpen } = useSelector((state: RootState) => state.ToDo);
  const [modalContent, setModalContent] = useState(<></>);
  const { toggleModal, changeToDoStatus } = useActions();

  const changeStatus = (id: number) => {
    changeToDoStatus(id);
  };

  const openModal = (data: ToDoType) => {
    toggleModal();
    setModalContent(
      <ToDoItem toDo={data} isModal={true} changeStatus={changeStatus} />
    );
  };

  const cutString = (str: string) => {
    const maxLength = 10;
    if (str.length <= maxLength) {
      return str;
    } else {
      let lastSpaceIndex = str.lastIndexOf(" ", maxLength);
      if (lastSpaceIndex === -1) {
        return str.substring(0, maxLength);
      } else {
        return str.substring(0, lastSpaceIndex) + "...";
      }
    }
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
                <ToDoItem
                  toDo={item}
                  openModal={openModal}
                  cutString={cutString}
                />
              </ol>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
      {isModalOpen && <Modal content={modalContent} />}
    </>
  );
};

export default ToDoList;

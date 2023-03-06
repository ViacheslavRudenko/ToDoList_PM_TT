import { ReactElement, RefObject, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";
import { RootState } from "../../../store/root-reducer";
import { ToDoType } from "../../../store/ToDo/types";
import Btn from "../../ui/Btn/Btn";
import Input from "../../ui/Input/Input";
import "./index.css";

function CreateToDo(): ReactElement {
  const formRef: RefObject<HTMLFormElement> = useRef(null);
  const [inputTitleErr, setInputTitleErr] = useState<Boolean>(false);
  const [inputDescriptionErr, setInputDescriptionErr] =
    useState<Boolean>(false);

  const { addToDo } = useActions();
  const data = useSelector((state: RootState) => state.ToDo.data);

  const isEmpty = (str: string): Boolean => str.trim().length === 0;

  const setNewToDo = (event: any): void => {
    event.preventDefault();

    const form = event.target.elements;
    const { title, description } = {
      title: form.Title.value,
      description: form.Description.value,
    };

    const isTitleEmpty = isEmpty(title);
    const isDescriptionEmpty = isEmpty(description);

    if (!isTitleEmpty && !isDescriptionEmpty) {
      const toDo: ToDoType = {
        id: data.length + 1,
        title,
        description,
        status: false,
      };

      addToDo(toDo);
      if (formRef.current) {
        formRef.current.reset();
      }
    } else {
      setInputTitleErr(isTitleEmpty);
      setInputDescriptionErr(isDescriptionEmpty);
    }
  };

  return (
    <form className="create-box" onSubmit={setNewToDo} ref={formRef}>
      <Input name={"Title"} inputErr={inputTitleErr} />
      <Input name={"Description"} inputErr={inputDescriptionErr} />
      <div className="create__btn">
        <Btn name={"Create"} type={"submit"} />
      </div>
    </form>
  );
}

export default CreateToDo;

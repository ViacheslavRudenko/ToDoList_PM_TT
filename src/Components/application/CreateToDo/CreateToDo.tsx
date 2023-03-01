import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";
import { RootState } from "../../../store/root-reducer";
import { ToDoType } from "../../../store/ToDo/types";
import Btn from "../../ui/Btn/Btn";
import Input from "../../ui/Input/Input";
import "./index.css";

function CreateToDo(): ReactElement {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [inputTitleErr, setInputTitleErr] = useState<Boolean>(false);
  const [inputDescriptionErr, setInputDescriptionErr] =
    useState<Boolean>(false);

  const { addToDo } = useActions();
  const data = useSelector((state: RootState) => state.ToDo.data);

  const isEmpty = (str: string) => str.trim().length === 0;

  const setNewToDo = () => {
    const isTitleErr: Boolean = isEmpty(title);
    const isDecroptionErr: Boolean = isEmpty(description);

    setInputTitleErr(isTitleErr);
    setInputDescriptionErr(isDecroptionErr);

    if (!isTitleErr && !isDecroptionErr) {
      const toDo: ToDoType = {
        id: data.length + 1,
        title,
        description,
        status: false,
      };
      addToDo(toDo);
      setDescription("");
      setTitle("");
    }
  };

  return (
    <div className="create-box">
      <Input
        name={"Title"}
        inputErr={inputTitleErr}
        value={title}
        setChange={setTitle}
      />
      <Input
        name={"Description"}
        inputErr={inputDescriptionErr}
        value={description}
        setChange={setDescription}
      />
      <div className="create__btn">
        <Btn click={setNewToDo} name={"Create"} />
      </div>
    </div>
  );
}

export default CreateToDo;

import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { RootState } from "../../store/root-reducer";
import "./index.css";

function CreateToDo() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [inputTitleErr, setInputTitleErr] = useState<Boolean>(false);
  const [inputDescriptionErr, setInputDescriptionErr] =
    useState<Boolean>(false);

  const { addToDo } = useActions();
  const data = useSelector((state: RootState) => state.ToDo.data);

  const isEmpty = (str: string) => str.trim().length === 0;

  const setNewToDo = () => {
    const isTitleErr = isEmpty(title);
    const isDecroptionErr = isEmpty(description);

    setInputTitleErr(isTitleErr);
    setInputDescriptionErr(isDecroptionErr);

    if (!isTitleErr && !isDecroptionErr) {
      const toDo = { id: data.length + 1, title, description, status: false };
      addToDo(toDo);
      setDescription("");
      setTitle("");
    }
  };

  return (
    <div className="create-box">
      <div className="create__item">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={inputTitleErr ? "err-input" : ""}
        />
        {inputTitleErr ? (
          <p className="err-text"> This field is empty</p>
        ) : (
          <></>
        )}
      </div>
      <div className="create__item">
        <label>Description:</label>
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={inputDescriptionErr ? "err-input" : ""}
        />
        {inputDescriptionErr ? (
          <p className="err-text">This field is empty</p>
        ) : (
          <></>
        )}
      </div>
      <div className="create__btn">
        <button onClick={setNewToDo}>Create</button>
      </div>
    </div>
  );
}

export default CreateToDo;

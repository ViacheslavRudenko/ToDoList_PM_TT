import "./index.css";

function CreateToDo() {
  return (
    <div className="create-box">
      <div className="create__item">
        <label>Title:</label>
        <input type="text" placeholder="Enter title" />
      </div>
      <div className="create__item">
        <label>Description:</label>
        <input type="text" placeholder="Enter description" />
      </div>
      <div className="create__btn">
        <button>Create</button>
      </div>
    </div>
  );
}

export default CreateToDo;

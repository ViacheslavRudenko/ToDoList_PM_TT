import "./App.css";
import CreateToDo from "./Components/CreateToDo/CreateToDo";
import ToDoList from "./Components/ToDo/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <CreateToDo />
      <ToDoList />
    </div>
  );
}

export default App;

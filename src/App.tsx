import "./App.css";
import CreateToDo from "./Components/application/CreateToDo/CreateToDo";
import ToDoList from "./Components/application/ToDo/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <CreateToDo />
      <ToDoList />
    </div>
  );
}

export default App;

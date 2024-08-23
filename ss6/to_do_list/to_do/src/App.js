import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TodoList from "./components/TodoList";


function App() {
  return (
      <div className="App">
        <TodoList></TodoList>
        <ToastContainer />
      </div>
  );
}

export default App;
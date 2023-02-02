import TodoList from "./pages/TodoList";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import todolistSlice from './store/todolistSlice'
const store = configureStore({
  reducer:{
    todoList:todolistSlice,
  }
})
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;

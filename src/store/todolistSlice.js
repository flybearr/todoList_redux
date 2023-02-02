import { createSlice } from "@reduxjs/toolkit";

const initialState = {listData:[
    {
      id: 8,
      text: "Learn React.js",
      completed: true,
      editing: false,
    },  { id: 7, text: "Learn goLang", completed: false, editing: false },
    {
      id: 6,
      text: "Learn MySQL",
      completed: true,
      editing: false,
    },
    { id: 5, text: "Learn php", completed: false, editing: false },
    {
      id: 4,
      text: "Learn Node.js",
      completed: true,
      editing: false,
    },
    { id: 3, text: "Learn HTML", completed: false, editing: false },
    {
      id: 2,
      text: "Learn JS",
      completed: true,
      editing: false,
    },
    { id: 1, text: "Learn CSS", completed: false, editing: false },
     ]};


 const TodoListSlice = createSlice({
    name:'todoList',
    initialState:initialState,
    reducers:{
        addTodo(state,action){
            const {text} = action.payload 
            const newtodo = {
                id: Number(new Date()),
                text: text,
                completed: false,
                editing: false,
            }
            state.listData.unshift(newtodo)
        },
        delList(state,action){
            const {id} = action.payload 
            state.listData = state.listData.filter((todo)=> todo.id !== id)
        },
        toggleTodoCompleted(state,action){
            const {completed} = action.payload 
            state.listData = state.listData.map((v, i) => {
                if (v.id === completed) return { ...v, completed: !v.completed };
                return { ...v };
              });
        }
    }
})


export const {addTodo,delList,toggleTodoCompleted} = TodoListSlice.actions
export default TodoListSlice.reducer
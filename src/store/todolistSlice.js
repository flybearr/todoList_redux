import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listData: [
    {
      id: 8,
      text: "Learn React.js",
      completed: true,
      editing: false,
    },
    { id: 7, text: "Learn goLang", completed: false, editing: false },
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
  ],
};

const TodoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    //新增
    addTodo(state, action) {
      const { text } = action.payload;
      const newtodo = {
        id: Number(new Date()),
        text: text,
        completed: false,
        editing: false,
      };
      state.listData.unshift(newtodo);
    },
    //刪除
    delList(state, action) {
      const { id } = action.payload;
      state.listData = state.listData.filter((todo) => todo.id !== id);
    },
    //編輯完成度
    toggleTodoCompleted(state, action) {
      const { id } = action.payload;
      state.listData = state.listData.map((v, i) => {
        if (v.id === id) return { ...v, completed: !v.completed };
        return { ...v };
      });
    },
    //編輯狀態
    toggleTodoEditing(state, action) {
      const { id } = action.payload;
      state.listData = state.listData.map((v, i) => {
        if (v.id === id) return { ...v, editing: !v.editing };
        return { ...v };
      });
    },
    //編輯文字
    updateText(state, action) {
      const { id, objValue } = action.payload;
      state.listData = state.listData.map((v, i) => {
        if (v.id === id) return { ...v, ...objValue };
        return { ...v };
      });
    },
    //升冪排序
    asc(state, action) {
      state.listData = state.listData.sort((a, b) => a.completed - b.completed);
    },
    //降冪排序
    desc(state, action) {
      state.listData = state.listData.sort((a, b) => b.id - a.id);
    },
  },
});

export const {
  addTodo,
  delList,
  toggleTodoCompleted,
  toggleTodoEditing,
  updateText,
  asc,
  desc,
} = TodoListSlice.actions;
export default TodoListSlice.reducer;

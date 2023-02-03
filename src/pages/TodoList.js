import React, { useState, useEffect, useRef } from "react";
import styled from "../style/TodoList.module.scss";
import { lsitData } from "./compornent/listData";
import List from "./compornent/List";
import SwitchBtn from "./compornent/SwitchBtn";
import AddList from "./compornent/AddList";
import LightBox from "./compornent/LightBox";
import ProgressBar from "./compornent/progressBar";
import { useSelector, useDispatch } from "react-redux";
import { asc, desc } from "../store/todolistSlice";

export default function TodoList() {
  const [todos, setTodos] = useState(lsitData);
  const [newText, setNewText] = useState("");
  const [btn, setBtn] = useState(false);
  const [show, setShow] = useState(false);
  const [howPersent, setHowPersent] = useState("");
  const scrollRef = useRef("");
  const todo = useSelector((state) => state.todoList.listData);
  const dispatch = useDispatch();
  //排序已完成的
  const alreadyFinsihScroll = () => {
    if (!btn) {
      const current = scrollRef.current;
      current.scrollTop = current.scrollHeight;
      dispatch(asc());
    } else {
      const current = scrollRef.current;
      current.scrollTop = 0;
      dispatch(desc());
    }
    setBtn(!btn);
  };

  //進度條
  const progressBarFunction = () => {
    let howMuchCompelete = 0;
    let present;
    todo.map((v2, i2) => {
      if (v2.completed) return (howMuchCompelete += 1);
    });
    present = Math.floor((howMuchCompelete / todo.length) * 100) + "%";
    setHowPersent(present);

    if (howMuchCompelete === 0) {
      setHowPersent("0%");
    }
    if (present === "100%") return setShow(true);
  };

  //刪除該項list
  // const delList = (id) => {
  //   const newTodos = todos.filter((v2, i2) => {
  //     return v2.id !== id;
  //   });
  //   setTodos(newTodos);
  // };
  //新增該做的事
  // const addTodo = async (text) => {
  //   if (newText) {
  //     const newTodo = {
  //       id: Number(new Date()),
  //       text: text,
  //       completed: false,
  //       editing: false,
  //     };
  //     // 加入輸入的文字到todos陣列中
  //     // 三步驟的方式(拷貝 -> 加入到新陣列中 -> 設定回state)
  //     const newTodos = [...todos, newTodo];
  //     await setTodos(newTodos);
  //     const current = scrollRef.current;
  //     current.scrollTop = current.scrollHeight;
  //     setNewText("");
  //   } else {
  //     return;
  //   }
  // };

  // 用在某個id項目，切換editing屬性true/false
  // const toggleTodoEditing = (id) => {
  //   const newTodos = todos.map((v, i) => {
  //     if (v.id === id) return { ...v, editing: !v.editing };
  //     //這裡要設定其它項目 editing:false，同時間只有一個被編輯
  //     return { ...v, editing: false };
  //   });

  //   setTodos(newTodos);
  // };

  //編輯文字
  // const updateText = (id, objValue) => {
  //   const newText = todos.map((v, i) => {
  //     if (v.id === id) return { ...v, ...objValue };
  //     return { ...v };
  //   });
  //   setTodos(newText);
  // };

  // 用在某個id項目，切換completed屬性true/false
  // const toggleTodoCompleted = (id) => {
  //   const newTodos = todos.map((v, i) => {
  //     if (v.id === id) return { ...v, completed: !v.completed };

  //     return { ...v };
  //   });

  //   setTodos(newTodos);
  // };

  //進度條隨時更新進度
  useEffect(() => {
    progressBarFunction();
  }, [todo]);

  useEffect(() => {
    alreadyFinsihScroll();
  }, []);

  return (
    <>
      {show ? <LightBox setShow={setShow} show={show} /> : ""}
      <div className={styled.card}>
        <div className={styled.container}>
          <h1>Todo List</h1>
          <div className={styled.title}>Add things to do</div>

          <ProgressBar howPersent={howPersent} />

          <List btn={btn} todos={todos} scrollRef={scrollRef} />

          <SwitchBtn btn={btn} alreadyFinsih={alreadyFinsihScroll} />

          <AddList newText={newText} setNewText={setNewText} />
        </div>
      </div>
    </>
  );
}

import React from "react";
import styled from "../../style/TodoList.module.scss";
import EditForm from "./todoItem/EditForm";
import { useDispatch } from "react-redux";
import {
  delList,
  toggleTodoCompleted,
  toggleTodoEditing,
} from "../../store/todolistSlice";
import { useSelector } from "react-redux";
export default function List({ todos, scrollRef, btn }) {
  

  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoList);
  return (
    <div className={styled.listWrap} ref={scrollRef}>
      {state.listData.map((v, i) => {
        return (
          <div className={styled.list} key={i}>
            <div className={styled.left}>
              <input
                type="checkbox"
                id={v.id}
                checked={v.completed}
                onChange={() => {
                  dispatch(toggleTodoCompleted({ id: v.id }));
                }}
                className={styled.v}
              />
              <label htmlFor={v.id} className={styled.check}></label>
              {v.editing ? (
                <EditForm id={v.id} text={v.text} />
              ) : (
                <p
                  style={v.completed ? { textDecoration: "line-through" } : {}}
                >
                  {v.text}
                </p>
              )}
            </div>
            <div className={styled.right}>
              {v.editing ? (
                ""
              ) : (
                <button
                  onClick={() => {
                    dispatch(toggleTodoEditing({ id: v.id }));
                  }}
                >
                  編輯
                </button>
              )}

              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  dispatch(delList({ id: v.id }));
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

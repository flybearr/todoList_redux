import React from 'react'
import styled from "../../style/TodoList.module.scss";
import EditForm from './todoItem/EditForm';
import { useDispatch } from 'react-redux';
import { delList } from '../../store/todolistSlice';
import { useSelector } from 'react-redux'
export default function List({todos,toggleTodoCompleted,scrollRef,updateText,toggleTodoEditing,btn}) {
  const newTodos = [...todos]
  const alreadySort = newTodos.sort((a,b)=> a.completed - b.completed)
  const display = btn ? alreadySort : todos
  const dispatch = useDispatch()
  const state = useSelector(state => state.todoList)
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
                    onChange={()=>{toggleTodoCompleted(v.id)}}
                    className={styled.v}
                  />
                  <label htmlFor={v.id} className={styled.check} ></label>
                  {v.editing ? <EditForm updateText={updateText} id={v.id} text={v.text}/> : <p style={v.completed ?{textDecoration:'line-through'}:{}}>{v.text}</p>}
                 
                </div>
                <div className={styled.right}>
                  

                  {v.editing ? '': <button onClick={()=>{
                    toggleTodoEditing(v.id)
                  }}>編輯</button> }

                  <i className="fa-solid fa-xmark" onClick={()=>{dispatch(delList({id:v.id}))}}></i>
                </div>
              </div>
            );
          })}
        </div>
  )
}

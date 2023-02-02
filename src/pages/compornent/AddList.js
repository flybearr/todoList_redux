import React from 'react'
import styled from "../../style/TodoList.module.scss";
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todolistSlice';
export default function AddList({newText,setNewText}) {
  const dispatch = useDispatch()
  return (
    <div>
        <div style={{marginBottom:'10px'}}>Add to List</div>
          <div className={styled.bottom}>
            <div className={styled.search}>
              <input type="text"  value={newText} onChange={(e)=>{
                setNewText(e.target.value)
              }} onKeyDown={(e)=>{
                if (e.key === 'Enter') {
                  dispatch(addTodo({text:newText,}))
                  setNewText('')
                }
              }}/>
            </div>
            <div className={styled.add} onClick={()=>{
              dispatch(addTodo({text:newText,}))
              setNewText('')
            }}>
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
    </div>
  )
}

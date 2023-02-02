import React,{useEffect} from 'react'
import styled from "../../style/TodoList.module.scss";
export default function LightBox({setShow,show}) {

  return (
    <div className={styled.boxWrap} onClick={()=>{setShow(false)}}>
        {Array(50).fill(1).map((v,i)=>{
            return <div key={i} className={styled.confetti}></div>
        })}
        {Array(50).fill(1).map((v,i)=>{
            return <div key={i} className={styled.tri}></div>
        })}
        {Array(50).fill(1).map((v,i)=>{
            return <div key={i} className={styled.ribbon}></div>
        })}
        <div className={styled.lightBoxCard}>
            <h1>恭喜完成所有項目！！！</h1>
        </div>
    </div>
  )
}

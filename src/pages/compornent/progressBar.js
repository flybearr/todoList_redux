import React from 'react'
import styled from "../../style/TodoList.module.scss";
export default function ProgressBar({howPersent}) {
  return (
    <div className={styled.progressBar}>
    <p>{howPersent}</p>
    <div className={styled.empty}>
    <div className={styled.howLong} style={{width:`${howPersent}`}}></div>
    </div>
  </div>
  )
}

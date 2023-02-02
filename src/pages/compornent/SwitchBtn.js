import React from 'react'
import styled from "../../style/TodoList.module.scss";
export default function SwitchBtn({btn,alreadyFinsih}) {
  return (
    <div className={styled.switchArea}>
        <p>Move done things to end?</p>
        <div className={styled.switch}>
          <input className={styled.switchCheckbox} id="switchID1" type="checkbox" name="switch-checkbox" checked={btn} onChange={()=>{alreadyFinsih()}}/>
          <label className={styled.switchLabel} htmlFor="switchID1">
              <span className={styled.switchTxt} turnon="1" turnoff="2"></span>
              <span className={styled.switchRoundBtn}></span>
          </label>
       </div>
       </div>
  )
}

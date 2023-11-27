import React from 'react'
import style from './style.module.css'
const ToggleBox = () => {
  return (
    <div class={style["toggle"]}>
    <label for={style["over"]} class={style["switch-box"]}>
      <input type={style["checkbox"]} class={style["switch__input"]} id={style["over"]} /><span
        class={style["Left on"]}
      >Off</span
      ><span class={style["right on"]}>On</span>
      <div class={style["box-sw"]}></div>
      <i class={style["switch-slider"]}></i>
    </label>
  </div>
  )
}

export default ToggleBox;

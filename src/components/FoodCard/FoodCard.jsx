import React from 'react'
import styles from "./style.module.css"

const FoodCard = (props) => {
  return (
    
    <div className={styles["foodCard_item"]}>
    <div className={styles['image-wrap']}>
      <img src={props.data.image} alt="plov">
      </img>
    </div>
    <div className='foodInfo'>
      <div className='title'>
        <h2>{props.data.title}</h2>
      </div>
      <div className='price'>
        <h2>{props.data.price}</h2>
      </div>
      <div className='cost'>
        <h2>
          {props.data.cost}
        </h2>
      </div>
      <div onClick={props.onClick} className='DeleteBtn'><h2>Delete</h2></div>
    </div>
  </div>
  )
}

export default FoodCard;



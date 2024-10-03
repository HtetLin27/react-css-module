import React from 'react'
import styles from './Grid.module.css'
import GridItem from './GridItem'

const Grid = ({facts,updateClicked}) => {
  const updateClickedEvent = (id) => {updateClicked(id) ; console.log(id)}
  const gridItem = facts.map((item)=><GridItem 
    key={item.id}
    fact={item}
    updateClicked={()=>updateClickedEvent(item.id)}
    /> )
  return (
    <section className= {styles.grid}>
      {gridItem}
    </section>
  )
}

export default Grid
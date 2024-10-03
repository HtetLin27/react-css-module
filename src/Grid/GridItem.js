import React from 'react'
import styles from './GridItem.module.css'
import Badge from './Badge'
import Explorer from './Explorer'

const GridItem = ({fact,updateClicked}) => {
  return (
    <div className={styles.card} onClick={()=> {updateClicked(fact.id);console.log(fact.id)}}>
      {fact.clicked ? <Explorer/> : <Badge/>}
      <h2 className={styles.title}>{fact.title}</h2>
      <article className={styles.fact}>{fact.fact}</article>
    </div>
  )
}

export default GridItem
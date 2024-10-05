import React from 'react'
import  styles from './Smoke.module.css'

const Smoke = () => {
  return (
    <div className={styles.smoke}>
      <video className={styles.video} autoPlay loop src="/smoke.mov"></video>
    </div>
  )
}

export default Smoke
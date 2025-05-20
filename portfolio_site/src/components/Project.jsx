import React, { useState, useEffect } from 'react'
import styles from './Project.module.css';

function Tooltip({name, img, desc, tag1, tag2, tag3, tag4}){

  return (
    <div className={styles.project_wrapper}>
      <img src={img}/>
      <h1>{name}</h1>
      <h2>{desc}</h2>
      <div className={styles.tag_wrapper}>
        <div className={styles.project_tag}><h3>{tag1}</h3></div>
        <div className={styles.project_tag}><h3>{tag2}</h3></div>
        <div className={styles.project_tag}><h3>{tag3}</h3></div>
        <div className={styles.project_tag}><h3>{tag4}</h3></div>
      </div>
    </div>
  )
}

export default Tooltip

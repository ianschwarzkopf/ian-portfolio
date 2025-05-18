import React, { useState, useEffect } from 'react'
import styles from './Tooltip.module.css';

function Tooltip({ children, message, bottomPercent, leftPercent }){
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className={styles.tooltip_wrapper}
      onMouseMove={handleMouseMove}>
      {children}
      <div className={styles.tooltip} style={{bottom: `${bottomPercent}%`, left: `${leftPercent}%`}}>
        {message}
      </div>
    </div>
  )
}

export default Tooltip

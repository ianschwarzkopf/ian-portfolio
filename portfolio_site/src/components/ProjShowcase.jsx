import React, { useState, useEffect } from 'react'
import styles from './ProjShowcase.module.css';

function ProjShowcase({project, onClose}){
  if (!project) return <div>No project data available.</div>;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1>{project.title}</h1>
        <p2>{project.description}</p2>
        <div className={styles.imageGallery}>
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${project.title} ${idx}`} />
          ))}
          {project.video && (
            <iframe className={styles.video}
              src={project.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          )}
        </div>
        <p>{project.details}</p>
        <div className={styles.tag_wrapper}>
          {project.tags.map((tag, idx) => (
            <div className={styles.project_tag} key={idx}><h3>{`${tag}`}</h3></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjShowcase

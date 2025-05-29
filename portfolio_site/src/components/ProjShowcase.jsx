import React, { useState, useEffect } from 'react'
import styles from './ProjShowcase.module.css';

function ProjShowcase({project, onClose}){
  if (!project) return;

  const allMedia = [...project.images];
  if (project.video) allMedia.unshift(project.video);

  const [selectedMedia, setSelectedMedia] = useState(allMedia[0]);

  useEffect(() => {
    setSelectedMedia(allMedia[0]);
  }, [project]);

  const isVideo = (media) => typeof media === 'string' && media.includes('youtube');

  const currentIndex = allMedia.indexOf(selectedMedia);
  const prevIndex = (currentIndex - 1 + allMedia.length) % allMedia.length;
  const nextIndex = (currentIndex + 1) % allMedia.length;

  const handleNavigate = (direction) => {
    const newIndex = (currentIndex + direction + allMedia.length) % allMedia.length;
    setSelectedMedia(allMedia[newIndex]);
  };


  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h1>{project.title}</h1>
        <h4>{project.description}</h4>
        <div className={styles.imageGallery}>


          {isVideo(selectedMedia) ? (
            <iframe
              className={styles.video}
              src={selectedMedia}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <img src={selectedMedia} alt="Selected Project Media" className={styles.mainImage} />
          )}
          <div className={styles.nav_grid}>
            <div className={styles.navButtonLeft} onClick={() => handleNavigate(-1)}>
              {allMedia[prevIndex] && (
                isVideo(allMedia[prevIndex]) ? (
                  <div className={styles.previewVideo}>▶</div>
                ) : (
                  <img src={allMedia[prevIndex]} alt="Previous Preview" />
                )
              )}
            </div>

            <div className={styles.navButtonRight} onClick={() => handleNavigate(1)}>
              {allMedia[nextIndex] && (
                isVideo(allMedia[nextIndex]) ? (
                  <div className={styles.previewVideo}>▶</div>
                ) : (
                  <img src={allMedia[nextIndex]} alt="Next Preview" />
                )
              )}
            </div>
          </div>
        </div>


        <p dangerouslySetInnerHTML={{ __html: project.details }}/>
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

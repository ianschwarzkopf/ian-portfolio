import React from 'react'
import styles from './Home.module.css'

import Tooltip from '../components/Tooltip'

import Headshot from '../assets/Ian2.jpg'
import i_sql from '../assets/sql.svg'
import i_html from '../assets/html.svg'
import i_css from '../assets/css.svg'
import i_javascript from '../assets/javascript.svg'
import i_java from '../assets/java.svg'
import i_php from '../assets/php.svg'
import i_c from '../assets/c++.svg'
import i_react from '../assets/react.svg'

function Home() {
  const icons = [
  { src: i_html, label: "HTML" },
  { src: i_css, label: "CSS" },
  { src: i_javascript, label: "JavaScript" },
  { src: i_react, label: "React" },
  { src: i_php, label: "PHP" },
  { src: i_sql, label: "SQL" },
  { src: i_c, label: "C++" },
  { src: i_java, label: "Java" },
];

  return (
    <>
      <div className={styles.home_container}>
        <section id="home">
            <div className={styles.card}>
              <h1>Ian Schwarzkopf</h1>
              <h2>— a designer crafting interactive tools and experiences that empower creative exploration</h2>
            </div>
            <div className={styles.tech_container}>
              <div className={styles.carousel_track}>
                {[...icons].map((icon, index) => (
                  <Tooltip key={index} message={icon.label} bottomPercent="116">
                    <img src={icon.src} alt={icon.label} />
                  </Tooltip>
                ))}
              </div>
            </div>
          </section>
          <section id="about">
            <div className={styles.card}>
              <h3>Education</h3>
              <div className={styles.education}>
                <span><h4>Creative Technologies</h4><h4>Berry College</h4></span>
                <span><h5>Bachelor of Science</h5><h5>August 2022 - May 2025</h5></span>
                <ul>
                  <li>Developed webpages using HTML, CSS, and JavaScript</li>
                  <li>Updated pages with new information</li>
                  <li>Designed front-end user experience for various pages</li>
                </ul>
              </div>
              <h3>Experience</h3>
              <div className={styles.experience}>
                <span><h4>Web Developer</h4><h4>Clip Art Monster</h4></span>
                <span><h5>Remote</h5><h5>May 2025 - Current</h5></span>
                <ul>
                  <li>Developed webpages using HTML, CSS, and JavaScript</li>
                  <li>Updated pages with new information</li>
                  <li>Designed front-end user experience for various pages</li>
                </ul>
              </div>
              <div className={styles.experience}>
                <span><h4>Sound Coordinator</h4><h4>Chaplain's Office</h4></span>
                <span><h5>Mt. Berry, GA</h5><h5>August 2023 - May 2025</h5></span>
                <ul>
                  <li>Operated the soundboard to create a smooth and crisp sounding church service</li>
                  <li>Managed and assisted people in the office by providing coffee, guidance, and directions</li>
                  <li>Operated cameras and live streams using OBS and various other programs</li>
                </ul>
              </div>
              <div className={styles.experience}>
                <span><h4>Teaching Assistant</h4><h4>Berry College</h4></span>
                <span><h5>Mt. Berry, GA</h5><h5>August 2024 - May 2025</h5></span>
                <ul>
                  <li>Assisted students in their learning by answering any questions or problems</li>
                  <li>Provided relevant feedback to students in need of guidance with their projects to keep them on track</li>
                  <li>Provided time for students to get help with projects when the Professor was not available</li>
                </ul>
              </div>
            </div>

        </section>
        <section id="projects">


        </section>
        <section id="contact">


        </section>
      </div>
    </>
  )
}

export default Home

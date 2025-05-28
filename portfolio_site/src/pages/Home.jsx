import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'

import Tooltip from '../components/Tooltip'
import Project from '../components/Project'
import ProjShowcase from '../components/ProjShowcase';

import projectsData from '../data/projectsData';

import Headshot from '../assets/Ian.jpg'
import i_sql from '../assets/sql.svg'
import i_html from '../assets/html.svg'
import i_css from '../assets/css.svg'
import i_javascript from '../assets/javascript.svg'
import i_java from '../assets/java.svg'
import i_php from '../assets/php.svg'
import i_c from '../assets/c++.svg'
import i_react from '../assets/react.svg'

import LinkedInIcon from '../assets/linkedin_icon.svg'
import DocIcon from '../assets/doc_icon.svg'
import EmailIcon from '../assets/email_icon.svg'

import Resume from '../assets/Resume.pdf'

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

const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <div className={styles.home_container}>
        <section id="home">
            <div className={styles.card}>
              <div className={styles.header_img}><h1>Ian Schwarzkopf</h1>
                <div className={styles.links_container}>
                <Tooltip message="LinkedIn" bottomPercent="125" leftPercent="50">
                  <a
                    target="blank_" href="https://www.linkedin.com/in/ianschwarzkopf/"
                    className={styles.icon_container_link}
                  >
                    <img src={LinkedInIcon} alt="LinkedIn Icon" />
                  </a>
                </Tooltip>

                <Tooltip message="Check out my resume!" bottomPercent="125" leftPercent="50">
                  <a
                    target="blank_" href={Resume}
                    className={styles.icon_container_link}
                  >
                    <img src={DocIcon} alt="Document Icon" />
                  </a>
                </Tooltip>

                <Tooltip message="Send me an email!" bottomPercent="125" leftPercent="50">
                  <a
                    href="mailto:schwarzkopfian@gmail.com"
                    className={styles.icon_container_link}
                  >
                    <img src={EmailIcon} alt="Email Icon" />
                  </a>
                </Tooltip>
              </div><img className={styles.profile_img} src={Headshot} alt="Picture of me" /></div>

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
              <h1>Education</h1>
              <div className={styles.education}>
                <span><h4>Creative Technologies</h4><h4 style={{textAlign: 'right'}}>Berry College</h4></span>
                <span><h5>Bachelor of Science</h5><h5 style={{textAlign: 'right'}}>Aug 2022 - May 2025</h5></span>
                <ul>
                  <li>Summa Cum Laude with a 3.96 GPA</li>
                  <li>Dean's List every year</li>
                  <li>Graduated in 3 years</li>
                </ul>
              </div>
              <h1>Experience</h1>
              <div className={styles.experience}>
                <span><h4>Web Developer</h4><h4 style={{textAlign: 'right'}}>Clip Art Monster</h4></span>
                <span><h5>Remote</h5><h5 style={{textAlign: 'right'}}>May 2025 - Current</h5></span>
                <ul>
                  <li>Built web pages using HTML, CSS, and JavaScript on a Django/Python backend</li>
                  <li>Improved mobile usability with user-focused design and smooth animations</li>
                  <li>Collaborated with team members to align visuals with user experience goals</li>
                </ul>
              </div>
              <div className={styles.experience}>
                <span><h4>Sound Coordinator</h4><h4 style={{textAlign: 'right'}}>Chaplain's Office</h4></span>
                <span><h5>Mt. Berry, GA</h5><h5 style={{textAlign: 'right'}}>Aug 2023 - May 2025</h5></span>
                <ul>
                  <li>Operated soundboard and managed live audio for weekly services</li>
                  <li>Controlled camera and live streams using OBS to broadcast lectures and events</li>
                  <li>Provided hospitality to office visitors, offering coffee, guidance, and directions</li>
                </ul>
              </div>
              <div className={styles.experience}>
                <span><h4>Teaching Assistant</h4><h4 style={{textAlign: 'right'}}>Berry College</h4></span>
                <span><h5>Mt. Berry, GA</h5><h5 style={{textAlign: 'right'}}>Aug 2024 - May 2025</h5></span>
                <ul>
                  <li>Supported students across three course sections, providing personalized help and feedback</li>
                  <li>Assisted students with 3D modeling, electronic circuits, and Java programming</li>
                  <li>Delivered hands-on instruction and guidance on technical concepts, improving student comprehension and project quality</li>
                </ul>
              </div>
            </div>

        </section>
        <section id="projects">
          <div className={styles.card}>
            <h1>Projects</h1>
            <div className={styles.grid_wrapper}>
              <Project
                name="Monovox"
                img="/monovox_1.jpg"
                desc="An analog synthesizer that blends raw voltage with real-time visual interaction"
                tag1="PCB"
                tag2="ESP32"
                tag3="C++"
                tag4="Soldering"
                onClick={() => setActiveProject(projectsData.monovox)}
              />
              <Project
                name="Head to Head"
                img="/monovox_1.jpg"
                desc="Music ranking website using the Spotify API and React"
                tag1="React"
                tag2="HTML"
                tag3="CSS"
                tag4="API"
                onClick={() => setActiveProject(projectsData.headtohead)}
              />
              <Project
                name="runTime"
                img="/runtime_1.jpg"
                desc="A run tracking webapp with a user database"
                tag1="HTML"
                tag2="Bootstrap"
                tag3="SQL"
                tag4="PHP"
                onClick={() => setActiveProject(projectsData.runtime)}
              />
              <Project
                name="Deimos Sound Study"
                img="/deimos_1.png"
                desc="A decibel tracking device that was used to conduct a study on noise levels"
                tag1="PCB"
                tag2="ESP32"
                tag3="HTML"
                tag4="CSS"
                onClick={() => setActiveProject(projectsData.deimos)}
              />

            </div>
          </div>

        </section>
        <ProjShowcase project={activeProject} onClose={() => setActiveProject(null)} />
        <section id="contact">


        </section>
      </div>
    </>
  )
}

export default Home

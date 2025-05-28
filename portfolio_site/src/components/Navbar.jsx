import React, { useState, useEffect, useRef } from 'react'
import styles from './Navbar.module.css'

import HomeIcon from '../assets/home_icon.svg'
import FolderIcon from '../assets/folder_icon.svg'
import ProfileIcon from '../assets/profile_icon.svg'
import LinkedInIcon from '../assets/linkedin_icon.svg'
import DocIcon from '../assets/doc_icon.svg'
import EmailIcon from '../assets/email_icon.svg'

import Tooltip from './Tooltip'

const sections = ['home', 'about', 'projects', 'contact']

function Navbar() {
  const [activeSection, setActiveSection] = useState()
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return

      const scrollY = window.scrollY
      const offsets = sections.map(id => {
        const el = document.getElementById(id)
        return el ? { id, top: el.offsetTop } : null
      }).filter(Boolean)

      const current = offsets.reverse().find(section => scrollY + 100 >= section.top)
      if (current && current.id !== activeSection) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      setActiveSection(id)
      isScrollingRef.current = true
      el.scrollIntoView({ behavior: 'smooth' })

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
      }, 800)
    }
  }

  return (
    <nav>
      <div className={styles.container}>
        <Tooltip message="Home" bottomPercent="25" leftPercent="200">
          <a
            onClick={() => scrollTo('home')}
            className={styles.icon_container}
            style={activeSection === 'home' ? { backgroundColor: 'rgba(0, 255, 117, 0.4)' } : {}}
          >
            <img src={HomeIcon} alt="Home Icon" />
          </a>
        </Tooltip>

        <Tooltip message="About" bottomPercent="25" leftPercent="202">
          <a
            onClick={() => scrollTo('about')}
            className={styles.icon_container}
            style={activeSection === 'about' ? { backgroundColor: 'rgba(0, 255, 117, 0.4)' } : {}}
          >
            <img src={ProfileIcon} alt="About Icon" />
          </a>
        </Tooltip>

        <Tooltip message="Projects" bottomPercent="25" leftPercent="215">
          <a
            onClick={() => scrollTo('projects')}
            className={styles.icon_container}
            style={activeSection === 'projects' ? { backgroundColor: 'rgba(0, 255, 117, 0.4)' } : {}}
          >
            <img src={FolderIcon} alt="Projects Icon" />
          </a>
        </Tooltip>

        {/* <div className={styles.divider}></div>

        <Tooltip message="LinkedIn" bottomPercent="25" leftPercent="216">
          <a
            target="blank_" href="https://www.linkedin.com/in/ian-schwarzkopf-85a850249/"
            className={styles.icon_container_link}
          >
            <img src={LinkedInIcon} alt="LinkedIn Icon" />
          </a>
        </Tooltip>

        <Tooltip message="Check out my resume!" bottomPercent="25" leftPercent="301">
          <a
            target="blank_" href="https://www.behance.net/ianschwarzkopf"
            className={styles.icon_container_link}
          >
            <img src={DocIcon} alt="Document Icon" />
          </a>
        </Tooltip>

        <Tooltip message="Send me an email!" bottomPercent="25" leftPercent="276">
          <a
            href="mailto:schwarzkopfian@gmail.com"
            className={styles.icon_container_link}
          >
            <img src={EmailIcon} alt="Email Icon" />
          </a>
        </Tooltip> */}
      </div>
    </nav>
  )
}

export default Navbar

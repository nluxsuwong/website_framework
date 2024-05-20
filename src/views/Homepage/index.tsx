// src/views/Home/Home.tsx
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Partners from './components/Partners'
import Social from './components/Social'
import Footer from './components/Footer'
import ClipboardJS from 'clipboard'

const Home = () => {
  useEffect(() => {
    // Initialize ClipboardJS
    const clipboard = new ClipboardJS('.js-clipboard')

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll<HTMLAnchorElement>(
      '.nav-main a[href^="#"]'
    )
    links.forEach((link) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault()
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute(
          'href'
        )
        if (targetId) {
          if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } else {
            const targetElement = document.querySelector(targetId)
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' })
            }
          }
        }
      })
    })

    return () => clipboard.destroy() // Cleanup on component unmount
  }, [])

  return (
    <>
      <Header />
      <div style={{ overflow: 'hidden' }}>
        <Hero />
        <Roadmap />
        <Tokenomics />
        <Partners />
        <Social />
        <Footer />
      </div>
    </>
  )
}

export default Home

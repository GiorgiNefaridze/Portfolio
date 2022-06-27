import '../styles/NavisOpen.scss'

import { Link } from 'react-router-dom'

export default function NavIsOpen({setIsOpen}) {

  const closeNav = () => {
    setIsOpen(false)
  }

  return (
    <div className="navisOpen-container">
        <div className='navisOpen-container-inner'>
            <Link onClick={closeNav} to="/">Home</Link>
            <Link onClick={closeNav} to="/about">About</Link>
            <Link onClick={closeNav} to="/projects">Projects</Link>
            <Link onClick={closeNav} to="/contact">Contact</Link>
        </div>
    </div>
  )
}
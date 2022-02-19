import Link from "next/link"
import { useState } from "react"

const NavBar = () => {
  const [isActive, setisActive] = useState(false)
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">Github Repos 📦</a>
        </Link>
        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">About</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
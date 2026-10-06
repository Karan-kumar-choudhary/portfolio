import React from 'react'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      
        <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          backgroundColor: "#FFFFFF",
        }}
      >
       
        <Link
          to="/"
          style={{
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          MyLogo
        </Link>

        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <Link
            to="/about"
            style={{ color: "black", textDecoration: "none" }}
          >
            About
          </Link>

          <Link
            to="/work"
            style={{ color: "black", textDecoration: "none" }}
          >
            Work
          </Link>

          <Link
            to="/contact"
            style={{ color: "black", textDecoration: "none" }}
          >
            Contact
          </Link>
            <Link
            to="/profile"
            style={{ color: "black", textDecoration: "none" }}
          >
            Profile
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
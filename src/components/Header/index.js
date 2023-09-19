// Write your code here
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

const Header = () => (
  <nav className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo-image"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button type="button" data-testid="hamburgerIconButton">
          <GiHamburgerMenu className="menu-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            data-testid="closeButton"
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>

          <ul className="popup-container">
            <li>
              <AiFillHome />
              <Link to="/" className="list-item">
                <h1>Home</h1>
              </Link>
            </li>

            <li>
              <BsInfoCircleFill />
              <Link to="/about" className="list-item">
                <h1>About</h1>
              </Link>
            </li>
          </ul>
        </>
      )}
    </Popup>
  </nav>
)

export default Header

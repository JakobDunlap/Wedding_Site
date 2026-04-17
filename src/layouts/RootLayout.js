import { NavLink, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"



export default function RootLayout() {

const location = useLocation();
let imageName = 'test';
  if (location.pathname === '/form') {
    imageName = 'form';
  }

  return (
    <div className="root-layout">
      
      <header>
        <input id="toggle" type="checkbox"></input>
        <label htmlFor="toggle" class="hamburger">
          <div className="top-slice"></div>
          <div className="middle-slice"></div>
          <div className="bottom-slice"></div>
        </label>
        <nav className="navigation">
          <div className="navigation-link">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="navigation-link">
            <NavLink to="form">RSVP</NavLink>
          </div>
          <div className="navigation-link">
            <NavLink to="gallery">Gallery</NavLink>
          </div>
          <div className="navigation-link">
            <NavLink to="venue">Venue</NavLink>
          </div>
        </nav>
      </header>
      <div id="container">
        <img src={ require(`../${imageName}.jpg`) } alt="flower wreath" draggable="false" className="flower-frame"/>
        <h1 className="monsieur-la-doulaise-regular" id="title-banner"><NavLink to="/">Julia &    Jake</NavLink></h1>
        <p>09 | 19 | 2026</p>
      </div>

      <main>
          <Outlet />
      </main>

    </div>
  )
}

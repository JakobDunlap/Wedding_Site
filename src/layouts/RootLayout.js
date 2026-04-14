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
            <nav className="navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="form">RSVP</NavLink>
                <NavLink to="gallery">Gallery</NavLink>
                <NavLink to="venue">Venue</NavLink>
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

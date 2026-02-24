import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <div id="container">
        <img src={ require('../boquetFrame.png') } alt="flower wreath" draggable="false" className="flower-frame"/>
        <h1 className="monsieur-la-doulaise-regular" id="title-banner"><NavLink to="/">Jake &   Julia</NavLink></h1>
        <p>09 | 19 | 2026</p>
      </div>
        <header>
            <nav className="navigation">
                <NavLink to="/">Home</NavLink>
                <NavLink to="form">RSVP</NavLink>
                <NavLink to="gallery">Gallery</NavLink>
                <NavLink to="venue">Venue</NavLink>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

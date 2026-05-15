import { NavLink, Outlet, useNavigate } from "react-router-dom"

export default function RootLayout() {

  const navigate = useNavigate();

  // const location = useLocation();

  // For switching background images for different pages
  // let imageName = 'test';
  // if (location.pathname === '/form') {
  //   imageName = 'form';
  // }

  // This function automatically closes the hamburger nav menu when a link is clicked (in mobile layout)
  function navClick() {
    document.getElementById('toggle').checked = false;
    window.scrollTo(0, 0);
  }

  return (
    <div className="root-layout">
      
      <header>

        <input id="toggle" type="checkbox"></input>

        <label htmlFor="toggle" className="hamburger">
          <div className="top-slice"></div>
          <div className="middle-slice"></div>
          <div className="bottom-slice"></div>
        </label>

        <nav className="navigation">
          <div className="navigation-link">
            <NavLink to="/" onClick={navClick}>Home</NavLink>
          </div>
          <div className="navigation-link">
            <NavLink to="form" onClick={navClick}>RSVP</NavLink>
          </div>
          <div className="navigation-link">
            <NavLink to="gallery" onClick={navClick}>Gallery</NavLink>
          </div>
          <div className="navigation-link">
            <NavLink to="venue" onClick={navClick}>Venue</NavLink>
          </div>
        </nav>

      </header>

      <main>
          <Outlet />
      </main>

      <footer>
        <p>Copyright 2026 Jakob Dunlap</p>
        <p>Photography by Delaney Hady</p>
      </footer>

    </div>
  )
}

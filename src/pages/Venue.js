import { NavLink } from 'react-router-dom';

export default function Venue() {

    function navClick() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="venue">

            <div id="container">
                <img src={ require(`../truck.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="monsieur-la-doulaise-regular" id="title-banner"><NavLink to="/" onClick={navClick}>Julia &    Jake</NavLink></h1>
                <p>09 | 19 | 2026</p>
            </div>

            <h1>Venue page here</h1>
            
        </div>
    )
}
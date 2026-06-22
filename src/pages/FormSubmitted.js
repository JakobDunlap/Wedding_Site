import { NavLink } from 'react-router-dom';
const phone = process.env.PHONE_NUMBER;
const email = process.env.EMAIL;

export default function FormSubmitted() {

    function navClick() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="form-submitted">

            <div id="container">
                <img src={ require(`../photos/form-submitted.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="cursive" id="title-banner"><NavLink to="/" onClick={navClick}>Julia & Jake</NavLink></h1>
                <p className="josifin-slab-bold">09 | 19 | 2026</p>
            </div>

            <div className="page-content">
                <h1 className="josifin-slab">Thank you for submitting your RSVP form!</h1>
                <p className="josifin-slab">If you need to make any update to your RSVP, please contact Jake directly at</p>
                <p className="josifin-slab"> jakob_dunlap@outlook.com </p>
                <p className="form-submitted-para josifin-slab">Feel free to return to the the <NavLink to="/" >home page</NavLink></p>
            </div>

        </div>
    )
}
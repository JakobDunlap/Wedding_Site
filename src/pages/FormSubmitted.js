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
                <h1 className="sacramento-regular" id="title-banner"><NavLink to="/" onClick={navClick}>Julia & Jake</NavLink></h1>
                <p className="josifin-slab-bold">09 | 19 | 2026</p>
            </div>

            <div className="page-content">
                <h1 className="josifin-slab">Thank you for submitting your RSVP form!</h1>
                <p className="josifin-slab">If you need to make any update to your RSVP, please contact Jake directly at</p>
                {phone}
                <p className="josifin-slab"> or </p>
                {email}
                <p className="form-submitted-para josifin-slab">Please feel free to return to the the <NavLink to="/" >home page</NavLink></p>
            </div>

        </div>
    )
}
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
                <img src={ require(`../form-submitted.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="monsieur-la-doulaise-regular" id="title-banner"><NavLink to="/" onClick={navClick}>Julia &    Jake</NavLink></h1>
                <p>09 | 19 | 2026</p>
            </div>

            <div className="page-content">
                <h1>Thank you for submitting your RSVP form!</h1>
                <p>If you need to make any update to your RSVP, please contact Jake directly at</p>{phone}<p> or </p>{email}
                <p className="form-submitted-para">Please feel free to return to the the <NavLink to="/" >home page</NavLink></p>
            </div>

        </div>
    )
}
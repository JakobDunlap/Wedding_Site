import { NavLink } from 'react-router-dom';
const phone = process.env.PHONE_NUMBER;
const email = process.env.EMAIL; //Try to find some way to add personal phone and email as a secret env variable in Render so it does not have to be uploaded to GitHub

export default function FormSubmissionError() {

    function navClick() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="form-submission-error">

            <div id="container">
                <img src={ require(`../form-submission-error.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="monsieur-la-doulaise-regular" id="title-banner"><NavLink to="/" onClick={navClick}>Julia &    Jake</NavLink></h1>
                <p>09 | 19 | 2026</p>
            </div>

            <div className="page-content">
                <h1>Sorry, there was an error submitting the RSVP form</h1>

                <p>Please try submitting the RSVP form again.</p><p>If this error persists, please contact Jake directly at </p>{phone}<p> or </p>{email}<p> or dummyemail@email.com</p>
                <p className="form-submitted-para">Feel free to return the the <NavLink to="/" >home page</NavLink></p>
            </div>

        </div>
    )
}
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
                <img src={ require(`../photos/form-submission-error.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="cursive" id="title-banner"><NavLink to="/" onClick={navClick}>Julia & Jake</NavLink></h1>
                <p className="josifin-slab-bold">09 | 19 | 2026</p>
            </div>

            <div className="page-content">
                <h1 className="josifin-slab">Sorry, there was an error submitting the RSVP form</h1>

                <p className="josifin-slab">Please try submitting the RSVP form again.</p>
                <p className="josifin-slab">If this error persists, please contact Jake directly at </p>
                {phone}
                <p className="josifin-slab"> or </p>
                {email}
                <p className="josifin-slab"> or dummyemail@email.com</p>
                <p className="form-submitted-para josifin-slab">Feel free to return the the <NavLink to="/" >home page</NavLink></p>
            </div>

        </div>
    )
}
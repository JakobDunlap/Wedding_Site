import { NavLink } from 'react-router-dom';
const phone = process.env.PHONE_NUMBER;
const email = process.env.EMAIL;

export default function FormSubmissionError() {
    return (
        <div className="home">
            <h1>There was an error submitting the RSVP form</h1>
            <p>Please try submitting the RSVP form again. If this error persists, please contact Jake directly at ${phone}</p>
            <p className="form-submitted-para">Feel free to return the the <NavLink to="/" >home page</NavLink></p>
        </div>
    )
}
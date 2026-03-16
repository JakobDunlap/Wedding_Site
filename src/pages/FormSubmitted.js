import { NavLink } from 'react-router-dom';

export default function FormSubmitted() {
    return (
        <div className="home">
            <h1>Thank you for submitting your RSVP form!</h1>
            <p className="form-submitted-para">Feel free to return the the <NavLink to="/" >home page</NavLink></p>
        </div>
    )
}
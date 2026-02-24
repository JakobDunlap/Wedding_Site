import { NavLink } from 'react-router-dom';

export default function FormSubmitted() {
    return (
        <div className="home">
            <h1>This is a heading for the form submission landing page</h1>
            <p>Thank you for submitting the form</p>
            <p className="form-submitted-para">Feel free to return the the <NavLink to="/" >home page</NavLink></p>
        </div>
    )
}
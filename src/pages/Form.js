import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function Form() {

    // Used to navigate to "thank you" page
    const navigate = useNavigate();

    function navClick() {
        window.scrollTo(0, 0);
    }

    // For graying out Submission button after click
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handling logic for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);
        const payload = {
            guestName: formData.get("guest-name"),
            attending: formData.get("attending") === "true",
            email: formData.get("email"),
            additionalGuests: [],
            dietaryRestriction: formData.get("dietary")
        };
        const additionalGuestName = formData.getAll("additionalGuestName[]");
        for (let i = 0; i < additionalGuestName.length; i++) {
            if (additionalGuestName[i]) {
                payload.additionalGuests.push({
                    additionalGuestName: additionalGuestName[i]
                });
            }
        }
        try {
            const response = await fetch("http://localhost:5000/form", { //Local Development Server:"http://localhost:5000/form" Live App Server:"https://wedding-site-server-test.onrender.com/form" New Server: "https://jake-and-julia-wedding-server.onrender.com/form"
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
            });
            const result = await response.json();
            console.log("Server response:", result);
        } catch (err) {
            console.error("Error submitting form:", err);
            navigate("/form-submission-error");
            window.scrollTo(0, 0);
            return;
        }
        console.log(payload);
        navigate("/form-submitted");  
        window.scrollTo(0, 0);      
    }

    // Variables for adding additional guests
    const [guests, setGuests] = useState([""]); // start with 1 guest field
    const maxGuests = 4;

    // Handler for number of additional guests
    const addGuest = () => {
        if (guests.length < maxGuests) {
        setGuests([...guests, ""]);
        }
    };

    // Trying to reactively disable rest of form if "not attending" radio button pushed
    const notAttending = () => {
        
    }

    return (
        <div className="form">

            <div id="container">
                <img src={ require(`../photos/form.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="sacramento-regular" id="title-banner"><NavLink to="/" onClick={navClick}>Julia & Jake</NavLink></h1>
                <p className="josifin-slab-bold">09 | 19 | 2026</p>
            </div>

            <form action="/form" method="post" onSubmit={handleSubmit}>
                <p className="form-header josifin-slab">Please fill out the form below to let us know if you'll be joining us</p>
                <label className="form-input-cell">
                    <span className="josifin-slab">Your Full Name</span>
                    <input type="text" name="guest-name" autoComplete="name" required />
                </label>
                <label className="form-input-cell">
                    <span className="josifin-slab">Will you be attending?</span>
                    <div className="button-wrap">
                        <div className="yes-button-wrapper">
                            <input className="button-label" type="radio" name="attending" value="true" id="yes-button" /><label htmlFor="yes-button"><p id="yes-button-label" className="josifin-slab">Yes</p></label>
                        </div>
                        <div className="no-button-wrapper">
                            <input className="button-label" type="radio" name="attending" value="false" id="no-button"/><label htmlFor="no-button"><p id="no-button-label" className="josifin-slab">No</p></label>
                        </div>
                    </div>
                </label>
                <label className="form-input-cell">
                    <span className="josifin-slab">Your Email</span>
                    <input type ="email" name="email" autoComplete="email" required/>
                </label>
                <label>
                    <span className="additional-form-info josifin-slab">If you plan on bringing a plus-one, a friend, or your children with you, please add their names below. Otherwise, simply leave this space blank.</span>
                    <span className="additional-form-info josifin-slab">If you plan on bringing more than four additional guests with you, please email Jake at 'jakob_dunlap@outlook.com'.</span>
                    {guests.map((_, index) => (
                        <div key={index} className="form-input-cell">
                            <span className="josifin-slab">Additional Guest Full Name</span>
                            <input name="additionalGuestName[]" type="name" id="additional-guest-input" autoComplete="name"/>
                        </div>
                    ))}
                    <button type="button" id="add-guest-button" onClick={addGuest} disabled={guests.length >= maxGuests} className="josifin-slab">
                        {guests.length >= maxGuests
                        ? "Maximum number of guests reached for this form"
                        : "Add another guest"}
                    </button>
                </label>
                <label className="form-input-cell">
                    <span className="additional-form-info josifin-slab">If you or any of the additional guests you will be bringing have any dietary restrictions, please note them below.</span>
                    <input type="text" name="dietary"/>
                </label>
                <button type="submit" id="submit-button" disabled={isSubmitting} className="josifin-slab-bold">
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>

        </div>
    )
}
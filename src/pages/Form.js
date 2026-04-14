import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {

    // Used to navigate to "thank you" page
    const navigate = useNavigate();

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
            const response = await fetch("https://wedding-site-server-test.onrender.com/form", { //replace localhost with "http://localhost:5000/form" to talk to local server in development
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
            
        }
        console.log(payload);
        if (e) {
            navigate("/form-submission-error");
        } else {
            navigate("/form-submitted");
        }
        
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
            <p className="form-header">Please fill out the form below to let us know if you'll be joining us</p>
            <form action="/form" method="post" onSubmit={handleSubmit}>
                <label>
                    <span>Your Full Name</span>
                    <input type="text" name="guest-name" autoComplete="name" required />
                </label>
                <label>
                    <span>Will you be attending?</span>
                    <div className="button-wrap">
                        <div className="yes-button-wrapper">
                            <input className="button-label" type="radio" name="attending" value="true" id="yes-button" /><label htmlFor="yes-button"><p id="yes-button-label">Yes</p></label>
                        </div>
                        <div className="no-button-wrapper">
                            <input className="button-label" type="radio" name="attending" value="false" id="no-button"/><label htmlFor="no-button"><p id="no-button-label">No</p></label>
                        </div>
                    </div>
                </label>
                <label>
                    <span>Your Email</span>
                    <input type ="email" name="email" autoComplete="email" required/>
                </label>
                <label>
                    <span className="additional-form-info">If you plan on bringing a plug-one, a friend, or your children with you, please add their names below. Otherwise, simply leave this space blank.</span>
                    <span className="additional-form-info">If you plan on bringing more than four additional guests with you, please email Jake at 'jakob_dunlap@outlook.com'.</span>
                    {guests.map((_, index) => (
                        <div key={index}>
                            <span>Additional Guest Full Name</span>
                            <input name="additionalGuestName[]" type="name"/>
                        </div>
                    ))}
                    <button type="button" onClick={addGuest} disabled={guests.length >= maxGuests}>
                        {guests.length >= maxGuests
                        ? "Maximum number of guests reached for this form"
                        : "Add another guest"}
                    </button>
                </label>
                <label>
                    <span className="additional-form-info">If you or any of the additional guests you will be bringing have any dietary restrictions, please note them below.</span>
                    <input type="text" name="dietary"/>
                </label>
                <button type="submit" disabled={isSubmitting} >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    )
}
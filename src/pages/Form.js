import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {

    // Used to navigate to "thank you" page
    const navigate = useNavigate();

    // Handling logic for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = {
            guestFirst: formData.get("first-name"),
            guestLast: formData.get("last-name"),
            attending: formData.get("attending") === "true",
            email: formData.get("email"),
            additionalGuests: []
        };
        const guestFirst = formData.getAll("guestFirst[]");
        const guestLast = formData.getAll("guestLast[]");
        for (let i = 0; i < guestFirst.length; i++) {
            if (guestFirst[i] || guestLast[i]) {
                payload.additionalGuests.push({
                    first: guestFirst[i],
                    last: guestLast[i]
                });
            }
        }
        try {
            const response = await fetch("https://wedding-site-server-test.onrender.com/form", {
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
        navigate("/form-submitted");
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

    return (
        <div className="form">
            <p className="form-header">Please fill out the form below to let us know if you'll be joining us</p>
            <form action="/form" method="post" onSubmit={handleSubmit}>
                <label>
                    <span>First Name</span>
                    <input type="text" name="first-name" autoComplete="given-name" required />
                    <span>Last Name</span>
                    <input type="text" name="last-name" autoComplete="family-name" required />
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
                    <span>Will you be bringing additional guests?</span>
                    <p>If you plan on bringing a plus-one, a friend, or children with you, please add their names below so we have an accurate headcount for food and seating</p>
                    {guests.map((_, index) => (
                        <div key={index}>
                            <span>Additional Guest First Name</span>
                            <input name="guestFirst[]" type="name"/>
                            <span>Additional Guest Last Name</span>
                            <input name="guestLast[]" type="name"/>
                        </div>
                    ))}
                    <button type="button" onClick={addGuest} disabled={guests.length >= maxGuests}>
                        {guests.length >= maxGuests
                        ? "Maximum number of guests reached for this form"
                        : "Add another guest"}
                    </button>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
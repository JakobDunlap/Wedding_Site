import { NavLink } from 'react-router-dom';

export default function FAQ() {

    function navClick() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="faq">

            <div id="container">
                <img src={ require(`../photos/faq.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="sacramento-regular" id="title-banner"><NavLink to="/" onClick={navClick}>Julia & Jake</NavLink></h1>
                <p className="josifin-slab-bold">09 | 19 | 2026</p>
            </div>

             <div className="page-content josifin-slab">
                <h1>Frequently Asked Questions</h1>
                <div className="faq-question">
                    <h2>What should I wear?</h2>
                    <p>Semi-formal attire is perfect. Dresses, jumpsuits, or dress shirts and slacks with or without a suit jacket. Please no jeans or shorts. Of note- the wedding will take place on grass so block heels, sneakers, or flats may be more comfortable than narrow heels. </p>
                </div>
                <br></br>
                <div className="faq-question">
                    <h2>Is there a wedding registry?</h2>
                    <p>We do not have a wedding registry, your presence is enough of a gift! If you feel so inclined, we will have a box for cards near the entry.</p>
                </div>
                <div className="faq-question">
                    <h2>What's for dinner?</h2>
                    <p>Jake's dad Jack will be making some of his world-famous bar-be-que! In addition, many vegetarian sides will be provided. If you have any dietary restrictions, please note them in your RSVP and we will do our best to make accommodations.</p>
                </div>
                <div className="faq-question">
                    <h2>Where should I park?</h2>
                    <p>Parking areas will be clearly marked at the front of the house and along the road. Please do not block the road when parking.</p>
                </div>
                <div className="faq-question">
                    <h2>Can I bring a date?</h2>
                    <p>Of course! Please RSVP for anyone who will be accompanying you.</p>
                </div>
                <div className="faq-question">
                    <h2>Will there be an open bar?</h2>
                    <p>You betcha! We'll have plenty of beer, wine, and assorted libations. If you have a favorite obscure beer you can't live without- feel free to bring it with you!</p>
                </div>
                <div className="faq-question">
                    <h2>Is this an 'unplugged' wedding?</h2>
                    <p>Not exactly, but cell reception is quite sparse at the ceremony and reception locations, so please plan accordingly. Jakob's grandma's house is in a bit of a valley, but cell reception is perfectly serviceable just a quarter mile or so up the road, east or west of the property - so in an emergency, cell reception is not far away.</p>
                </div>
                
            </div>
            
        </div>
    )
}
import { NavLink } from "react-router-dom"
export default function Home() {
    return (
        <div className="home">

            <div id="container">
                <img src={ require(`../photos/home.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="sacramento-regular" id="title-banner"><NavLink to="/">Julia & Jake</NavLink></h1>
                <p className="josifin-slab-bold">09 | 19 | 2026</p>
            </div>

            <div className="page-content">
                <h1 className="josifin-slab">A Very Special Day</h1>
                <p className="josifin-slab">Jakob Dunlap and Julia Pfromm met three years ago on Bumble and it didn't take long for them to understand how right for each other they were. Along the way they've taken lots of trips, shared many laughs, adopted a loveably stubborn hound dog, and held each other up throughout the many challenges life presents.</p>
                <p className="josifin-slab">Julia and Jake would like to invite you to join them for a very special celebration of their love and witness the beginning of their life together. Please see below the itinerary for the day.</p>
                <br></br>
                <h2 className="josifin-slab">Ceremony</h2>
                <p className="josifin-slab">3:00pm - 4:00pm</p>
                <p className="josifin-slab">The wedding ceremony will be held in the back yard of Jakob's grandmother's house - see details on the Venue page.</p>
                <br></br>
                <h2 className="josifin-slab">Cocktail Hour</h2>
                <p className="josifin-slab">4:00pm - 5:00pm</p>
                <p className="josifin-slab">The cocktail hour will be held at the adjacent 3-car garage.</p>
                <br></br>
                <h2 className="josifin-slab">Reception</h2>
                <p className="josifin-slab">5:00pm - 10:00pm</p>
                <p className="josifin-slab">The wedding reception will be held just down the road to the west, at a separate building on the property. Details on the Venue page.</p>
                <p className="josifin-slab">Dinner will be served at 5:45pm</p>
            </div>
            
        </div>
    )
}
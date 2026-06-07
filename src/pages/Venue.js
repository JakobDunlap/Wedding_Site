import { NavLink } from 'react-router-dom';

export default function Venue() {

    function navClick() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="venue">

            <div id="container">
                <img src={ require(`../photos/truck.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="sacramento-regular" id="title-banner"><NavLink to="/" onClick={navClick}>Julia & Jake</NavLink></h1>
                <p className="josifin-slab-bold">09 | 19 | 2026</p>
            </div>

             <div className="page-content">
                <h1 className="josifin-slab">The Venue</h1>
                <p className="josifin-slab">Julia Pfromm and Jakob Dunlap will be wed at Jakob's grandmother's home. This brick, two-story mansard-roof house was built by Jakob's grandfather Art Otterman in 1979. An adjacent three car detatched garage will hold a cocktail hour following the ceremony. The reception will be held at a separate, small cinder block warehouse just 400 feet down the road to the West of the house. Art ran his bricklaying business out of this warehouse in the 1960's and 70's, during which time he built many churches and community centers still in use in the Kansas City, KS area to this day. Unfortunately, Art passed away from cancer in 1981, but we honor his legacy by celebrating this very special day at the beautiful home he worked so hard to build.</p>
                <img src={ require(`../photos/map.png`) } alt="venue map" draggable="false" className="venue-map"/>
                <p className="josifin-slab">Following the cocktail hour, a golf car will be available to help transport those guests to the reception area that cannot make the walk.</p>
            </div>
            
        </div>
    )
}
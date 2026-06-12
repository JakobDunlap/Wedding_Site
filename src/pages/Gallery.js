import { NavLink } from 'react-router-dom';

export default function Gallery() {

    function navClick() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="gallery">
            
            <div id="container">
                <img src={ require(`../photos/dog.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="cursive" id="title-banner"><NavLink to="/" onClick={navClick}>Julia & Jake</NavLink></h1>
                <p className="josifin-slab-bold">09 | 19 | 2026</p>
            </div>

            <div className="gallery-page-content josifin-slab">
                <h1>A Few of our Favorite Photos</h1>

                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/lighthouse.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/arkansas.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/skiing.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/sunset.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/blackandwhite.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/porch.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/hiking.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/nelsonatkins.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/minnesota.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/bench.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
                <div className="gallery-grid">
                    <img src={ require(`../gallery-photos/walking.jpg`) } alt="background" draggable="false" className="gallery-image"/>
                </div>
            </div>

        </div>
    )
}
import { NavLink } from 'react-router-dom';

export default function Venue() {

    function navClick() {
        window.scrollTo(0, 0);
    }

    return (
        <div className="venue">

            <div id="container">
                <img src={ require(`../truck.jpg`) } alt="background" draggable="false" className="background-image"/>
                <h1 className="monsieur-la-doulaise-regular" id="title-banner"><NavLink to="/" onClick={navClick}>Julia &    Jake</NavLink></h1>
                <p>09 | 19 | 2026</p>
            </div>

             <div className="page-content">
                <h1>This is a heading for the wedding home page</h1>
                <p>Jakob Dunlap and Julia Pfromm met three years ago on Bumble and it didn't take long for us to understand how right for each other we were. Along the way we've taken lots of trips, shared many laughs, adopted a loveably stubborn dog, and held each other up throught the many challenges life presents to us. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aspernatur, nulla nam illo labore consequatur officia sapiente voluptatum quibusdam adipisci aperiam molestiae doloribus aut quis ducimus, odio hic eos quasi doloremque exercitationem sunt similique qui expedita. Mollitia vitae qui illo. Soluta ipsum explicabo non voluptates fugiat rerum quibusdam vero excepturi! Illum repudiandae accusantium ad inventore suscipit sed commodi dolorum velit corrupti facere, similique nulla perferendis et eius vero quibusdam reiciendis. Repellendus quasi totam doloremque labore blanditiis consectetur eum voluptatem dignissimos eaque nostrum praesentium, delectus animi atque, est magnam sapiente error necessitatibus dolore placeat ipsam corrupti dolores? Architecto quam earum labore.</p>
            </div>
            
        </div>
    )
}
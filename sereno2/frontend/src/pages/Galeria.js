import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/components/pages/Galeria.css';

const Galeria = (props) => {
    return (
        <div className="galeria">
            <Carousel className="holder">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/cartel.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/veleros.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/deck.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/desayuno.jpg"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default Galeria;






// import React from 'react';
// import '../styles/components/pages/Galeria.css';

// const Galeria = (props) => {
//     return (
//         <main className="holder">
//             <div className="galeria">
//                 <img src="img/cartel.jpg" alt="Cartel Siquiman" />
//                 <img src="img/veleros.jpg" alt="Veleros" />
//                 <img src="img/deck.jpg" alt="Deck casa" />
//                 <img src="img/desayuno.jpg" alt="Desayuno" />
//             </div>
//         </main>
//     )
// }

// export default Galeria;
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
                        alt="Villa Parque Síquiman"
                    />
                    <Carousel.Caption>
                        <p>Entrada a Villa Parque Síquiman desde la ruta.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/veleros.jpg"
                        alt="Carrera de veleros"
                    />

                    <Carousel.Caption>
                        <p>Carrera de veleros desde el deck de Sereno.</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/deck.jpg"
                        alt="Deck"
                    />

                    <Carousel.Caption>
                        <p>¿Salen unos mates acá, qué decís?</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/ventanal.jpg"
                        alt="Ventanal"
                    />

                    <Carousel.Caption>
                        <p>Mirá esta vista, una belleza.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/cocina.jpg"
                        alt="Cocina equipada"
                    />

                    <Carousel.Caption>
                        <p>Cocina totalmente equipada.</p>
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
import React from 'react';
import '../styles/components/pages/Servicios.css';
import pileta from '../gif/pileta.gif';
import internet from '../gif/internet.gif';
import desayuno from '../gif/cafe.gif';
import estacionamiento from '../gif/car.gif';
import aire from '../gif/cold.gif';

const Servicios = (props) => {
    return (
        <main className="holder">
            <div className="servicios">

                <div className="servicio">
                    <img src={desayuno} alt='desayuno' />
                    <div className='servicioinfo'>
                        <h4>Desayuno</h4>
                        <p> La estadía incluye el desayuno y, como nos destacamos por la atención personalizada, vas a ver cuánto amor le ponemos a la primera comida del día. <br></br> Cuando hagas la reserva, contanos si sos más de los desayunos con facturas, manteca y dulce o si preferís unas ricas tostadas, quesos y frutas. ¡Todo caserito, una delicia!
                        </p>
                    </div>
                </div>

                <div className="servicio">
                    <img src={pileta} alt='pileta' />
                    <div className='servicioinfo'>
                        <h4>Pileta</h4>
                        <p>Vas a poder disfrutar del parque, los árboles y la naturaleza. Seguro te van a dar ganas de hacer una caminata, y nada mejor que un chapuzón para refrescarse a la vuelta. <br></br> La pileta cuenta con un solárium con reposeras para tomar sol o para relajarse debajo de la sombrilla. <br></br> Sí, claro, tiene vista al lago.
                        </p>
                    </div>
                </div>

                <div className="servicio">
                    <img src={aire} alt='aire acondicionado' />
                    <div className='servicioinfo'>
                        <h4>Aire Acondicionado</h4>
                        <p>Como podés venir a Sereno durante todo el año, la idea es que no importe el clima que haga afuera, vos estés a gusto. <br></br> Así que cuando llegues, ¡todo va a estar bajo control —del aire acondicionado frío/calor—!
                        </p>
                    </div>
                </div>

                <div className="servicio">
                    <img src={internet} alt='Internet' />
                    <div className='servicioinfo'>
                        <h4>Internet</h4>
                        <p>Si bien vas a tener unas de las mejores vistas al lago y a las montañas, si tenés ganas de ver Netflix o subir algunas fotos a las redes... ningún problema. <br></br> La casita tiene Wi-Fi, un sillón y un smartTV listos para que los disfrutes.
                        </p>
                    </div>
                </div>

                <div className="servicio">
                    <img src={estacionamiento} alt='estacionamiento' />
                    <div className='servicioinfo'>
                        <h4>Estacionamiento</h4>
                        <p>El auto no va a ser una preocupación. También va a poder descansar a la sombrita y protegido en la cochera techada. <br></br>
                            Sereno cuenta, además, con servicio de vigilancia las 24 horas así que tranqui... vas a venir a relajarte.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Servicios;








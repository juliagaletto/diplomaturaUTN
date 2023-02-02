import React from 'react';
import '../styles/components/pages/Nosotros.css';

const Nosotros = (props) => {
    return (
        <main className="holder">
            <div className="nosotros">
                <div className="carlos">
                    <img src="img/carlos.jpg" alt="Carlos" />
                    <p> Hola a todos, me presento, soy Carlos. Sereno para mí es un sueño. <br></br> Siempre me gustó que la gente que me visita, 
                    se sienta cómoda y a gusto; eso es lo que deseo que suceda cuando vengan. Me apasiona la astronomía, la navegación, los perros y los helados. Sí, hay gustos para todo y por suerte el mío es bien variado. <br></br>
                    Espero que disfruten de Sereno tanto como lo hice yo desde que comenzó siendo una idea hasta que se hizo realidad. <br></br>
                    Cada detalle de este espacio fue pensado con mucho amor. </p>
                </div>
                <div className="susana">
                    <img src="img/susana.jpg" alt="Susana" />
                    <p> Yo soy Susana, o la Su, para los que me conocen. Si tuviera que describirme en pocas palabras, diría
                        que disfruto estar tranquila, en compañía de un buen libro y una rica torta. <br></br>
                        También tengo mi lado artístico, pinto cuadros y hago manualidades... dejar un poquito de mí en Sereno fue un placer. <br></br>Me da mucha alegría conectar
                        con las plantas y el jardín, así que si me ven por ahí regando o haciendo plantines, son bienvenidos a sumarse.
                        <br></br> Espero que disfruten su estadía con nosotros. <br></br>¡Los esperamos!


                    </p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros;
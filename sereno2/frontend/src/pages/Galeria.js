import React from 'react';
import '../styles/components/pages/Galeria.css';

const Galeria = (props) => {
    return (
        <main className="holder">
            <div className="galeria">
                <img src="img/cartel.jpg" alt="Cartel Siquiman" />
                <img src="img/veleros.jpg" alt="Veleros" />
                <img src="img/deck.jpg" alt="Deck casa" />
                <img src="img/desayuno.jpg" alt="Desayuno" />
            </div>
        </main>
    )
}

export default Galeria;
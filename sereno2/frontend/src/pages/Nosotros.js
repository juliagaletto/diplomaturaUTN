import React from 'react';
import '../styles/components/pages/Nosotros.css';

const Nosotros = (props) => {
    return (
        <main className="holder">
            <div className="nosotros">
                <div className="carlos">
                    <img src="img/carlos.jpg" alt="Carlos" />
                    <p>Carlos </p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum dignissimos
                        tempora fuga quisquam ratione odio quis ex maiores, fugit esse cumque voluptatibus, ab dolores harum
                        sapiente in minus assumenda? </p>
                </div>
                <div className="susana">
                    <img src="img/susana.jpg" alt="Susana" />
                    <p>Susana </p><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum dignissimos
                        tempora fuga quisquam ratione odio quis ex maiores, fugit esse cumque voluptatibus, ab dolores harum
                        sapiente in minus assumenda?</p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros;
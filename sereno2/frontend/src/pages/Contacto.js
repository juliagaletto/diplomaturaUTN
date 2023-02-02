import React from 'react';
import '../styles/components/pages/Contacto.css';

const Contacto = (props) => {
    return (
        <main className="holder">
            <div className="contacto">

                <h6>Si tenés alguna consulta o querés hacer una reserva, completá este formulario y nos contáctaremos con vos a la brevedad.</h6>

                <div className="contactoform">
                    <form className="formulario" action="">
                        <p> <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" />
                        </p>

                        <p> <label for="apellido">Apellido</label>
                            <input type="text" name="apellido" />
                        </p>

                        <p> <label for="correo">Correo electrónico</label>
                            <input type="text" name="correo" />
                        </p>

                        <p>
                            <label for="consulta">¿En qué podemos ayudarte?</label>
                            <textarea name="Consulta"></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar" />
                        </p>

                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contacto;
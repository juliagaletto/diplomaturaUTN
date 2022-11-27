import React from 'react';
import '../styles/components/pages/Contacto.css';

const Contacto = (props) => {
    return (
        <main className="holder">
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

                    <p><label for="fecha">Fecha de reserva</label>
                        <input type="text" name="fecha" />
                    </p>
                    <p>
                        <label for="consulta">Consulta</label>
                        <textarea name="Consulta"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>

                </form>
            </div>
        </main>
    )
}

export default Contacto;
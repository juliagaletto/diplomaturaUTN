import React, { useState } from 'react';
import '../styles/components/pages/Contacto.css';
import axios from 'axios';

const Contacto = (props) => {

    const initialform = {
        nombre: '',
        apellido: '',
        correo: '',
        consulta: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialform);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialform)
        }
    }



    return (
        <main className="holder">
            <div className="contacto">

                <h6>Si tenés alguna consulta o querés hacer una reserva, completá este formulario y nos contáctaremos con vos a la brevedad.</h6>

                <div className="contactoform">

                    <form className="formulario" action="/contacto" method='post' onSubmit={handleSubmit}>
                        <p> <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </p>

                        <p> <label for="apellido">Apellido</label>
                            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
                        </p>

                        <p> <label for="correo">Correo electrónico</label>
                            <input type="text" name="correo" value={formData.correo} onChange={handleChange} />
                        </p>

                        <p>
                            <label for="consulta">¿En qué podemos ayudarte?</label>
                            <textarea name="consulta" value={formData.consulta} onChange={handleChange}></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar" />
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                    </form>

                </div>
            </div>
        </main>
    )
}

export default Contacto;
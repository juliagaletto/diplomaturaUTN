import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PromocionItem from '../components/promociones/PromocionItem';
import '../styles/components/pages/Promociones.css';


const Promociones = (props) => {

    const [loading, setLoading] = useState(false);
    const [promociones, setPromociones] = useState([]);

    useEffect(() => {
        const cargarPromociones = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/promociones');
            setPromociones(response.data);
            setLoading(false);
        };

        cargarPromociones();
    }, []);


    return (
        <section className="promos">
            <h6>¡Aprovechá nuestras promociones! Sereno Resort tiene todo lo que buscás.</h6>

            {loading ? (
                <p>Cargando las promociones...</p>
            ) : (
                promociones.map(item => <PromocionItem key={item.id}
                    title={item.titulo} description={item.descripcion} image={item.imagen} />
                )
            )}

        </section>

    );
}

export default Promociones;
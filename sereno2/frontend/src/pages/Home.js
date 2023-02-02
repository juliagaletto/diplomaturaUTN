import React from 'react';
import '../styles/components/pages/Home.css';

const Home = (props) => {
    return (
        <main className="holder">
            <div className="home">
                <img src="img/desayuno.jpg" alt="Desayuno Villa Parque Siquiman" />
                <div>
                    <h5>¡Qué bueno que viniste!</h5>
                    <p>Sí, así —con esa frase y una sonrisa— recibimos a nuestros huéspedes. Disfrutamos mucho cada vez que alguien viene a Sereno a pasar un lindo día o unas vacaciones. Queremos que disfrutes, te relajes y la pases bien. El paisaje ayuda, claro.</p>
                    <p>Desde la casita, ubicada en el corazón de <a className='enlace' href="https://www.google.com.ar/maps/place/Villa+Parque+S%C3%ADquiman,+Cordoba,+Argentina/@-31.341917,-64.4973235,14z/data=!3m1!4b1!4m6!3m5!1s0x942d64ffe74d5fab:0xf3de1e28279c851d!8m2!3d-31.3448304!4d-64.4756248!16s%2Fg%2F11cfv1_vx?hl=en" target="_blank">Villa Parque Síquiman</a>, 
                    vas a poder ver el lago y las montañas mientras disfrutas de la pile o de unos mates en el deck.</p>
                    <p>Los colores del atardecer, los dibujos que se forman con la brisa en el agua y hasta las tormentas eléctricas son todo un espectáculo desde el ventanal.</p>
                    <p>¿Lo mejor? Te recibimos todo el año. Acá te dejamos este enlace para que veas los <a className='enlace' href="img/findes2023.jpg" target="_blank">fines de semana largos de este año</a> para que te organices mejor y disfrutes de unos días para vos.</p>
                    <p>No hace falta que traigas nada, vas a tener todas las comodidades que te imagines. Diseñamos Sereno para que te sientas como en casa —bah, casi; queremos que estés bastante más relajado—.</p>
                    <p>La casa está totalmente equipada, desde la ropa blanca hasta la cucharita para el café. En la sección de <em>Servicios</em> podés ver todo en detalle. Pasá y chusmeá todo.</p>
                    <p>Vas a ver... te vas a ir diciendo <strong>¡qué bueno que vine!</strong></p>



                </div>
            </div>
        </main>
    )
}

export default Home;
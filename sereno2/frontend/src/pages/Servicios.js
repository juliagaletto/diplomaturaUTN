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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum asperiores facere voluptatum error
                            ratione natus. Dolore magni et, enim hic vero laboriosam nisi deleniti perferendis temporibus cum in
                            vitae dolor.
                        </p>
                    </div>
                </div>

                <div className="servicio">
                    <img src={pileta} alt='pileta' />
                    <div className='servicioinfo'>
                        <h4>Pileta</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum asperiores facere voluptatum error
                            ratione natus. Dolore magni et, enim hic vero laboriosam nisi deleniti perferendis temporibus cum in
                            vitae dolor.
                        </p>
                    </div>
                </div>

                <div className="servicio">
                        <img src={aire} alt='aire acondicionado' />
                        <div className='servicioinfo'>
                            <h4>Aire Acondicionado</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum asperiores facere voluptatum error
                                ratione natus. Dolore magni et, enim hic vero laboriosam nisi deleniti perferendis temporibus cum in
                                vitae dolor.
                            </p>
                        </div>
                </div>
             
                <div className="servicio">
                    <img src={internet} alt='Internet' />
                    <div className='servicioinfo'>
                        <h4>Internet</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum asperiores facere voluptatum error
                            ratione natus. Dolore magni et, enim hic vero laboriosam nisi deleniti perferendis temporibus cum in
                            vitae dolor.
                        </p>
                    </div>
                </div>

                <div className="servicio">
                    <img src={estacionamiento} alt='estacionamiento' />
                    <div className='servicioinfo'>
                        <h4>Estacionamiento</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum asperiores facere voluptatum error
                            ratione natus. Dolore magni et, enim hic vero laboriosam nisi deleniti perferendis temporibus cum in
                            vitae dolor.
                        </p>
                    </div>
                </div>
              
            </div>
        </main>
    )
}

export default Servicios;








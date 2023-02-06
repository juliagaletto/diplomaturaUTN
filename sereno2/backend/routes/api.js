var express = require('express');
var router = express.Router();
var promocionesModel = require('../models/promocionesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/promociones', async function (req, res, next) {

    let promociones = await promocionesModel.getPromociones();

    promociones = promociones.map(promociones => {
        if (promociones.img_id) {
            const imagen = cloudinary.url(promociones.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...promociones,
                imagen
            }
        } else {
            return {
                ...promociones,
                imagen: ''
            }
        }
    });

    res.json(promociones);
});


router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'galetto.julia@gmail.com',
        subject: 'Consulta/Reserva',
        html: `${req.body.nombre} ${req.body.apellido} ha realizado una consulta/reserva en el sitio: ${req.body.consulta}. Solicita información al siguiente correo: ${req.body.correo} `
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado con éxito.'
    });
});



module.exports = router;
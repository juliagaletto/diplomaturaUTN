var express = require('express');
var router = express.Router();
var promocionesModel = require('../../models/promocionesModel');

router.get('/', async function (req, res, next) {

    var promociones = await promocionesModel.getPromociones();

    res.render('admin/promociones', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        promociones
    });
});


router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            await promocionesModel.insertPromocion(req.body);
            res.redirect('/admin/promociones')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos.'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la promoción. Intente nuevamente.'
        })
    }

});

module.exports = router;
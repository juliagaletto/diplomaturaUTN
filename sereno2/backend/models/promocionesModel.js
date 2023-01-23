var pool = require('./bd');

async function getPromociones() {
    var query = 'select * from promociones';
    var rows = await pool.query(query);
    return rows;
}

async function insertPromocion(obj) {
    try {
    var query = 'insert into promociones set ? ';
    var rows = await pool.query(query, [obj]);
    return rows;
} catch(error) {
    console.log(error);
    throw error;
}
    
}

async function deletePromocionById(id) {
    var query = 'delete from promociones where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getPromociones, insertPromocion, deletePromocionById }
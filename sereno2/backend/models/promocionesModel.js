var pool = require('./bd');

async function getPromociones() {
    var query = 'select * from promociones';
    var rows = await pool.query(query);
    return rows;
}

async function insertPromocion(obj) {
    try {
    var query = "insert into promociones set ? ";
    var rows = await pool.query(query, [obj]);
    return rows;
} catch(error) {
    console.log(error);
    throw error;
}
    
}

module.exports = { getPromociones, insertPromocion }
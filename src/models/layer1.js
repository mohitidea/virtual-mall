const pool= require('../config/db');

const getAllCategories = async () => {
    const query= 'SELECT * FROM categories';
    const result= await pool.query(query);
    return result.rows;
};

module.exports= {
    getAllCategories
};
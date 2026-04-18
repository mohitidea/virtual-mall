const pool= require('../config/db');

const getAllCategories = async () => {
    const query= 'SELECT * FROM categories';
    const result= await pool.query(query);
    return result.rows;
};

const findUserByEmail= async (email) => {
    const query= 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    return rows[0];
};

const createUser= async (name, email, hashedPassword)=> {
    const query= "Insert into users (name, email, password) values ($1, $2, $3) returning id, name, email";
    const {rows} = await pool.query(query, [name, email, hashedPassword]);
    return rows[0];
}
module.exports= {
    getAllCategories,
    findUserByEmail,
    createUser
};
const l1Model= require('../models/layer1');
const bcrypt = require('bcryptjs');
const {generateToken}= require('../utils/jwt');


const fetchAllCategories= async () => {
    const categories= await l1Model.getAllCategories();
    return {
        count: categories.length,
        categories,
    }
}


const loginUser= async (email, password) => {
    const user= await l1Model.findUserByEmail(email);
    if(!user) {
        throw new Error('User not found');
    }
    const isMatch= await bcrypt.compare(password, user.password);
    if(!isMatch) {
        throw new Error('Invalid Credentials');
    }
    const token= generateToken({
        id: user.id,
        email: user.email,});
    return { token };
};

const registerUser= async (name, email, password) => {
    const existingUser= await l1Model.findUserByEmail(email);
    if(existingUser){
        throw new Error('User Already Exists');
    }
    const hashedPassword= await bcrypt.hash(password, 10);
    const newUser= await l1Model.createUser(name, email, hashedPassword);
    return newUser;
}

module.exports= {
    fetchAllCategories,
    loginUser,
    registerUser
};
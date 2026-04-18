const l1Service = require('../services/layer1');
const { validateSignup } = require('../validations/auth.validation');

const getCategories = async(req,res)=>{
    try{
        const result= await l1Service.fetchAllCategories();
        res.status(200).json({
            success: true,
            count: result.count,
            data: result.categories,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const login= async(req,res)=>{
    try {
        const { email, password } = req.body;
        const result = await l1Service.loginUser(email, password);
        res.status(200).json({
            success: true,
            token: result.token
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        });
    }
}

const signup= async(req,res)=> {
    try{
        const error= validateSignup(req.body);
        if(error){
            return res.status(400).json({
                success: false,
                message: error,
            })
        }
        const { name, email, password } = req.body;
        const user = await l1Service.registerUser(name, email, password);
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}


module.exports= {
    getCategories,
    login,
    signup
};
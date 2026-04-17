const categoryService = require('../services/layer1');

const getCategories = async(req,res)=>{
    console.log('cp-1');
    try{
        const result= await categoryService.fetchAllCategories();
        res.status(200).json({
            success: true,
            count: result.count,
            data: result.categories,
        })
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports= {
    getCategories
};
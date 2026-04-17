const categoryModel= require('../models/layer1');


const fetchAllCategories= async () => {
    const categories= await categoryModel.getAllCategories();
    return {
        count: categories.length,
        categories,
    }
}

module.exports= {
    fetchAllCategories
};
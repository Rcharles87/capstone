const express = require("express");
const products = express.Router({mergeParams:true});

const {getAllProducts} = require("../queries/products.js");

products.get("/", async(req,res)=>{
    try {
        const allProducts = await getAllProducts()
        res.status(200).json(allProducts);
    } catch (error) {
        return error;
    };
});

products.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try{
        const deletedProduct = await deleteProduct(id);
        res.status(200).json({payload: "success", itemDeleted: deletedItem})
    }catch(err){
        return err;
    }
})

module.exports = products;
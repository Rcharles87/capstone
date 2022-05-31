const express = require("express");
const customers = express.Router();
const {getAllCustomers, getOneCustomer,  createCustomer, updateCustomer} = require("../queries/customers.js")

customers.get("/", async (req, res) => {
    try{
        const allCustomers = await getAllCustomers();
        res.status(200).json(allCustomers)
    }catch(err){
        return err;
    }
})

customers.get("/:id", async (req,res) =>{
    const {id} = req.params
    try {
        const oneCustomer = await getOneCustomer(id);
        res.status(200).json(oneCustomer)
        
    } catch (err) {
        return err
    }
})

customers.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdCustomer = await createCustomer(body);
        if(createdCustomer.id){
            res.status(200).json(createdCustomer);
        }else{
            res.status(500).json({error: 'Cannot create user'});
        }
    }catch(err){
        return err;
    }
})


customers.put("/:id", async (req, res) => {
    const {id} = req.params;
    const { body } = req;
    const updatedCustomer = await updateCustomer(id, body);
    try{
        if(updatedCustomer.id){
            res.status(200).json(updatedCustomer);
        }else{
            res.status(500).json({error: 'Cannot update user'})
        }
    }catch(err){
        return err;
    }

})

customers.delete("/:id/deleteItem", async (req,res) => {
    const { id } = req.params;
    console.log(id)
    try {
        //Find the active cart of a customer
        //Find order details for the active cart
        //Delete from order details where order details.products_id = the products_id (frontend)
    } catch (error) {
        
    }
})

module.exports = customers;
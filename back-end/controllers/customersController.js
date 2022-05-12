const express = require("express");
const customers = express.Router();
const {getAllCustomers, createCustomer, updateCustomer} = require("../queries/customers.js")

customers.get("/", async (req, res) => {
    try{
        const allCustomers = await getAllCustomers();
        res.status(200).json(allCustomers)
    }catch(err){
        return err;
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

module.exports = customers;
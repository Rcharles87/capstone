const express = require("express");
const auth = express.Router();
const { checkAccount } = require("../queries/auth.js");
const { createCustomer } = require("../queries/customers.js");

auth.post("/signup", async(req, res) => {
    const { body } = req;
    try{
        const createdCustomer = await createCustomer(body);
        console.log("controllers", createdCustomer)
        if(createdCustomer.id){
            res.status(200).json(createdCustomer);
        }else{
            res.status(500).json({error: 'Cannot create user'});
        }
    }catch(err){
        return err;
    }
})

auth.post("/signin", async(req, res) => {
    const { body } = req;
    try{
        const validIdNum = await checkAccount(body.username, body.password);
        if(validIdNum){
            res.status(200).json(validIdNum);
        }else{
            res.status(500).json({error: 'incorrect username/password'});
        }
    }catch(err){
        return err;
    }
});

module.exports = auth;

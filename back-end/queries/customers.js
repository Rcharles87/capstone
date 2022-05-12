const db = require("../db/dbConfig.js");

const getAllCustomers = async () => {
    try{
        const allCustomers = await db.any("SELECT * FROM customers");
        return allCustomers;
    }catch(err){
        return err;
    };
};

const createCustomer = async (customer) => {
    try{
        const newCustomer = await db.one("INSERT INTO customers(Fname, Lname, usersame, password) VALUES($1, $2, $3, $4) RETURNING *",
        [customer.Fname, customer.Lname, customer.username, customer.password]);
        return newCustomer;
    }catch(err){
        return err;
    };
};

const updateCustomer = async (id, customer) => {
    try{
        const updatedCustomer = await db.one("UPDATE customers SET Fname=$1, Lname=$2, username=$3, password=$4 WHERE id=$5 RETURNING *",
        [customer.Fname, customer.Lname, customer.username, customer.password], id);
        return updatedCustomer;
    }catch(err){
        return err;
    };
};

module.exports = { getAllCustomers, createCustomer, updateCustomer};
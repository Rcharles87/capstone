const db = require("../db/dbConfig.js");


const checkAccount = async (username, password) => {
    try {
        const account = await db.one("SELECT id FROM customers WHERE username=$1 AND password=$2", [username, password]);
        return account
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    checkAccount
}
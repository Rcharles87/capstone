const db = require("../db/dbConfig.js");

const getAllRestaurants = async () => {
  try{
      const allRestaurants = await db.any("SELECT * FROM restaurants");
      return allRestaurants;
  }catch(err){
      return err;
  };
};

const getOneRestaurant = async (restaurant_id) => {
  try {
      const oneRestaurant = await db.one("SELECT * FROM restaurants WHERE id=$1", restaurant_id);
      return oneRestaurant;
  } catch (err) {
    return err;
  };
};

module.exports = { getAllRestaurants, getOneRestaurant };
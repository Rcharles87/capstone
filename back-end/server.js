// Dependencies
const app = require("./app.js");

// Configuration
require("dotenv").config();

//Environmental variable
const PORT = process.env.PORT;

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

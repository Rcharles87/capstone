# Capstone Project

Food insecurity in America and across the globe is a huge problem. With the rising cost of inflation and New York population growing, the situation needs to be met with an applicable solution. Meals4NYC is a platform that connects restaurants to customers who are in need of a warm meal. New York residents locate restaurants on a map and browse through restaurant options. New York residents can reserve meal-kits provided by the restaurants and check out their order.


## Instructions to run app Locally 

I have some pre-wrtitten scripts to make this process a lot easier. A friendly suggestion if you dont have postgresSQL please download from [here](https://www.postgresql.org/download/). After please change directory into the back-end folder and run

` npm install `

this will download eveything nessceary to be able to run the file. Afterwards run these scripts in this order to initalize and seed your data base 

``` npm run db:init ```

```npm run bd:seed```

And finally to start the server that can be checked in your local browser just run the script

```npm start```

## TLDR Online deployment 

If you dont want to run locally and just want to see what was built please click [Here](https://neon-sunshine-d63a1f.netlify.app/). 

and for the back-end you can click [Here](https://meals-4-nyc.herokuapp.com/)
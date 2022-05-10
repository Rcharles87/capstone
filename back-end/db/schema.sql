DROP DATABASE IF EXISTS tasty_waste;
CREATE DATABASE tasty_waste;

\c tasty_waste;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

DROP TABLE IF EXISTS baskets;

CREATE TABLE baskets (
    id SERIAL PRIMARY KEY,
    is_active BOOLEAN,
    customer_id INTEGER REFERENCES customers (id)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS order_details;

CREATE TABLE order_details (
    id SERIAL PRIMARY KEY,
    basket_id INTEGER REFERENCES baskets (id) ON DELETE CASCADE,
    quantity INTEGER
);

DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    cuisine_type TEXT NOT NULL
);

DROP TABLE IF EXISTS meals;

CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    dietary_restrictions TEXT NOT NULL,
    quantity_in_stock INTEGER,
    restaurant_id INTEGER REFERENCES restaurants (id)
    ON DELETE CASCADE
);


DROP TABLE IF EXISTS ordered_meals; 

CREATE TABLE ordered_meals (
    meals_id INTEGER REFERENCES meals (id) ON UPDATE CASCADE ON DELETE CASCADE,
    order_details_id INTEGER REFERENCES order_details (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT ordered_meals_id PRIMARY KEY (meals_id, order_details_id)
);






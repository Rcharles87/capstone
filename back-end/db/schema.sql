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
    customer_id INTEGER REFERENCES customer (id)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS order_details;

CREATE TABLE order_details (
    id SERIAL PRIMARY KEY,
    basket_id INTEGER,
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
    name TEXT NOT NULL,
    dietary_restrictions TEXT NOT NULL,
    quantity_in_stock INTEGER,
    restaurant_id INTEGER REFERENCES restaurants (id)
    ON DELETE CASCADE
);

SELECT order_details.id, order_details.quantity, meals.id
FROM order_details
INNER JOIN meals ON order_details.id=meals.id



-- ALTER TABLE order_details
DROP DATABASE IF EXISTS tasty_waste;
CREATE DATABASE tasty_waste;

\c tasty_waste;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    Fname TEXT NOT NULL,
    Lname TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);


DROP TABLE IF EXISTS carts;

CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    is_active BOOLEAN,
    customer_id INTEGER REFERENCES customers (id)
    ON DELETE CASCADE
);


DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    cuisine_type TEXT NOT NULL
);


DROP TABLE IF EXISTS products;

CREATE TABLE  products(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    quantity_in_stock INTEGER,
    restaurant_id INTEGER REFERENCES restaurants (id)
    ON DELETE CASCADE
);


DROP TABLE IF EXISTS order_details;

CREATE TABLE order_details (
    carts_id INTEGER REFERENCES carts (id) ON UPDATE CASCADE ON DELETE CASCADE,
    products_id INTEGER REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
    quantity INTEGER,
    CONSTRAINT order_details_id PRIMARY KEY (products_id, carts_id)
);






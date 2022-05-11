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

DROP TABLE IF EXISTS order_details;

CREATE TABLE order_details (
    id SERIAL PRIMARY KEY,
    carts_id INTEGER REFERENCES carts (id) ON DELETE CASCADE,
    quantity INTEGER
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


DROP TABLE IF EXISTS ordered_products; 

CREATE TABLE ordered_products (
    products_id INTEGER REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
    order_details_id INTEGER REFERENCES order_details (id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT ordered_meals_id PRIMARY KEY (products_id, order_details_id)
);






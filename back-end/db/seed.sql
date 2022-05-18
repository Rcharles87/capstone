\c tasty_waste;

INSERT INTO customers (Fname, Lname, username, password) VALUES
('rae', 'charles', 'rcharles', '1234567'),
('laiba', 'sajid', 'lsajid', '1234567'),
('hannah', 'inkabi', 'hinkabi', '1234567'),
('ronnie', 'garcia', 'rgarcia', '1234567');

INSERT INTO carts (customer_id, is_active) VALUES
(1, true),
(2, true),
(3, false),
(3, true),
(3, false),
(2, false);


INSERT INTO restaurants (name, cuisine_type, add, lat, lon) VALUES
('Zabars', 'Cafe / Healthy', '2245 Broadway, New York, NY 10024', 40.7849024, -73.97966685 ),
('Murrays Bagels', 'Baked Goods', '500 6th Ave New York, NY 10011', 40.7447814, -73.9985854 ),
('Sweet Green', 'Salads & fresh vegetables', '8 E 18th St, New York, NY 10003', 40.73805135, -73.9912353351445 ),
('Dig', 'Balanced Vegetable based dishes', '2254 Broadway, New York, NY 10024', 40.78485, -73.97955 );

INSERT INTO products (restaurant_id, name, quantity_in_stock ) VALUES
(1, 'Vegan', 7),
(1, 'Gluten free', 9),
(1, 'Non-dairy', 10),
(1, 'Halal', 2),
(1, 'Kosher', 6),
(1, 'Low Sodium', 15),
(2, 'Vegan', 22),
(2, 'Gluten free', 35),
(2, 'Non-dairy', 3),
(2, 'Halal', 1),
(2, 'Kosher', 3),
(2, 'Low Sodium', 5),
(3, 'Vegan', 2),
(3, 'Gluten free', 40),
(3, 'Non-dairy', 6),
(3, 'Halal', 20),
(3, 'Kosher', 11),
(3, 'Low Sodium', 2),
(4, 'Vegan', 15),
(4, 'Gluten free', 21),
(4, 'Non-dairy', 36),
(4, 'Halal', 24),
(4, 'Kosher', 0),
(4, 'Low Sodium', 1);

INSERT INTO order_details (carts_id, products_id, quantity) VALUES
(3, 1, 1),
(4, 21, 3),
(1, 17, 5),
(2, 3, 6),
(1, 5, 3),
(5, 9, 1),
(6, 12, 3),
(3, 4, 1),
(3, 6, 4);
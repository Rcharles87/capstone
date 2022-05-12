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
(3, true);


INSERT INTO restaurants (name, cuisine_type ) VALUES
('IHop', 'breakfast'),
('olive garden', 'italian'),
('panda express', 'chinese food'),
('dairy queen', 'desert');

INSERT INTO products (restaurant_id, name, quantity_in_stock ) VALUES
(1, 'vegan', 2),
(2, 'gluten free', 5),
(3, 'non-dairy', 10),
(4, 'halal', 7),
(4, 'bla', 3);

INSERT INTO order_details (carts_id, products_id, quantity) VALUES
(3, 1, 1),
(4, 2, 3),
(1, 4, 5),
(2, 3, 6),
(1, 5, 3);
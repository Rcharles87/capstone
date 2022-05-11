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

INSERT INTO order_details (carts_id, quantity) VALUES
(3, 1),
(4, 2),
(1, 4),
(2, 5);

INSERT INTO restaurants (name, cuisine_type ) VALUES
('IHop', 'breakfast'),
('olive garden', 'italian'),
('panda express', 'chinese food'),
('dairy queen', 'desert');

INSERT INTO products (restaurant_id, name, quantity_in_stock ) VALUES
(1, 'vegan', 2),
(2, 'gluten free', 5),
(3, 'non-dairy', 10),
(4, 'halal', 7);

INSERT INTO ordered_products (products_id, order_details_id) VALUES
(1,1),
(3,2),
(2,3),
(4,4);
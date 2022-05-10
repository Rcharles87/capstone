\c tasty_waste;

INSERT INTO customers (username, password) VALUES
('rae', '1234567'),
('laiba', '1234567'),
('hannah', '1234567'),
('ronnie', '1234567');

INSERT INTO baskets (customer_id, is_active) VALUES
(1, true),
(2, true),
(3, false),
(3, true);

INSERT INTO order_details ( basket_id, quantity) VALUES
(3, 1),
(4, 2),
(1, 4),
(2, 5);

INSERT INTO restaurants (name, cuisine_type ) VALUES
('IHop', 'breakfast'),
('olive garden', 'italian'),
('panda express', 'chinese food'),
('dairy queen', 'desert');

INSERT INTO meals (restaurant_id, dietary_restrictions, quantity_in_stock ) VALUES
(1, 'vegan', 2),
(2, 'gluten free', 5),
(3, 'non-dairy', 10),
(4, 'halal', 7);

INSERT INTO ordered_meals (meals_id, order_details_id) VALUES
(1,1),
(3,2),
(2,3),
(4,4);
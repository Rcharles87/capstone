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
('Tamashi Ramen', 'Ramen', '2905 Broadway, Queens, NY 11106', 40.762628, -73.926692),
('Monikas Cafe Bar', 'Mediterranean Cafe', '32-90 36th St, Astoria, NY 11106', 40.75818, -73.92334 ),
('Taco Tumba', 'Taqueria', '30-10 Steinway St, Queens, NY 11103', 40.76381, -73.91531 ),
('Amylos Taverna','Greek', '3319 Broadway, Queens, NY 11106', 40.76123, -73.92277 ),
('Belaire Diner', 'Greek and American Cuisine', '31-91 21st St, Queens, NY 11106', 40.76536, -73.93127 ),
('Saffron', 'Indian Cuisine', '44-04 Broadway, Queens, NY 11103', 40.75762, -73.91567 ),
('Cerasella', 'Pastry shop', '36-27 31st St, Queens, NY 11106', 40.75648, -73.93009 ),
('Zabars', 'Cafe / Healthy', '2245 Broadway, New York, NY 10024', 40.7849024, -73.97966685 ),
('Murrays Bagels', 'Baked Goods', '500 6th Ave New York, NY 10011', 40.7447814, -73.9985854 ),
('Sweet Green', 'Salads & fresh vegetables', '8 E 18th St, New York, NY 10003', 40.73805135, -73.9912353351445 ),
('Dig', 'Balanced Vegetable based dishes', '2254 Broadway, New York, NY 10024', 40.78485, -73.97955 ),
('Mias Brooklyn Bakery', 'Baked Goods / Coffee Bar with Savory items', '139 Smith St, Brooklyn, NY 11201', 40.687061, -73.990199 );

INSERT INTO products (restaurant_id, type, description, portion, calories, quantity_in_stock ) VALUES
(1, 'Vegan', 'Vibrant Greens with Quinoa', '8oz', 280, 7),
(1, 'Gluten free', 'Croissants', '10oz', 231, 9),
(1, 'Lactose free', 'Wild Rice with a side of steamed vegetables', '10oz', 170, 10),
(1, 'Gluten free', 'Butternut squash linguine', '12oz', 280, 2),
(2, 'Vegan','Vibrant Greens with Quinoa', '12oz', 280, 22),
(2, 'Gluten free','Vibrant Greens with Quinoa', '12oz', 280, 35),
(2, 'Non-dairy','Vibrant Greens with Quinoa', '12oz', 280, 3),
(2, 'Halal','Vibrant Greens with Quinoa', '12oz', 280, 1),
(3, 'Vegan','Vibrant Greens with Quinoa', '12oz', 280, 2),
(3, 'Gluten free','Vibrant Greens with Quinoa', '12oz', 280, 40),
(3, 'Non-dairy','Vibrant Greens with Quinoa', '12oz', 280, 6),
(3, 'Low Sodium', 'Vibrant Greens with Quinoa', '12oz', 280,2),
(4, 'Vegan','Vibrant Greens with Quinoa', '12oz', 280, 15),
(4, 'Gluten free','Vibrant Greens with Quinoa', '12oz', 280, 21),
(5, 'Non-dairy','Vibrant Greens with Quinoa', '12oz', 280, 36),
(5, 'Low Sodium','Vibrant Greens with Quinoa', '12oz', 280, 1),
(6, 'Vegan','Vibrant Greens with Quinoa', '12oz', 280, 15),
(7, 'Gluten free','Vibrant Greens with Quinoa', '12oz', 280, 21),
(8, 'Non-dairy','Vibrant Greens with Quinoa', '12oz', 280, 36),
(8, 'Low Sodium','Vibrant Greens with Quinoa', '12oz', 280, 1),
(9, 'Vegan','Vibrant Greens with Quinoa', '12oz', 280, 15),
(9, 'Gluten free','Vibrant Greens with Quinoa', '12oz', 280, 21),
(10, 'Non-dairy','Vibrant Greens with Quinoa', '12oz', 280, 36),
(10, 'Low Sodium','Vibrant Greens with Quinoa', '12oz', 280, 1),
(11, 'Vegan','Vibrant Greens with Quinoa', '12oz', 280, 15),
(11, 'Gluten free','Vibrant Greens with Quinoa', '12oz', 280, 21),
(12, 'Non-dairy','Vibrant Greens with Quinoa', '12oz', 280, 36),
(12, 'Low Sodium','Vibrant Greens with Quinoa', '12oz', 280, 1);

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
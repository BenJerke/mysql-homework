DROP DATABASE IF EXISTS bamazon; 
CREATE DATABASE bamazon; 
USE bamazon; 

CREATE TABLE products(
    item_id INTEGER(4) NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(45) NOT NULL, 
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL (10,2) NOT NULL, 
    stock_quantity INTEGER(4), 
    PRIMARY KEY (item_id)

 );


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (1, "old shoe", "odds and ends", 2, 22);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (2, "empty book", "scribblables", 7, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (3, "clean pitchfork", "hellware", 666, 1);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (4, "toy computer", "funstuff", 10, 4000);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (5, "plastic keychain", "odds and ends", 5, 10);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (6, "long novelty pencil", "scribblables", 1, 1020);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (7, "really big eraser", "scribblables", .56, 1000);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (8, "dad's old pinewood derby car", "funstuff", 40, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (9, "'hang in there' kitten poster", "odds and ends", 20, 130);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (10, "pet bird", "funstuff", 200, 14);

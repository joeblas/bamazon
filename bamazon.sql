
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
	`item_id` INT AUTO_INCREMENT NOT NULL,
	`product_name` VARCHAR(255) NOT NULL,
	`department_name` VARCHAR(255),
	`price` INT NOT NULL,
	`stock_quantity` INT
)

INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (1,'ipad','electronics',500,10);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (2,'vans','shoes',40,8);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (3,'chair','furniture',65,13);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (4,'baseballs','sports',4,247);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (5,'tent','outdoors',149,15);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (6,'tv','electronics',350,26);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (7,'echo','electronics',120,34);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (8,'fishing_pool','outdoors',67,34);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (9,'beach_towels','outdoors',8,340);
INSERT INTO `products` (`item_id`,`product_name`,`department_name`,`price`,`stock_quantity`) VALUES (10,'xbox','electronics',220,65);

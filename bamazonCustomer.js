var mysql = require("mysql");
var inquirer = require("inquirer");
var config = require("./config.json");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",
  password: config.sqlpassword,
  database: "bamazon"
});

// Test Connection
//   connection.connect(function(err) {
// 	if (err) {
// 	  console.error('error connecting: ' + err.stack);
// 	  return;
// 	}

// 	console.log('connected as id ' + connection.threadId);

// 	connection.end();
//   });



var purchaseItem = function() {	
  connection.connect(function(err) {
	if (err) throw err;
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;

      inquirer
        .prompt([
          {
            name: "choice",
            type: "list",
            choices: function() {
              var itemArray = [];
              for (var i = 0; i < results.length; i++) {
                var product = results[i];

                itemArray.push(
                  product.item_id +
                    " " +
                    product.product_name +
                    " $" +
                    product.price
                );
              }
              return itemArray;
            },
            message:
              "What is the ID number of the product you would like to purchase?"
          },
          {
            name: "quantity",
            type: "input",
            message: "How many?"
          }
        ])
        .then(function(answer) {
          var itemIdSplit = answer.choice.split("");
          var itemId = itemIdSplit[0];

          connection.query(
            "SELECT stock_quantity, price FROM products WHERE ?",
            {
              item_id: itemId
            },
            function(err, results) {
              if (err) throw err;

              var inventory = results[0].stock_quantity;
              var price = results[0].price;
              var totalPrice = answer.quantity * price;
              if (answer.quantity > inventory) {
                console.log("Insufficient quantity!");
              } else {
                connection.query(
                  "UPDATE products SET ? WHERE ?",
                  [
                    {
                      stock_quantity: inventory - answer.quantity
                    },
                    {
                      item_id: itemId
                    }
                  ],
                  function(err, results) {
                    if (err) throw err;
                    console.log(
                      "Your total is $" +
                        totalPrice +
                        ".\nThe inventory has been updated.\nThank you for shopping at Bamazon."
                    );

                    connection.end();
                  }
                );
              }
            }
          );
        });
    });
  });
};

purchaseItem();

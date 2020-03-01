var mysql = require("mysql");
var inquirer = require ("inquirer");
var fs = require("fs");
require ('custom-env').env('test');

//create your DB connection in config.js

var connection = mysql.createConnection({

    host: process.env.DB_HOST,

    port: process.env.DB_PORT,

    user: process.env.DB_USER,

    password: process.env.DB_PASS,

    database: process.env.DB_NAME,
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    beginPurchaseWorkflow();

  });
  
//   function afterConnection() {
//     connection.query("SELECT * FROM products", function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       connection.end();
//     });
//   }
  

  function beginPurchaseWorkflow() {
      inquirer.prompt ([
        {
            type: "number",
            name: "productId",
            message: "Enter the numeric ID of the product you'd like to purchase."
        },

        {
            type: "number",
            name: "productNum",
            message: "How many units would you like to purchase?" 
        }

      ])
      .then(function (response){

        connection.query("SELECT * FROM products WHERE item_id = ?", [response.productId], function(err, res) {
            console.log("You want to buy " + response.productNum + " of "+ res[0].product_name + "(s) ?")
            checkQuantity(res, response.productNum);
            
            
            
           //if (err) throw err;
            //console.log(res);
            //connection.end();
          });

      })

  }


function checkQuantity (data, quantity) {


    if (quantity > data[0].stock_quantity){
        console.log("We don't have enough of these in stock to fill your order, sorry!")
        connection.end()
        return
    }
    
    else {
        calculateOrderPrice(data, quantity, data[0].price)
    }
    };


function calculateOrderPrice (data, quantity, price){
    var orderPrice = quantity * price;
    console.log("Your order comes to $" + orderPrice)
    placeOrder(data, quantity, orderPrice);
}


function placeOrder(data, quantity, orderPrice) {
    inquirer.prompt([
        {
            type: "list",
            name: "confirmOrder",
            message: "Would you like to place your order?",
            choices: ["Yes please!", "No thanks!"]
        },

    ]).then(function (response){
        if (response.confirmOrder == "Yes please!"){
            decrementStock(data, quantity)
            //incrementRevenue(data, orderPrice)
            console.log("Thank you for your order!")
        }
        else {
            console.log("Ok, maybe next time!")
            connection.end()
            return
        }
    })

}

function decrementStock (data, quantity) {
    var newQuantity = data[0].stock_quantity - quantity;
    connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [newQuantity, data[0].item_id], function (err, res){
    console.log("If you would like to order this item again, we have " + newQuantity + " left in stock.");

    if (err) throw err; 
    connection.end();
    return
    });
}
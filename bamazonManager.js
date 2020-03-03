//select workflow

//view products for sale: show each item

//view low inventory: query rows where stock_quantity < 5

//add new product: make a product constructor. let id = (query next ID in list)

//add to inventory: update stock_quantity of a given item



//DB connection based on .env

var inquirer = require ("inquirer");
var mysql = require ("mysql");
var fs = require("fs");
require ('custom-env').env('test');

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
    selectManagementWorkflow();

});

function selectManagementWorkflow(){
    inquirer.prompt ([
        {
            type: "list",
            name: "workflow",
            message: "Hello manager! What would you like to do?",
            choices: ["View Products for Sale" , "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ]).then(function (response) {
        switch (response.workflow) {
        case "View Products for Sale":
            viewProducts();
            break;

        case "View Low Inventory":
            viewLowInv();
            break;

        case "Add to Inventory":
            addQuantity()
            break;
        
        case "Add New Product":
            addNewProduct();
            break;
        }
    })
}



function viewProducts () {
    console.log("Here is our current inventory");
    console.log("__________________________________________");
    console.log("__________________________________________");

    connection.query("SELECT * FROM products" ,  function(err, res) {
        console.log(res)
        if (err) throw err;
        newWorkflow();
    });
};

function viewLowInv () {
    console.log("Here are our low-inventory items:")
    console.log("__________________________________________")
    console.log("__________________________________________")
    connection.query("SELECT * FROM products WHERE stock_quantity < 5" ,  function(err, res) {
        console.log(res)
        if (err) throw err;
        newWorkflow();
    });

}








function newWorkflow() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "goBack",
            message: "Would you like to do anything else?"
        },
    ]).then(function (response){
        if (response.goBack == true){
            selectManagementWorkflow();
        }
        else {
            console.log("OK, have a nice day!")
            connection.end();
            return
        }
    })
}
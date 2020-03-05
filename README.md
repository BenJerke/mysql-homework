This is a mock storefront built from node and mysql. Here's how to use it: 

# Configure Your Environment! 
add your mysql server information to a .env file like so:
 - set APP_ENV to your file name
 - set DB_HOST to your connection name
 - set DB_PASS to your password (it's a secret!)
 - set DB_PORT to the port you'd like to communicate with your server over. 
 - set DB_NAME to bamazon

# Configure your database
- copy bamazon.sql into your favorite mysql server client, and run the query within. This will create the store's necessary tables and populate them with items for sale. 

# Customer Application
Here's how to buy things from my store:

0. run 'node bamazonCustomer.js' in your terminal.

1. Enter the ID of whatever product you'd like to purchase. You don't know what you're buying until you enter a number, but we'll tell you what you're buying before you finalize your order. It's more fun this way. 

2. Select the quantity of items you would like to purchase. 

3. Finalize your purchase. Upon finalization, you will be notified of our remaining stock (should you want to buy more of whatever you just bought).

# Manager Application
Here's how to run my store: 

0. run 'node bamazonManager.js' 

1. Follow the prompts on screen to learn about what items are in stock, see what items are running low, order additional stock for items, and order new items to sell. 


# (>^.^)> Please Enjoy! <(^.^<)


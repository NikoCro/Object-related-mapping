# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## TASK

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

My task was to build the back end for an e-commerce site by modifying starter code. in this challenge we used working Express.js API to use Sequelize to interact with a MySQL database.

## ACCEPTANCE CRITERIA

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file then I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands then a development database is created and is seeded with test data
WHEN I enter the command to invoke the application then my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags then the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia then I am able to successfully create, update, and delete data in my database



### ASSOCIATIONS

We had to execute association methods on Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.


## EXTRA

In Insomnia on the left side, i created short cuts for GET, POST, PUT and DELETE routes for each model so it would be easier to execute them wthout repeating the commands over and over. 

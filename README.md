# SmitheringAPI 🔨
API created with educational purpose.
Using Typescript, Mysql, prisma and Express·


# Summary 📖

- [Requirements](#requires)
- [How does this project work?](#general-explanations-ℹ️)
  - [Project Structure](#structure)
  - [Technologies](#techs)
  - [Routes](#routes)
- [Running this project](#running)
  - [First step](#first)
  - [Manually](#manually)
  - [Docker - Recommended](#docker)

---


<h1 id="requires">
  Requirements ☑️
</h1>
  
### To run the program without problems, you need this programs in your machine:

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);
- [Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git);
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [Yarn](https://yarnpkg.com/getting-started/install);
- [Mysql](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install-linux-quick.html);
- [Docker - Optional](https://docs.docker.com/get-docker/);

---
<br>

# General Explanations ℹ️


<p>
Based on the routine of a blacksmith in the Middle Ages (perhaps from Arthurian times), and how he took care of his stock and customer orders, I created this API that manages the business.
</p>


<br>

<p>
This API is developed in the REST model, and uses the MySQL database for data registration. The API has some routes. You can access them in your favorite browser or HTTP client.
</p>

<br>

<h3 id="structure">
The file structure used is the MSC:
</h3>

- Model: Responsible for interacting with the Database.
- Service: Responsible for organizing, adapting, cleaning and verifying the authenticity and validity of the data.
- Controller: Responsible for HTTP requests, being the API layer closest to the client.



<h3 id="techs">
The technologies that the project uses
</h3>

- Typescript
- Node.js
- Express
- Prisma
- JWT
- Mysql
- Joi dev

<br>

<details close id="routes">
  <summary>
    Disponible routes 🏳️
  </summary>
  
  <h5>Attention!</h5>

If this project is running on your machine, the routes will be exactly like this. If not, adapt the route by changing your domain, port or whatever is necessary.

- Default Route - GET - http://localhost:3000/

 This route is only available for quick reference out of production. Return a list of products.

---

- CreateNewUser Route - POST - http://localhost:3000/users

  Used to register new user.

```
{
  "username": "Ozan",
  "classe": "Human Archer",
  "level": 10,
  "password": "Sorrow and borrow"
}
```
  
---
  
- Login Route - POST - http://localhost:3000/login
  
  Used to log-in your account. If you used the seed disponible in this project, you can login with account:
  
 ```
 {
   "password": "whyAreYouRunning",
   "username": "default_admin"
 }
 ```
  
  
---

- SetProduct Route - POST - http://localhost:3000/products

  You must be logged in to access and interact with your products. Return a new Token.

```
{
    "name": "Phonsy Knife",
    "amount": "3",
    "url": "invalidURL.com",
    "price": "12 GC"
}
```

---

- GetAllProductsRoute - GET - http://localhost:3000/products

  You must be logged in to see and set new products. Just log-in and use your generated token.8

---

- SetNewOrder - POST - http://localhost:3000/orders

  You must be logged in to see and set new products. Just log-in and use your generated token. In this case, the product id is inserted (like the exemple below).

```
{
    "products": [1]
}
```

---

- GetAllOrders - GET - http://localhost:3000/orders

  Search all the products you've ever ordered. As it is a relational database, all information will be automatically extracted from other tables.
  Login here is necessary.

---
  
  In this route, just inform the order id in the URL. Return an order if it exists.
  
- GetOrderById - GET - http://localhost:3000/orders/"idNumberHere"


<br>


</details>



<h3 id="running">
To run this code, you have two options:
</h3>


<p id="first">
  But first, you need to create your environment variables:
</p>

  If you are inside project directory (You can create manually too):
 
  ```
  touch .env
  ```
  
  Now, you need this variables:
  
  - MYSQL_HOST
  - MYSQL_USER
  - MYSQL_PASSWORD
  
  Put your Mysql credentials here! Like this:
  
  ```
  MYSQL_HOST=database
  MYSQL_USER=root
  MYSQL_PASSWORD=manupass
  DATABASE_URL="mysql://root:manupass@database:3306/Trybesmith"
  ```
  
<br>

<details close>
  <summary id="manually">Manually ✋</summary>
 
  <br>
  
  (That command create a new directory for you, and move to inside it).
  
  ```
  mkdir smitheringApi && cd smitheringApi
  ```

  ---

  (That command as will clone this project to you).
  
  ```
  git clone git@github.com:manupilation/SmitheringAPI.git
  ```
  
  ```
  cd SmitheringAPI
  ```

  ---
  
  ```
  $ install
  ```
  
  (Using npm or yarn in place of "$", run it to install all dependencies)

  ---
  
  If you want a faster initialization, whose database will initialize populated (seed), you can choose the following command:

  ```
  npm run db:start
  ```
  
  ```
  yarn db:start
  ```
  
  (Using npm or yarn)

  ---
  
  But if you choose to initialize with an empty DB, use the command:
  
  ```
  $ start
  ```
  
  
</details>

<br>

<details close>
  <summary id="docker">Docker 🐋</summary>
 
  <br>
  
  
  With docker, everything becomes simpler. If you use docker compose, run the docker-compose.yml file in the main directory.

  Docker compose will automatically generate a MySQL image and run the API on port 3000.
</details>

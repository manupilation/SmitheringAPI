# SmitheringAPI
API created with educational purpose.
Using Typescript, Mysql, prisma and Express·


# Summary

- [Stack](#smitheringapi)
- [Requirements](#requirements)
- [How does this project work?](#general-explanations)
  - [Project Structure](#structure)
  - [Technologies](#techs)
- [Running this project](#running-this-project)

---



# Requirements

### To run the program without problems, you need this programs in your machine:

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);
- [Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git);
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [Yarn](https://yarnpkg.com/getting-started/install);
- [Mysql](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install-linux-quick.html);
- [Docker - Optional](https://docs.docker.com/get-docker/);

---
<br>

# General Explanations


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

### To run the program on your machine, run the following commands in order:

```
git clone git@github.com:manupilation/SmitheringAPI.git
```

  (That command as will clone this project to you).

---

- $ install

  (Run it on the cloned directory. That command will install all dependencies for you).

---

- npx prisma migrate dev / yarn migrate dev / $ db:reset

  (Choose the better for you. That command will be to create all database and turn it ready for you).

###### Now, this API is ready to you. We have some endpoints to you (explore it!)

---

![](ga_cog.png)

# Project #2: Building A Full-Stack Application: 
## "Feel Good Moments App" by Tony Cabezon

## [Heroku App Link](https://zen-project-2.herokuapp.com/)
## [Github Code Link](https://github.com/TCabz/zen-project-2.git)
## [Trello Board Link](https://trello.com/b/55JBkYNP)
## [Wireframe Draw.io Link](https://drive.google.com/file/d/1Vxxl6DK52QaL1sz5T9g9vin89iCtUZCA/view?usp=sharing)

### Technical Requirements

> **Problem:** In the current state we are all in, my thought was to bring a smile to as many people as I can possibly reach through this app. <br> >**General App Idea/Purpose:** An app that allows me to catalogue all the users "Feel Good Moments". <br> >**Who Would Use It:** Any looking to have a smiling moment or to feel happy for someone else.

### MVP - Minimum Viable Product

- A working full-stack application, using **Node.js, Mongoose, Express and EJS**
- Adhered to the **MVC** file structure: Models, Views, Controllers
- At least one model with all 7 **RESTful routes** and full **CRUD**.
- A git repository.
- At **least one** Github commit per day.
- **Deployed online** and accessible to the public via **Heroku**
- Technologies used: 
- Approach taken:
- Unsolved problems:
- User stories:
- Notes to myself: 
- **link to your hosted working app**: 
- **sign up/log in** functionality, with **encrypted passwords & an authorization flow**

### &#x1F535; Stretch Goals:
- Add additional relationships (models can be related in a one-to-many relationship, for example)
  - [Optional notes on having two models](../../unit_2/w11d3/instructor_notes/multiple_models)
- Use a Layout/AppLayout component
- Include portfolio-quality styling
- Use a CSS framework like Skeleton, Bootstrap, Materialize, Foundation, etc.
- Incorporate a 3rd Party API like **Google Maps**
- Inside Your `README.md`:
- Include User Stories
- Include **wireframes** that you designed during the planning process



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

# Mongo - Express - Express React Views Template

## USING THIS TEMPLATE:

- Make sure to run npm install

- Environment Files are in a .env, create with your env variables. Here are some needed variables for this template to get you started. You can rename template.env into .env to get started.

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/
DB_NAME=myDatabase
SECRET=cheese
```

## Commands

`npm run dev` run dev server

`npm run start` run in production more

- For production you should add a store property to sessions that'll store the session in redis or mongo. See the express-session documentation to learn more.

- session auth built in, the user model is in **models/auth** and the auth routes are in **controllers/auth**

- If you want the connect.session() warning to go away you can configure a mongo session store using the following library => https://www.npmjs.com/package/connect-mongo

MAKE SURE TO JOIN THE SLACK AND DISCORD COMMUNITIES AT DEVNURSERY.COM

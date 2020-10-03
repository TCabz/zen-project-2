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

- A working full-stack application, using **Node.js, Mongoose, Express and JSX**
- Adhered to the **MVC** file structure: Models, Views, Controllers
- At least one model with all 7 **RESTful routes** and full **CRUD**.
- A git repository.
- At **least one** Github commit per day.
- **Deployed online** and accessible to the public via **Heroku**
- Technologies used: Node, CSS, Mongoose, Express, JSX, Prayers
- Approach taken: Provide an MVP working app, while working long hours @ my day job.
- Unsolved problems: Unable to figure out why multiple entries for a user is not being shown. My typing is horrendous, therefore I spent days fixing typos. I need to manage coding time better. Coding late night into the early morning is not helping.
- User stories: As it seems our social & personal lives are always bombarded with bad news at every turn, I thought it would bring a smile to for people to share the times that made them happy (Feel Good Moments). Eventually, want to have this site list all the Feel Good Moments that are entered, where other users can send a smile through a smiley icon button & leave a comment. 
- Notes to myself: 
- **linked to a hosted working app**: 
- **sign up/log in** functionality, with **encrypted passwords & an authorization flow**

### &#x1F535; Stretch Goals:
- Like button
- Rank Feel Good Moments by Most Liked
- Adding a comment feature where other users can leave a comment.
- Provide the user the ability to upload pics, videos, gifs.
- README.md has the following items:
- User Story
- Wireframe link to Draw.Io

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

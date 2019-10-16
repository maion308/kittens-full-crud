## Kittens Full CRUD!

![](https://media.giphy.com/media/102mqDgAb4Kfug/giphy.gif)

### Introduction
In this lab you will create a full-stack CRUD app in which the user can create, read, and update, and destroy itty-bitty kittens.

### Set up
- clone down this repo
- run `npm init -y` 
- Set up your database using sequelize-cli
  - You should have one model called Kitten and it should have a name, age, and breed
  - Add a few kittens to your db for testing purposes
- set up your express server
- set up express router
- run `create-react-app client` to create your front-end React app
- `cd` into client and then `npm start` -- this will start your front end server on another port


## CRUD 

### Create
- Add a `CREATE` route handler.
- Test `CREATE` in Postman
- Also verify that the `INDEX` route returns a non-empty array after creating a few kittens

### Show
- Add a `SHOW` route handler. `SHOW` is a type of route that only shows one item, rather than all (`INDEX`)
- The `SHOW` route should be for ID (`id/:id`);
- Verify that `SHOW` works with Postman

### Delete
- Add a `DELETE` route handler
- Note how adding the same RESTful action is remarkably similar for each resource. Appreciate this symmetry.

### Update
- Now add an `UPDATE` route handler.
- You know the drill! Check it in Postman!


### THE FRONT END
Now that we have all our express routes set up and working, we can connect them to our front end so that users can easily interact with our app.

- Think about how you want to structure this app. What are your components? Where are you creating your functions? What is held in state? You've done LOTS of updating in React, so reference old homeworks and projects if you need a refresher! The main elements you need are:
  - A form rendered on the page with name, age, and breed to create a new resource.
  - Functions that handle the form change and form submit. the form submit can either use axios call functions from an `api-helper.js` file or directly in the components
  - In state: a formData object; a kittens array
  - Have and 'edit' and 'delete' buttons on each rendered item

### BONUS

![](https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif)

- Now do the same thing but for Doggos! Everything should be quite similar, but think about how you want to implement this extra resource in your React app.



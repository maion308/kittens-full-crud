'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('Kittens', [
        {
        name: 'Kali Ko',
        age: 2,
        breed: "Apple"
        },
        {
        name: "Me Ow",
        age: 4,
        breed: "Kittean"  
        },
        {
        name: "Billy Claws",
        age: 3,
        breed: "C Sharpe"
        },
        {
        name: "Albert Meowstein",
        age: 7,
        breed: "Squared MC"
        },
        {
        name: "Sylvester Scripts",
        age: 6,
        breed: "Typescript"
        },
        {
        name: "Kakoii Neko",
        age: 1,
        breed: "Ruby"
        },
        {
        name: "Rowr beStow",
        age: 5,
        breed: "cameCase"
        },
        {
        name: "Scratchy Springfield",
        age: 9,
        breed: "Car Toon"
        }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Kittens', null, {});
    
  }
};

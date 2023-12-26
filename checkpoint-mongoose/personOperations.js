// personOperations.js

const Person = require('./personModel');

async function saveNewPerson() {
  try {
    const newPerson = new Person({
      name: 'John',
      age: 25,
      favoriteFoods: ['Pizza', 'Pasta'],
    });

    const savedPerson = await newPerson.save();
    console.log('Person saved:', savedPerson);
    // Perform actions after saving the person
  } catch (err) {
    console.error('Error saving person:', err);
  }
}

async function saveArrayOfPeople() {
  try {
    const arrayOfPeople = [
      { name: 'Alice', age: 30, favoriteFoods: ['Sushi', 'Burgers'] },
      { name: 'Bob', age: 28, favoriteFoods: ['Tacos', 'Ice Cream'] },
      // Add more people as needed
    ];

    const createdPeople = await Person.create(arrayOfPeople);
    console.log('People created:', createdPeople);
  } catch (err) {
    console.error('Error creating people:', err);
  }
}

module.exports = { saveNewPerson, saveArrayOfPeople };

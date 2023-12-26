// app.js

const db = require('./Database');
const { saveNewPerson, saveArrayOfPeople } = require('./personOperations');

// Appeler les fonctions pour sauvegarder les données
saveNewPerson(); // Enregistrer une nouvelle personne
saveArrayOfPeople(); // Enregistrer un tableau de personnes




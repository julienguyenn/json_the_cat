const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const findBreed = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(findBreed, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback('Cat breed cannot be found', null);
      } else {
        const firstEntry = data[0].description.trim();
        callback(error, firstEntry);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
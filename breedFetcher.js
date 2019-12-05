const request = require('request');
const breed = process.argv[2];

const findBreed = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(findBreed, (error, response, body) => {
  if (error) {
    throw error;
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('Cat breed cannot be found');
    } else {

      const firstEntry = data[0].description;
      console.log(firstEntry);
    }
  }
});
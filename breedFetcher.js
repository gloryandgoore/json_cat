const request = require('request');
const args = process.argv.slice(2)

const fs = require('fs');




request(`https://api.thecatapi.com/v1/breedgs/search?q=${args}`, (error, response, body) => {

if (error) {
  return error;
  console.log('Invalid Request')
} else {
  console.log(response && response.statusCode);
}
  const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);
//console.log(data[0].description)


  if ( data.length === 0 ) {
    console.log("The Breed doesn't exist");
  } else {
    console.log(data[0].description);
  }


});
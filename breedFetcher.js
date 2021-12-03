const request = require("request");


const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (!error) {
      const data = JSON.parse(body);
      if (body.length <= 2 || breedName !== data[0].name) {
        callback(breedName, null);
      } else {
        callback(null, data[0].description);
      }
    } else {
      callback(error);
    }
  });
};



module.exports = { fetchBreedDescription };

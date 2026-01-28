const axios = require('axios'); // legacy way

axios
  .get("https://dog.ceo/api/breeds/image/random"
)
  .then(function (response) {
    console.log(response.data);
    console.log("Success")
  })
  .catch(function (error) {
    console.log(error);
    console.log("Error")
  })
  .finally(function () {
  });

const axios = require('axios');

// This will make the axios call to gitHub
function getDataFromGitHub(req, res, next){
  try {
    // This extracts all the users passed into the req.body and makes axios calls 
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });

    // Promise.all resolves all the promeses in the results arr and then returns them
    Promise.all(results).then((data) => {
      let out = data.map(r => ({ name: r.data.name, bio: r.data.bio }));
      req.params.out = out; /* the results are then appended to the req obj */
      next()
    }) 
 
  } catch (err) {
    // But if there is an error it will be caught and sent to error handler
    next(err);
  }
}

module.exports = {getDataFromGitHub};
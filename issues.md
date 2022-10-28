# Broken App Issues
1. The axios calls were being made but when the respose was going to be sent back to the user the promises still had not been resolved. I resolved this by using Promise.all().
2. I also created a sperate middleware.js file and created a middleware that will handle all of the axios calls to gitHub and appened them to the req.params object. 
3. I also added error handling at the end of the app.js file to gracefully handle errors. 
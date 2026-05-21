// Import express
const express = require('express');
// Create app
const app = express();
app.use(express.json());

/*
1. Registration API
Method: POST
*/
app.post('/register', (req, res) => {
    res.send('User Registered Successfully');
});

/*
2. Login API
Method: POST
*/
app.post('/login', (req, res) => {
    res.send('User Logged In Successfully');
});

/*
3. Search API
Method: GET
*/
app.get('/search', (req, res) => {
    res.send('Search Results Displayed');
});

/*
4. Profile Update API
Method: PUT
*/
app.put('/update-profile', (req, res) => {
    res.send('Profile Updated Successfully');
});

/*
5. Delete User API
Method: DELETE
*/
app.delete('/delete-user', (req, res) => {
    res.send('User Deleted Successfully');
});

// Start server
app.listen(5000, () => {
    console.log('Express Server Started at Port 5000');
});
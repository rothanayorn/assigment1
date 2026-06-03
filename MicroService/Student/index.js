// Import express
const express = require('express');
// Create app
const app = express();
app.use(express.json());

/*
1. Student Login
Method: POST
*/
app.post('/studentLogin', (req, res) => {
    res.send(' Inside Student Log in ');
});


/*
2. View Assignment
Method: GET
*/
app.get('/viewAssignment', (req, res) => {
    res.send(' Inside stduent view Assignment');
});

/*
3. Profile Update API
Method: PUT
*/
app.put('/update-profile', (req, res) => {
    res.send('Inside Student Profile Updated');
});

// Start server
app.listen(5002, () => {
    console.log('Express Server Started at Port 5002');
});
// Import express
const express = require('express');
// Create app
const app = express();
app.use(express.json());

/*
1. Add Assignment
Method: POST
*/
app.post('/addAssignment', (req, res) => {
    res.send(' Inside Teacher Assignmnet added');
});

/*
3. Search student
Method: GET
*/
app.get('/searchStudent', (req, res) => {
    res.send(' Inside Teacher Search Results');
});


/*
5. Remove assignment 
Method: DELETE
*/
app.delete('/removeAssignment', (req, res) => {
    res.send(' Inside Teacher Assignment Deleted');
});

// Start server
app.listen(5001, () => {
    console.log('Express Server Started at Port 5001');
});
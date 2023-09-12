
const express = require('express');
const app = express();
const port = 3000;


app.get('/raceJeffGordon', (req, res) => {
    const responseData = {
        message: "You're racing with Jeff Gordon!",
        
    };
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${3000}`);
});
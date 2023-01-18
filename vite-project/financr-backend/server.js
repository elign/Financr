const express = require('express');
const cors = require('cors');
const db = require('./config/db')
const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());


db.connect()

app.post('/api/create', (req, res) => {
    const amount = req.body.amount;
    const specification = req.body.specification;
    
    db.query(`INSERT INTO received(amount, specification) VALUES (?,?);`,[amount, specification], (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log(result)
    })
    
    res.send("Message Received")

})

app.get("/api/create", (req, res) => {
    res.json({ message: "ok" });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})



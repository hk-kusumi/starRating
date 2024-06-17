const express = require('express')
const mongoose =require('mongoose')
const cors= require('cors')
const rateModel = require('./Models/rates')

const app = express()
const corsOptions = {
    origin: 'http://localhost:5173',  // The frontend origin you want to allow
    credentials: true  // Allow credentials
  };
app.use(cors(corsOptions))
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/starRating')
.then(() => {
    console.log("Connected to MongoDB");
  }).catch(err => {
    console.error("Failed to connect to MongoDB", err);
  })

// app.post('/api/v1/rate' , (req,res )=>{
//     const rate = req.body.task;
//     rateModel.create({
//         demoName: demoName,
//         rate :rate
//     }).then(result =>res.json(result))
//     .catch(err=> res.json(err))
// })

app.post('/api/v1/rate', async(req, res) => {
    try{
    const { demoName, rate } = req.body;
    if (!demoName || !rate) {
        return res.status(400).json({ error: 'demoName and rating are required' });
      }
    
      const newRate = await rateModel.create({ demoName: demoName, rate: rate });
      res.json(newRate);
    //   .then(result => res.json(result))
    }
      catch(error) {
        // (err => res.status(500).json({ error: err.message }))
        console.error('Error creating rate:', err);
    res.status(500).json({ error: 'An internal server error occurred' });
    }
  });

app.listen(3001, () => {
    console.log("Backend Running")
})

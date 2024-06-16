const express = require('express')
const mongoose =require('mongoose')
const cors= require('cors')
const rateModel = require('./Models/rates')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/starRating')

app.post('/rate' , (req,res )=>{
    const rate = req.body.task;
    rateModel.create({
        demoName: demoName,
        rate :rate
    }).then(result =>res.json(result))
    .catch(err=> res.json(err))
})

app.listen(3001, () => {
    console.log("Backend Running")
})

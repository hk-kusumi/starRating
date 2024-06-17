const mongoose = require('mongoose')

const rateSchema= new mongoose.Schema({
    demoName: {
        type: String,
        required: true
      },
      rate: {
        type: Number,
        required: true
      }
})

const rateModel= mongoose.model('starrate' , rateSchema )
module.exports= rateModel
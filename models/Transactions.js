//jshint esversion:6
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  text:{
    type:String,
    trim:true,
    required:[true,"Please add some text"]
  },
  amount:{
    type:Number,
    required:[true,"Please add a positive or negative number"]
  }
});

module.exports = mongoose.model("Transaction",TransactionSchema);

const mongoose = require('mongoose')
const validator = require('validator')

const blckSchema = new mongoose.Schema({
    index:{
         type:String,
    },
    firstName:{
        type:String,
        // required:true
    },
    adharNumber:{
        type:String,
        // required:true
    },
    ppriviousHash:{
        type:String,
        // required:true
    },
    currentHash:{
        type:String,
        // required:true
    }
})


module.exports = mongoose.model("blockChainSchema", blckSchema);

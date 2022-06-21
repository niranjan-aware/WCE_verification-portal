const mongoose = require('mongoose')
const validator = require('validator')


const ContactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  middleName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('password can not contain password')
      }
    }
  },
  
  rollNumber:{
    type:String,
    required:true
  },

  adharNumber:{
    type:Number,
    required:true,
    minlength:12
  },

  // passingYear:{
  //   type:Number
  // },
  // var postSchema = new Schema({
  //   imagePost: {
  //     images: [{
  //        url: String,
  //        text: String
  //     }]
  // }),

  avilableCertificates:{
    type:String,
    required:true
  },
  grade:{
    type:String,
    required:true
  },
  year_of_passing:{
    type:Number,
    required:true
  }
  





});
// :[{
//   grade:{
//     type:String,
//     required:true
//   },
//   year_of_passing:{
//     type:Number,
//     required:true
//   }
// }]
// }]

module.exports = mongoose.model("ContactData", ContactSchema);
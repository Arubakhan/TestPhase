const mongoose = require("mongoose");
const Joi = require("joi");

const recordSchema = new mongoose.Schema({
  cnic: {
    type: String,
    min: 13,
    max: 13,
    required: true
  },
  firstName: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  },
  address: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  city: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  },
  program: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  },
  gender: {
    type: String,

    required: true,
    match: /^male$|^female$/
  },
  phone: {
    type: String,

    required: true,
    match: /^[0-9*]{11}$/
  },
  email: {
    type: String,
    minlength: 3,
    maxlength: 255,
    unique: true,
    required: true
  },
  dob: {
    type: Date,
    default: Date.now
  }
});
const Record = mongoose.model("Record", recordSchema);

const ValidateRecords = record => {
  const pattern = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;

  const schema = {
    cnic: Joi.string()
      .regex(pattern)

      .required(),
    firstName: Joi.string()
      .min(3)
      .max(30)
      .required(),
    lastName: Joi.string()
      .min(3)
      .max(30)
      .required(),
    address: Joi.string()
      .min(3)
      .max(100)
      .required(),
    city: Joi.string()
      .min(3)
      .max(30)
      .required(),
    program: Joi.string()
      .min(3)
      .max(30)
      .required(),
    gender: Joi.string()
      .regex(/^male$|^female$/)

      .required(),
    phone: Joi.string()
      .regex(/^[0-9*]{11}$/)

      .required(),
    email: Joi.string()
      .min(3)
      .max(30)
      .email()
      .required(),
    dob: Joi.date()
  };
  return Joi.validate(record, schema);
};

module.exports.Record = Record;
module.exports.Validate = ValidateRecords;

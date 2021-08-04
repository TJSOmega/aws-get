'use strict';
const dynamoose = require('dynamoose')

const friendSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
  location: String
})

module.exports = dynamoose.model('friends', friendSchema)
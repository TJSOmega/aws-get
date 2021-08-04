'use strict';

const friendsModel = require('./schema.js');
const uuid = require('uuid').v4;

exports.handler = async (event) => {
  console.log(event);

  try {
    let data

    const id = event.pathParameters.id;

    console.log('PATH PARAMS', event.pathParameters)

    if (id) {
      const list = await friendsModel.query('id').eq(id).exec();
      data = list[0];
    } else {
      const list = await friendsModel.scan().exec()
      data = JSON.stringify(list)
    }

    return {
      statusCode: 200,
      body: data
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    }
  }
}
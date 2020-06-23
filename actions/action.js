"use strict";
let datafire = require('datafire');

let apache_qakka = require('@datafire/apache_qakka').actions;
module.exports = new datafire.Action({
  inputs: [{
    type: "string",
    title: "input1"
  }],
  handler: async (input, context) => {
    let apiResponse = await Promise.all([].map(item => apache_qakka.sendMessageBinary({
      queueName: "",
      contentType: "",
      body: [],
    }, context)));
    return apiResponse;
  },
});

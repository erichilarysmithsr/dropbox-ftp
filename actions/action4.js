"use strict";
let datafire = require('datafire');

let azure_mysql = require('@datafire/azure_mysql').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let database = await Promise.all([].map(item => azure_mysql.Databases_Get({
      'api-version': "",
      subscriptionId: "",
      resourceGroupName: "",
      serverName: "",
      databaseName: "",
    }, context)));
    return database;
  },
});

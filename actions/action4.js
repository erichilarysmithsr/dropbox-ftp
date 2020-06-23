"use strict";
let datafire = require('datafire');

let dropbox_content = require('@datafire/dropbox_content').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => dropbox_content.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});

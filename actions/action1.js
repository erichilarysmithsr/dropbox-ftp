"use strict";
let datafire = require('datafire');

let adobe_aem = require('@datafire/adobe_aem').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => adobe_aem.postConfigApacheFelixJettyBasedHttpService({
      runmode: "",
    }, context)));
    return result;
  },
});

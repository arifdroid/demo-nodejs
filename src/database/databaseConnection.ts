// import models from "./models";
const models = require('./models');

let cached: any;

/**
 * Initializes the connection to the Database
 */
export function databaseInit() {
    // if (cached) {
    //   return cached;
    // }

    // console.log('models is ->', models);
  
    return models;
  }

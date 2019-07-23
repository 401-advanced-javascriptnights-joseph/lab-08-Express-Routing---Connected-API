'use strict';
const Model = require('../server.js');
const schema = require('./products-schema.js');
// How can we connect ourselves to the mongo interface?
// What do we export?
class Product extends Model{
  constructor(){
    super();
    this.schema = schema;
  }
}
module.exports = Product;

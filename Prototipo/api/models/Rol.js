/**
 * Rol.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection:'Mysqladapter',
  attributes: {

    rolId:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true,
    },
    cliente_rolId:{
      collection: 'Cliente',
      via: 'clienteRol'
    },
    rolNombre:{
      type:"string"
    },
    rolDescripcion:{
      type:"string"
    },
    createdAt: {
      type: 'string',
      columnType: 'datetime',
      autoCreatedAt: true, },

    updatedAt: {
      type: 'string',
      columnType: 'datetime',
      autoUpdatedAt: true, },

  }
};


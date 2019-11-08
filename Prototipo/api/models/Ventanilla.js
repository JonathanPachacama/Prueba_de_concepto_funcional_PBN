/**
 * Ventanilla.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection:'Mysqladapter',
  attributes: {

    ventanillaId:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true,
    },
    cliente_ventanillaId:{
      collection: 'Cliente',
      via: 'clienteVentanilla'
    },
    ventanillaNumero:{
      type:'string',
    },
    ventanillaEstado:{
      type:'string',
      enum: ['activo', 'inactivo'],
      defaultsTo:'inactivo',
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


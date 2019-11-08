/**
 * Turno.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection:'Mysqladapter',
  attributes: {

    turnoId:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true,
    },
    cliente_turnoId:{
      collection: 'Cliente',
      via: 'clienteTurno'
    },

    turnoEstadoCC:{
      type:'string',
      enum: ['activo', 'inactivo'],
      defaultsTo:'inactivo',
    },

    turnoEstadoCA:{
      type:'string',
      enum: ['activo', 'inactivo'],
      defaultsTo:'inactivo',
    },
    turnoEstadoP:{
      type:'string',
      enum: ['activo', 'inactivo'],
      defaultsTo:'inactivo',
    },
    turnoEstadoI:{
      type:'string',
      enum: ['activo', 'inactivo'],
      defaultsTo:'inactivo',
    },

    turnoEstadoIM:{
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


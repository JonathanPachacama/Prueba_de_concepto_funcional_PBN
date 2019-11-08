/**
 * Cliente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection:'Mysqladapter',
  attributes: {
    clienteId:{
      type:"integer",
      autoIncrement: true,
      primaryKey:true
    },
    clienteRol:{
      model:"Rol",
      required:true
    },
    clienteCorreo:{
      type:"email",
      unique: true,
    },
    clienteNombre:{
      type:"string",
    },
    clienteApellido:{
      type:"string",
    },
    clienteDireccion:{
      type:"string",
    },
    clienteCi:{
      type:"string",
    },
    clienteTurno:{
      type:"string",
    },
    clienteEstado:{
      type:'string',
      enum: ['arracar', 'terminar'],
      defaultsTo:'arracar',
      required: true
    },
    clienteConfirmacion:{
      type:'string',
      enum: ['ir', 'posponer'],
      defaultsTo:'ir',
      required: true
    },

    clienteTiempo:{
      type:"string",
    },
    createdAt: {
      type: 'string',
      columnType: 'datetime',
      autoCreatedAt: true,
      columnName: 'user_created'
    },
    updatedAt: {
      type: 'string',
      columnType: 'datetime',
      autoUpdatedAt: true,
      columnName: 'user_updated'
    }

  }
};


/**
 * ClienteController
 *
 * @description :: Server-side logic for managing Clientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

  index:function(req,res){
    return res.view('turnos',{
    })
  },

  accederTurnosCliente:function(req,res){

    let parametros = req.allParams();
    sails.log.info("Parametros",parametros);
    Cliente
      .find()
      .exec((err,turnos)=>{
        if(err) return res.negotiate(err);
        sails.log.info("cliente informacion",turnos);
        return res.view('turnos',{
          cliente:turnos,
        })
      })
  },

  escogerTurnosCliente:function(req,res){

    return res.view('touchscreen',{
    })
  },
}

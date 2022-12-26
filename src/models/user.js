const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fechaAltaProducto: {
    type: String,
    required: true
  },



nombreProducto: {
    type: String,
    required: true
  },


 
descripcionProducto: {
    type: String,
    required: true
  }, 



marcaProducto: {
    type: String,
    required: true
  }, 



modeloProducto: {
    type: String,
    required: true
  }, 



categoriaProducto: {
    type: String,
    required: true
  }, 



precioProducto: {
    type: String,
    required: true
  }, 



nombreVendedor: {
    type: String,
    required: true
  }, 



estadoProducto: {
    type: String,
    required: true
  },



imagenProducto: {
    type: String,
    required: true
  },



stockDisponible: {
    type: String,
    required: true
  } 


});


module.exports = mongoose.model('User', userSchema);

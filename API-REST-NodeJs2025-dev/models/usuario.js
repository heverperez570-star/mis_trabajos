'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
Usuario.belongsToMany(models.Rol, {
  through: models.Usuario_Rol,
  foreignKey: 'usuario_id',
  otherKey: 'rol_id',
  as: 'roles',
});

  Rol.belongsToMany(models.Usuario, {
  through: models.Usuario_Rol,
  foreignKey: 'rol_id',
  otherKey: 'usuario_id',
  as: 'usuarios',
});


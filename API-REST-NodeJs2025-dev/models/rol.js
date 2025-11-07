'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      // Relación: Un rol puede estar asignado a muchos usuarios (vía Usuario_Rol)
      Rol.hasMany(models.Usuario_Rol, {
        foreignKey: 'rol_id',
        as: 'usuariosRoles',
      });
    }
  }

  Rol.init(
    {
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      descripcion: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Rol',
      tableName: 'Roles',
      timestamps: true,
    }
  );

  return Rol;
};

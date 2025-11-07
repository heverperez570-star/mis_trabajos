'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario_Rol extends Model {
    static associate(models) {
      // Un Usuario_Rol pertenece a un Usuario
      Usuario_Rol.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id',
        as: 'usuario',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      // Un Usuario_Rol pertenece a un Rol
      Usuario_Rol.belongsTo(models.Rol, {
        foreignKey: 'rol_id',
        as: 'rol',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  Usuario_Rol.init(
    {
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Usuario_Rol',
      tableName: 'Usuarios_Roles',
      timestamps: true,
    }
  );

  return Usuario_Rol;
};

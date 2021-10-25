module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    quantidade: DataTypes.INTEGER
  }, {
    timestamps: false,
    freezeTableName: true
  })

  return Product
}
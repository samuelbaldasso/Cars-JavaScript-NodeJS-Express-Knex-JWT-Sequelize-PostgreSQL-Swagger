const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres:EBbeGAdF*34bbDD3DfaE11bfDfB-6g5-@monorail.proxy.rlwy.net:21017/railway');

class Carro extends Model {}

Carro.init({
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    preco: DataTypes.DECIMAL(10, 2),
    descricao: DataTypes.TEXT,
    imagem_url: DataTypes.STRING,
}, { sequelize, modelName: 'carros', timestamps: false});

Carro.sync()
    .then(() => {
        console.log('Tabela Carro criada com sucesso.');
    });

module.exports = Carro;

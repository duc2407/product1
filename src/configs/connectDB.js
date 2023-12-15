const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('producttest', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connect success');
    }
    catch(error){
        console.error('error: ', error);
    }
}
module.exports = connectDB;
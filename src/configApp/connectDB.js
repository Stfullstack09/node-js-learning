const Sequelize = require('sequelize')

const db = new Sequelize('node-js-blog','root', null,{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const connectDB = async () => {

    try {
        await db.authenticate()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    
}

module.exports = connectDB

/* 

 => dev biet : minh ket noi voi db thanh cong: Test connection => them sua xoa dl no lien quan

*/
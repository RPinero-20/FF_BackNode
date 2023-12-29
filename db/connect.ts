import { Sequelize } from 'sequelize-typescript';

// const db = new Sequelize('sql5673434', 'sql5673434', 'LpLS6lrBMj', {
//     host: 'sql5.freesqldatabase.com',
//     dialect: 'mysql',
//     logging: false,
// });


const db = new Sequelize('f_ferlestore', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

export async function conectToDB() {
    try {
        await db.authenticate();
        console.log('DB is conected');
    } catch (error) {
        throw new Error(error as string);
    }
}

export default db;

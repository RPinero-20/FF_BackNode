import { Sequelize } from 'sequelize-typescript';


// import pg from 'pg';

// const db = new pg.Pool({
// 	connectionString: process.env.DATABASE_URL,
//         //ssl: true
// })

// const db = new Sequelize('f_ferlestore', 'root', '', {
//     host: 'postgres://root:Xvi7nT51Mx8a6ODf0nesRdODtHkB1kXu@dpg-cm7dtdi1hbls73aa4ue0-a.oregon-postgres.render.com/f_ferlestore',
//     dialect: 'postgres',
//     //logging: false,
// });

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './database/f_ferlestore.db'
});

// const db = new Sequelize('f_ferlestore', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     // logging:false,
// });


export async function conectToDB() {
    try {
        await db.authenticate();
        console.log('DB is conected OK!!!');
    } catch (error) {
        throw new Error(error as string);
    }
}

export default db;
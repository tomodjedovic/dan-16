import { Sequelize } from "sequelize-typescript";
import User from "../models/user.model";


export default async function conectDatabase(){
    try{
        const database = new Sequelize({
            database: process.env.DATABASE_NAME,
            dialect: "mysql",
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            host: process.env.DATABASE_HOST,
            port: Number( process.env.DATABASE_PORT),
            logging: false
        });
        database.addModels([User]);
        await database.sync()
        console.log("database connect successfuly")
    }catch(error) {
        console.error("unable to connect to the database",error )
    }
}
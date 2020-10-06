import { databaseInit } from "../database/databaseConnection";

export default async function databaseMiddleWare(req:any,res : any,next : any){
    try {

        const database = await databaseInit();
        // console.log('wat database ->', database)
        req.database = database;
        
    } catch (error) {

        // console.log('error', error)
        
    } finally{
        next();
    }
}
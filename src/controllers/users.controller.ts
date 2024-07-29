import { Request,Response } from "express";
import User from "../models/user.model";

export async function getUsers(req:Request,res:Response) {
    try{
        const userts = await User.findAll({})
        return res.json(userts)
    }catch(error){
        res.status(500).send("Internal server error")
    }
    
}
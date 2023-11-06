import { CANCELLED } from "dns";
import { Request,Response } from "express";
import {Users} from "../entity/Users";
import { AppDataSource } from "../data-source";
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

class AutController{
static async login(req: Request, res:Response){
    const{email,password} =req.body;
    if(!(email && password)) return res.status (400).json({message: 'Email & password required'})
    let users:Users;
    try{
        const  userRepo = AppDataSource.getRepository(Users);
        users= await userRepo.findOneOrFail({where:{email}});

    }catch(error){
        return res.status(400).json({message: 'Email not found', error});
    }
    if(!users) return res.status(400).json({message: 'Email not found'});
    if(!users.checkPassword(password)) return res.status(400).json({message: 'Password incorrect'});
    const token= jwt.sign({userId: users.id, email: users.email}, config.jwtSecret || process.env.JWT_secret,{expiresIn: '1h'});
    return res.status(200).json({message: 'Login successfully', token});
    
}

}
export default  AutController
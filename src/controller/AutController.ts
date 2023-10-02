import { CANCELLED } from "dns";
import { Request,Response } from "express";
import {User} from "../entity/User";
import { AppDataSource } from "../data-source";
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

class AutController{
static async login(req: Request, res:Response){
    try{
        const{email,password} =req.body;

        if(!(email && password)) return res.status (400).json({message: 'Email & password required'})
        let user:User;
        const  userRepo = AppDataSource.getRepository(User);
        user= await userRepo.findOneOrFail({where:{email}});
        if(!user) return res.status(400).json({message: 'Email not found'});
        if(!user.checkPassword) return res.status(400).json({message: 'Password incorrect'});
        const token= jwt.sign({userId: user.id, email: user.email}, config.jwtSecret || process.env.JWT_secret,{expiresIn: '1h'});
        return res.status(200).json({message: 'Login successfully', token});

    }catch(error){

    }
}

}
export default  AutController
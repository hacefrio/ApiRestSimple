import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {


    static async add(request: Request, response: Response, next: NextFunction) {
        const userRepository = AppDataSource.getRepository(User)
        const { firstName, lastName, age,email,password } = request.body;

        const user = Object.assign(new User(), {
            firstName,
            lastName,
            age,
            email,
            password
        })
        user.hashPassword()
        return userRepository.save(user)
    }

}
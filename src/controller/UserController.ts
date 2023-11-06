import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Users } from "../entity/Users"

export class UserController {


    static async add(request: Request, response: Response, next: NextFunction) {
        const userRepository = AppDataSource.getRepository(Users)
        const { firstName, lastName, age,email,password } = request.body;

        try{
        const user = Object.assign(new Users(), {
            firstName,
            lastName,
            age,
            email,
            password
        })
        user.hashPassword()
        return response.status(201).json(await userRepository.save(user))
        }catch(error){
            return response.status(400).json({message:error.message})
        }
    }
    
    static async get(request: Request, response: Response, next: NextFunction) {
        const userRepository = AppDataSource.getRepository(Users)
        return response.status(200).json(await userRepository.find())
    }
    // update users
    static async edit(request: Request, response: Response, next: NextFunction) {
        const userRepository = AppDataSource.getRepository(Users)
        const { id } = request.params
        const { firstName, lastName, age,password,email} = request.body
        const user = await userRepository.findOneBy({ id: id })
        if (user) {
            user.firstName = firstName || user.firstName
            user.lastName = lastName || user.lastName
            user.age = age || user.age
            user.email = email || user.email
            user.password = password || user.password
            user.hashPassword()
            const updatedUser = await userRepository.save(user)
            return response.status(200).json(updatedUser)
        }
        return response.status(404).json({ message: 'User Not Found' })
    }
    /// delete user
    static async delete(request: Request, response: Response, next: NextFunction) {
        const userRepository = AppDataSource.getRepository(Users)
        const { id } = request.params
        const user = await userRepository.findOneBy({ id: id })
        if (user) {
            await userRepository.remove(user)
            return response.status(200).json({ message: 'User deleted successfully' })
        }
        return response.status(404).json({ message: 'User Not Found' })
    }
    //get by id
    static async getById(request: Request, response: Response, next: NextFunction) {
        const userRepository = AppDataSource.getRepository(Users)
        const { id } = request.params
        const user = await userRepository.findOneBy({ id: id })
        if (user) {
            return response.status(200).json(user)
        }
        return response.status(404).json({ message: 'User Not Found' })
    }

}
import environment from 'dotenv';
import bcrypt from 'bcrypt';
import { request } from 'express';
import UserServices from '../services/user'

environment.config();

class UserController {
    static async signup(req, res) {
        // console.log("Message", req.body);
        console.log('email', req.body.email);
        const data = {
            email: req.body.email,
            password: req.body.password,
            lastName: req.body.lastName,
            firstName: req.body.firstName
        }
        const createUser = await UserServices.CreateUser(data);
        console.log("Message ", createUser );

    }
}

export default UserController ;
  
import express from 'express';
import { validationResult } from 'express-validator';
import { UserModel } from '../models/UserModel';
import { generateMD5 } from '../utils/generateHash';

class UserController {
    async index(_: any, res: express.Response): Promise<void> {
        try {
            const users = await UserModel.find({}).exec();
            console.log('FIND');
            res.json({
                status: 'success',
                data: users,
            });
        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }
    }

    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ status: 'error', errors: errors.array() });
                return;
            }
            const data = {
                email: req.body.email,
                username: req.body.username,
                fullname: req.body.fullname,
                password: req.body.password,
                confirm_hash: generateMD5(process.env.SECRET_KEY || Math.random().toString()),
            }
            const user = await UserModel.create(data);
            res.json({
                status: 'success',
                data: user,
            });
        } catch (error) {
            res.json({
                status: 'error',
                message: JSON.stringify(error),
            });
        }
    }
}

export const UserCntr = new UserController();
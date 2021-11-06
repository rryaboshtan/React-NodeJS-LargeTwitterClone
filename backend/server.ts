import dotenv from 'dotenv';

import './core/db';
import express from 'express';
import { UserCntr } from './controllers/UserController';
import { registerValidations } from './validations/register';

dotenv.config();

const app = express();

app.use(express.json());
console.log('asffdsaf');
app.get('/users', UserCntr.index);
app.post('/users', registerValidations, UserCntr.create);
// app.patch('/users', UserCntr.update);
// app.delete('/users', UserCntr.delete);

app.listen(8888, (): void => {
    console.log('SERVER RUNNED!');
});


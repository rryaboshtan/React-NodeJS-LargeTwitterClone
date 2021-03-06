import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    email: {
        unique: true,
        required: true,
        type: String,
    },
    fullname: {
        required: true,
        type: String,
    },
    username: {
        unique: true,
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    confirmed_hash: {
        required: true,
        type: String,
    },
    location: String,
    confirmed: {
        type: Boolean,
        default: false,
    } ,
    about: String,
    website: String,
});

export const UserModel = model('User', UserSchema);
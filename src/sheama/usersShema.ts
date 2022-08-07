import {Schema, model} from 'mongoose'

const schema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
    },
    experience: {
        exp: Number,
        maxExp: Number,
    },
    lvl: {
        type: Number,
    },
    role: {
        type: String
    }
})

export default model('Users', schema)
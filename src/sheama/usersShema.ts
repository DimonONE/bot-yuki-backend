import {Schema, model} from 'mongoose'

const schema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
    }
})

export default model('Users', schema)
import {Schema, model} from 'mongoose'

const schema = new Schema({
    isBlockTiktok: {
        type: Boolean,
    },
})

export default model('AdminCommandsModel', schema)
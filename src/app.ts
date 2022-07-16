import express from "express"
import mongoose from 'mongoose';
import { adminCommands, isBlockTiktok } from "./controlers/commandsControler";
import { allUsers, getUser, createUser } from "./controlers/usersControlers";
import dotenv from 'dotenv'

dotenv.config()
const { MONGODB_URI, PORT } = process.env

const app = express()

app.use(express.json())

app.get("/adminCommands",  async ( _, res) => {
    const adminCommand = await adminCommands()
    res.send(adminCommand)
})

app.get("/getAllUsers", async ( _, res) => {
    const users = await allUsers()
    res.send(users)
})

app.get("/getUser", async ( req, res) => {
    try {
        if (req.body?.userId) {
            const user = await getUser(req.body.userId)
            res.send(user)
        } else {
            res.send({ message: "Incorrect values" })
        }
    } catch(error) { res.send( { status: 'error'} )}
})

app.post("/createUser", async ( req, res) => {
    const { userId, userName} = req.body

    try {
        if (req.body?.userId) {
            const user = await getUser(req.body.userId)
            if (!user.length){
                const newUser = await createUser(userId, userName)
                res.send(newUser)
            } else {
                res.send( { message: "User already exists" } )
            }
        } else {
            res.send( { message: "Incorrect values" } )
        }
    } catch(error) { res.send( { status: 'error'} )}
})

app.post("/isBlockTiktok", async ( req, res) => {
    try {
        if (req.body?.follow !== undefined) {
            res.send( await isBlockTiktok(req.body.follow) )
        } else {
            const resp = await adminCommands()
            res.send( resp.find(r => r?.isBlockTiktok !== undefined ) )
        }
    } catch(error) { res.send( { message: "Incorrect values" } )}
})

export const dataBase = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('CONNECT MONGO_DB')
    } catch (error) {
        console.log('DataBase errors', error)
    }
}

dataBase()
app.listen(PORT, () => console.log(`http://localhost:${PORT}/`))
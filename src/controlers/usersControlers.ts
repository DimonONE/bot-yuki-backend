import UsersModel from "../sheama/usersShema"

export const getUser = async (userId: number) => await UsersModel.find({userId})

export const allUsers = async () => await UsersModel.find()

export const createUser = async (userId: number, userName: string) => {
    return  await UsersModel.create({ userId, userName })
}

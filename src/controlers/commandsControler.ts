import AdminCommandsModel from "../sheama/commandsShema"

export const adminCommands = async () =>  await AdminCommandsModel.find()

export const isBlockTiktok = async (follow: boolean) => {
    const commands = await adminCommands()
    if(commands.find(c => c['isBlockTiktok'] !== undefined)) {
        await AdminCommandsModel.updateOne({'isBlockTiktok': follow})
        return { status: 200 }
    } else {
        await AdminCommandsModel.create({ isBlockTiktok: follow })
        return { status: 200 }
    }
}








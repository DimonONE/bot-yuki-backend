import UsersModel from "../sheama/usersShema";
import { User as UserT } from "../types/User";

const experience = {
  exp: 2,
  maxExp: 100,
};

export const getUser = async (userId: number) =>
  await UsersModel.find({ userId });

export const allUsers = async () => await UsersModel.find();

export const createUser = async ({
  userId,
  userName,
}: Pick<UserT, "userId" | "userName">) => {
  const lvl = 1;
  return await UsersModel.create({ userId, userName, lvl, experience });
};

export const levelUp = async ({ userId }: Pick<UserT, "userId">) => {
  await UsersModel.findOne({ userId }).then(
    ({ lvl, experience: exp }: UserT) => {
      const maxExp = exp.exp + experience.exp >= exp.maxExp;
      UsersModel.updateOne(
        { userId },
        {
          $set: {
            experience: {
              exp: maxExp ? 0 : exp.exp + experience.exp,
              maxExp: maxExp
                ? Math.floor(exp.maxExp + exp.maxExp / 3)
                : exp.maxExp,
            },
            lvl: maxExp ? ++lvl : lvl,
          },
        },
        {},
        () => null
      );
    }
  );
};

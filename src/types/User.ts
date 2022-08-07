export interface Experience {
    exp: number,
    maxExp: number,
}

export interface User {
    _id?: string
    userId: number,
    userName: string,
    lvl: number,
    experience: Experience
}
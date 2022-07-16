export interface Env {
    PORT: string
    SERVER_URL: string
    CLIENT_URL: string
    MONGODB_URI: string
}

export declare global {
    namespace NodeJS {
        interface ProcessEnv extends Env {}
    }
}
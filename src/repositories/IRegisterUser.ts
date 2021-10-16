export interface IRegisterUser {
    register(email: string, password: string): Promise<void>
}
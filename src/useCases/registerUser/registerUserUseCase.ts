import { IRegisterUser } from "../../repositories/IRegisterUser";

export class RegisterUserUseCase {
    constructor(private registerUser: IRegisterUser){}

    async execute(payload: { email: string, password: string }, callback: any){
        try{
            await this.registerUser.register(payload.email, payload.password)
            callback(null, {
                statusCode: 200,
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Credentials": true
                },
                body: JSON.stringify({status: true}),
            })
        }catch(e){
            callback(null, {
                statusCode: 400,
                headers: {
                  'Content-Type': 'application/json',
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Credentials": true
                },
                body: JSON.stringify({status: false, ...e}),
            })
        }
    }
}
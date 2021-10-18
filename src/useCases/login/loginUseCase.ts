import { ILogin } from "../../repositories/ILogin";

export class LoginUseCase {
    constructor(private login: ILogin){}

    async execute(payload: { email: string, password: string }, callback: any){
        try{
            await this.login.login(payload.email, payload.password)
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
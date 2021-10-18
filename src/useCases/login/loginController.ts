import { LoginUseCase } from "./loginUseCase";

export class LoginController {
    constructor(private loginUseCase: LoginUseCase){}

    async handler(event, context, callback){
        try{
            const body = JSON.parse(event.body)
            await this.loginUseCase.execute({email: body.email, password: body.password}, callback)
          }catch(e){
            callback(null, {
              statusCode: 500,
              headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
              },
              body: JSON.stringify({ status: false, message: e.message }),
            })
        }
    }
}
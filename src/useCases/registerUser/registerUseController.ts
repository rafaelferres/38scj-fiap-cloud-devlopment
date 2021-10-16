import { RegisterUserUseCase } from "./registerUserUseCase";

export class RegisterUserController {
  constructor(private registerUserUseCase: RegisterUserUseCase){}

  async handler(event, context, callback){
    try{
      const body = JSON.parse(event.body)
      await this.registerUserUseCase.execute({email: body.email, password: body.password}, callback)
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
import { ILogin } from "../ILogin";
import { dynamo } from "../../libs/dynamo";
import sha1 from 'sha1'

export class Login implements ILogin{
    async login(email: string, password: string): Promise<boolean> {
        const params: any = {
            TableName: process.env.TABLE_USERS,
            Key:{
                "email": email
            }
        }

        const data = await dynamo.get(params).promise()

        if(data.Item && data.Item.password){
            if(data.Item.password === sha1(password)){
                return true
            }else {
                throw new Error('Invalid password')
            }
        }else {
            throw new Error('Invalid user')
        }
    }
    
}
import { IRegisterUser } from "../IRegisterUser";
import uniqid from 'uniqid'
import * as sha1 from 'sha1'
import { dynamo } from "../../libs/dynamo";

export class RegisterUser implements IRegisterUser {
    async register(email: string, password: string): Promise<void> {
        const insertParams = {
            TableName: process.env.TABLE_USERS,
            Item: {
                email: email,
                password: sha1(password)
            }
        }

        await dynamo.put(insertParams).promise()
    }
}
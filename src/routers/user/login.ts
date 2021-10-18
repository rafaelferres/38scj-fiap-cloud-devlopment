import { loginController } from "../../useCases/login"

export const loginUser = async(event, context, callback) => {
    await loginController.handler(event, context, callback)
}
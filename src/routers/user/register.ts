import { registerUseController } from "../../useCases/registerUser"

export const registerUser = async(event, context, callback) => {
    await registerUseController.handler(event, context, callback)
}
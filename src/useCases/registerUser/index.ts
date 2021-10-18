import { RegisterUser } from "../../repositories/implements/RegisterUser";
import { RegisterUserController } from "./registerUseController";
import { RegisterUserUseCase } from "./registerUserUseCase";

const registerUser = new RegisterUser()
const registerUserUseCase = new RegisterUserUseCase(registerUser)
const registerUseController = new RegisterUserController(registerUserUseCase)

export { registerUseController }
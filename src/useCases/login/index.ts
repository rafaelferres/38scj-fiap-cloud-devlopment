import { Login } from "../../repositories/implements/Login";
import { LoginController } from "./loginController";
import { LoginUseCase } from "./loginUseCase";

const login = new Login()
const loginUseCase = new LoginUseCase(login)
const loginController = new LoginController(loginUseCase)

export { loginController }
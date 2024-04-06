import { LoginFirebaseRepository } from "../../repository/login/LoginFirebaseRepository";
import { LoginService } from "./LoginService";

export class LoginFirebaseService extends LoginService{
    constructor(){
        super(new LoginFirebaseRepository())
    }
}
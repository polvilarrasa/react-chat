import { LoginFirebaseRepository } from "../../repository/login/LoginFirebaseRepository";
import { LoginRepository } from "../../repository/login/LoginRepository";
import { User } from "../user/User";

export class LoginService {

    repository:LoginRepository;

    constructor(repo:LoginFirebaseRepository){
        this.repository = repo;
    }
    register():Promise<User>{
        return this.repository.register();
    }

    login():Promise<User>{
        return this.repository.login();
    }

    logout():Promise<void>{
        return this.repository.logout();
    }

    isLogged():Promise<boolean>{
        return this.repository.isLogged();
    }
}
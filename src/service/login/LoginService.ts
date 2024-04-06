import { LoginFirebaseRepository } from "repository/LoginFirebaseRepository/LoginFirebaseRepository";
import { User } from "./User";

export class LoginService {

    repository:LoginFirebaseRepository;

    constructor(repo:LoginFirebaseRepository){
        this.repository = repo;
    }
    register():Promise<User>{
        return this.repository.register();
    }

    login():Promise<User>{
        return this.repository.login();
    }

    isLogged():boolean{
        return this.repository.isLogged();
    }
}
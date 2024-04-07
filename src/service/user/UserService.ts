import { UserRepository } from "../../repository/user/UserRepository";
import { User } from "./User";

export class UserService{

    repository:UserRepository;

    constructor(repo:UserRepository){
        this.repository = repo;
    }

    getUser():Promise<User>{
        return this.repository.getUser();
    }

    getUid():Promise<string> {
        return this.repository.getUid();
    }

    getEmail():Promise<string>{
        return this.repository.getEmail();
    }

    userExist(user:User):Promise<boolean>{
        return this.repository.userExist(user);
    }

    createUser():Promise<boolean>{
        return this.repository.createUser();
    }
    
}
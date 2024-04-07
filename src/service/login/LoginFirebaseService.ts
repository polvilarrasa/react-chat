import { LoginFirebaseRepository } from "../../repository/login/LoginFirebaseRepository";
import { User } from "../user/User";
import { UserService } from "../user/UserService";
import { LoginService } from "./LoginService";

export class LoginFirebaseService extends LoginService{
     userService: UserService;
    constructor(service:UserService){
        super(new LoginFirebaseRepository())
            this.userService = service
    }

    /**
     * After login, check if user exists in the database. If not, create user.
     * @returns  Promise<User> - User object
     */
    login():Promise<User>{
        return this.repository.login().then((user)=>{
            return this.userService.userExist(user).then(exist=>{
                if(!exist){
                     return this.userService.createUser();
                }
           })
      }).then(userCreated=>{
           if(!userCreated){
                this.logout()
                throw new Error("User creation unsuccessful. Please log in again.")
           }
           return this.userService.getUser();
      })
    }
}
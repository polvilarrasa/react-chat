import { UserFirebaseRepository } from "../../repository/user/UserFirebaseRepository";
import { UserService } from "./UserService";

export class UserFirebaseService extends UserService{
    constructor(){
        super(new UserFirebaseRepository())
    }
}
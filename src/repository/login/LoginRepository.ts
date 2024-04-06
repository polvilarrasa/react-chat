import { User } from "@service/login/User";
import { LoginFirebaseRepository } from "@repository/LoginFirebaseRepository";

export interface LoginRepository{
    register():Promise<User>;
    login():Promise<User>;
    logout():void;
    isLogged():boolean;
}

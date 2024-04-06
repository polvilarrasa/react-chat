import { User } from "service/login/User";

export interface LoginRepository{
    register():Promise<User>;
    login():Promise<User>;
    logout():void;
    isLogged():boolean;
}
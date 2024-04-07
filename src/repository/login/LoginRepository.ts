import { User } from "../../service/user/User";

export interface LoginRepository{
    register():Promise<User>;
    login():Promise<User>;
    logout():Promise<void>;
    isLogged():Promise<boolean>;
}

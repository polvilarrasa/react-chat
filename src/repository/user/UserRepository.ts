import { User } from "../../service/user/User";

export interface UserRepository{
    getUid(): Promise<string>;
    getEmail():Promise<string>;
    userExist(user:User):Promise<boolean>;
    createUser():Promise<boolean>;
    getUser():Promise<User>;
}
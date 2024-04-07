import { LoginFirebaseService } from "./service/login/LoginFirebaseService";
import { UserFirebaseService } from "./service/user/UserFirebaseSerivce";

export const UserService = new UserFirebaseService();
export const LoginService = new LoginFirebaseService(UserService);

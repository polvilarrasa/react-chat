import { LoginRepository } from "./LoginRepository";
import { User } from "service/login/User";
import { getAuth, signInWithPopup,signOut} from "firebase/auth";
import { googleAuthProvider, firebaseAuth } from "src/firebase/firebaseAuth";

export class LoginFirebaseRepository implements LoginRepository{
     register(): Promise<User> {
          throw new Error("Method not implemented")
     }

     login(): Promise<User> {
          return signInWithPopup(firebaseAuth, googleAuthProvider)
               .then((result) => {
               return {
                    username:result.user.displayName
               }
               })
     }

     logout(): Promise<any> {
          return signOut(firebaseAuth)
     }

     isLogged(): boolean {
          return getAuth().currentUser!==undefined;
     }
}
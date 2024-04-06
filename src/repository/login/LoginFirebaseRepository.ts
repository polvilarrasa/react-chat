import { firebaseAuth, googleAuthProvider } from "../../../firebase"
import { User } from "../../service/login/User"
import { LoginRepository } from "./LoginRepository"
import { getAuth, signInWithPopup, signOut } from "firebase/auth"

export class LoginFirebaseRepository implements LoginRepository{
     register(): Promise<User> {
          throw new Error("Method not implemented")
     }

     login(): Promise<User> { 
          return signInWithPopup(firebaseAuth, googleAuthProvider)
               .then((result) => {

                    if(!result){
                         throw new Error("Error Authenticating")
                    }

               return {
                    username:result.user.displayName??"",
                    token: result.user.refreshToken
               }
               })
     }

     logout(): void {
          signOut(firebaseAuth)
     }

     isLogged(): boolean {
          return getAuth().currentUser!==undefined
               &&getAuth().currentUser!==null;
     }
}
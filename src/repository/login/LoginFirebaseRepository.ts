import { firebaseAuth, googleAuthProvider } from "../../../firebase"
import { User } from "../../service/user/User"
import { LoginRepository } from "./LoginRepository"
import { getAuth, signInWithPopup, signOut } from "firebase/auth"

export class LoginFirebaseRepository implements LoginRepository{
     register(): Promise<User> {
          throw new Error("Method not implemented")
     }

     login(): Promise<User> { 
          return signInWithPopup(firebaseAuth, googleAuthProvider)
               .then((result) => {
                    if(!result.user){
                         throw new Error("Error Authenticating")
                    }
                    
                    return {
                         id: result.user.uid,
                         name: result.user.displayName??"",
                         email:result.user.email??"",
                         contacts:undefined,
                         invitations: undefined
                    }
               })
     }

     logout(): Promise<void> {
          return Promise.resolve(signOut(firebaseAuth))
     }

     isLogged(): Promise<boolean> {
          const logged =  getAuth().currentUser!==undefined&&getAuth().currentUser!==null
          return Promise.resolve(logged)
     }
}
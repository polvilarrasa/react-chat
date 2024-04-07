import { firebaseAuth, firebaseDb } from "../../../firebase";
import { Collection } from "../../firebase/firedbconfig";
import { User } from "../../service/user/User";
import { LoginService } from "../../serviceconfig";
import { UserRepository } from "./UserRepository";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";


export class UserFirebaseRepository implements UserRepository{
    getUid(): Promise<string>{
        const userId = firebaseAuth.currentUser?.uid;
        if (userId) {
            return Promise.resolve(userId);
        } else {
            return Promise.reject("User not logged in");
        }
    }
    getEmail(): Promise<string> {
            return this.getUser().then(user=>user.email)
    }

    /**
     *  Get user from database using the uid from the current user logged in 
     * @returns  Promise<User> - User object
     */
    getUser(): Promise<User> {
        return this.getUid().then(uid=>{
            const collectionRef = collection(firebaseDb, Collection.USER);
            const docRef = doc(collectionRef,uid)

            return getDoc(docRef).then(user=>{
                if(!user.exists()){
                    LoginService.logout();
                    throw new Error("User not found");
                }
                const dt = user.data();

                console.log("data getUser",dt)

                return {
                    id:user.id,
                    name:dt.name,
                    email:dt.email,
                    contacts:dt.contacts,
                    invitations:dt.invitations
                } as User

            })
        })
    }

    userExist(user:User): Promise<boolean> {
        const document = collection(firebaseDb, Collection.USER);

        const docRef = doc(document, user.id)

        return getDoc(docRef).then(res=>{
            return res.exists();
        })
    }

    createUser(): Promise<boolean>{
        const collectionRef = collection(firebaseDb, "user");

        const docRef = doc(collectionRef,firebaseAuth.currentUser?.uid??"")

        return setDoc(docRef,{
            name: firebaseAuth.currentUser?.displayName, 
            contact: [],
            invitation:[]
          }).then(()=>{
                return true;
            }).catch(()=>{
                return false;
            } )
    }

}
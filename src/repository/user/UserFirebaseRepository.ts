import { firebaseAuth, firebaseDb } from "../../../firebase";
import { Collection, UserCollection } from "../../firebase/firedbconfig";
import { User } from "../../service/user/User";
import { LoginService } from "../../serviceconfig";
import { UserRepository } from "./UserRepository";
import { addDoc, collection,getDocs, query, where } from "firebase/firestore";


export class UserFirebaseRepository implements UserRepository{
    getUid(): Promise<string>{
        return this.getUser().then(user=>user.id);
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
            const document = collection(firebaseDb, Collection.USER)
            const q = query(document,where(UserCollection.UID,"==",uid));

            return getDocs(q).then(user=>{
                if(user.empty){
                    throw new Error("User not found");
                    LoginService.logout()
                }

                const usr = user.docs[0].data();
                
                return {
                    id:usr.id,
                    name:usr.name,
                    email:usr.email,
                    contacts:usr.contacts,
                    invitations:usr.invitations
                } as User
            })
        })
    }

    userExist(user:User): Promise<boolean> {
        return getDocs(collection(firebaseDb, user.id))
                .then((query)=> !query.empty)
    }

    createUser(): Promise<boolean>{
        return addDoc(collection(firebaseDb, "user"), {
            uid: firebaseAuth.currentUser?.uid,
            name: firebaseAuth.currentUser?.displayName, 
            contact: undefined,
            invitation:undefined
          }).then(docCreated=>docCreated.id!==undefined);
    }

}
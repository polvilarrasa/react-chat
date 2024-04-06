import { getAuth, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";

// Autentication
const firebaseAuth = getAuth();
firebaseAuth.useDeviceLanguage();
const googleAuthProvider = new GoogleAuthProvider();

onAuthStateChanged(firebaseAuth, (user) => {
  if(user){
    localStorage.setItem('user', JSON.stringify(user));
  }else{
    localStorage.removeItem('user');
  }
});

export{
    firebaseAuth,
    googleAuthProvider
}


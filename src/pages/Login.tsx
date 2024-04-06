import { LoginFirebaseService } from '../service/login/LoginFirebaseService'

function Login() {

  function login(){
    const log = new LoginFirebaseService();

    log.login().then((user)=>{
      console.log("User is logged")
    }).catch((e)=>{
      console.log("Error authorising",{e})
    })
  }

  return (
    <button onClick={()=>login()}>
      patata
      </button>
  )
}

export default Login
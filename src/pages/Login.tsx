import { useNavigate } from 'react-router-dom';
import { User } from '../service/user/User';
import { LoginService } from '../serviceconfig';

function Login() {
  
  const navigate= useNavigate();

  function lg(){
    LoginService.login().then((user:User)=>{
      console.log("User is logged",user)
      navigate("/chat")
    }).catch((e:Error)=>{
      console.log("Error authorising",{e})
      console.log(e.message)
    })
  }

  return (
    <button className="login-button" onClick={()=>lg()}>
      patata
      </button>
  )
}

export default Login
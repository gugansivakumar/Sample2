//import { LineAxisOutlined } from '@mui/icons-material';
import React from 'react'

 function Login() {

   const [UserName,setUserName]=useState('');
   const [Password,setPassword]=useState('');
   const [error,setError]=(false);
   const formHandler=(event)=>
   {
    if(UsernName.length==0 && Password.length==0)
    {
      setError(true);
    }
    const loginObj={
      name:UserName,
      pwd:Password
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
    axios.post(url/obj)
   }

   

  
  return (
    <div>
      <h3>Login Page</h3>
      <form onSubmit={formHandler}>
      Username : <input type="text" value={userName} placeholder="Username"/><br/>
      Password : <input type="text" placeholder="Password"/><br/>
      <button>Login</button>
      </form>
    </div>
  )
}

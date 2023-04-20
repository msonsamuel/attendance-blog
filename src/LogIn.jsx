import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const LogIn=()=>{
  const navigate = useNavigate(); 
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
const handleSubmit=async(e)=>{
e.preventDefault();
try{
  await axios.post("http://localhost:8000/",{email,password})
  .then(res=>{
    if(res.data=="exist")
    {
      navigate("/Home",{state:{id:email}})
    }
    else if(res.data=="notexist"){
   alert("user is not registered")
    }
  })
  .catch(e=>{
    alert("wrong details")
    console.log(e)
  })
  }
  catch(error)
  {console.log(error);}
}
    return(
        <div className="login mt-5 center">
          <h1>Login</h1>
        <form action="POST" className="container ">
  <div class="form-group">
    <label for="Email">Email address</label><br/>
 
    <input type="email" id="Email" class="form-control"onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email"/><br/>
 
    <label for="password">Password</label><br/>
 
    <input type="password" id="password" class="form-control" onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password"/><br/>
 
    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </div><br/>
 
</form>
<br/>
<p>OR</p>
<br/>
<Link to="/Signup">Sign up new account</Link>
        </div>
    )
    }
    export default LogIn
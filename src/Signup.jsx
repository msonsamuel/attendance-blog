import {useNavigate,Link } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
const Signup=()=>{
  const history =useNavigate();
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
const handleSubmit=async(e)=>{
e.preventDefault();
try{
  await axios.post("http://localhost:8000/Signup",
  {email,password})
  .then(res=>{
    if(res.data=="exist")
    {
      alert("user already exist")
      history("/Home",{state:{id:email}})
    }
    else if(res.data=="notexist"){
    
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
    <div className="holder mt-5">
      <h1>register a new account</h1>
        <form className="container mt-5 center" action="POST">
  <div class="form-group ">
    <label for="Email">Enter Your Mail Address</label>
    <input type="email" class="form-control" onChange={(e)=>{setEmail(e.target.value)}}  id="Email"  placeholder="Enter email"/>
    
  </div>
  <br/>
  <div class="form-group">
    <label for="Password"> Enter Your Password</label>
    <input type="password" class="form-control" onChange={(e)=>{setPassword(e.target.value)}}   placeholder=" Enter Password"/>
  </div><br/>
  <div>
  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small><br/>
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </div>
  
</form>
<br/>
<p>OR</p>
<br/>
<Link to="/">Already have Account? Login Here! </Link>
</div>
)
}
export default Signup
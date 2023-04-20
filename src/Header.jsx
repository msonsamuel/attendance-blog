import { useLocation,useNavigate } from "react-router-dom";
const Header= ({selectedDept, StaffCount})=>{
   const location=useLocation()
    return(
<main>
    <div className="row justify-content-center">
       <div className="col-8">
       <h1 className="welcome">hello {location.state.id} and welcome </h1>
        <h2>The {selectedDept} Department has {StaffCount} Members</h2>
        </div> 
    </div>
</main>
    )
}
export default Header;
   

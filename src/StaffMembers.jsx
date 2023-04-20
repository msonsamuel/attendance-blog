import female from "./images/female.png";
import male from "./images/male.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const StaffMembers = ({staffMembers,selectedDept,handleselectedDept, handlestaffclick})=>{
    
      return( 
<main className="Container">
    <div className="row justify-content-center mt-3 mb-3" >
        <div className="col-6">
        <select className="form-select form-select-lg" value={selectedDept} onChange={handleselectedDept}>
    <option value="Admin" >Admin </option>
    <option value="Production">Production </option>
    <option value="Finance" >Finance</option>
    <option value="Audit"> Audit</option>
    <option value="Security" >Security</option>
</select>
        </div>
    </div>
<div className="row justify-content-center mt-3 mb-3 ">
<div className="col-8">
<div className="card-collection">
{
staffMembers.map((staff)=> ( 
<div  id={staff.id}className={(staff.StaffName===selectedDept?'card m-2 standout':'card m-2')} style={{cursor:"pointer"}} onClick={handlestaffclick}>
 {(staff.Gender==='Male')?<img src={male} className="card-img-top justify-content-center" alt="" style={{height:"150px",width:"150px"}}/>
 :<img src={female} className="card-img-top" alt="" style={{height:"150px",width:"150px"}}/>}
 <div className="card-body">
 <h3 className="card-title">Staff Name: {staff.StaffName}</h3>
 <p className="card-text">Desination: {staff.Designation}</p>
 <p className="card-text">Department: {staff.Dept}</p>
<p className="card-text">Gender: {staff.Gender}</p>
 <p className="card-text"> Age: {staff.Age}</p>
 </div>
        </div>
        )
        )
    }
    </div>
    </div>
        </div>
           </main>
)
}
export default StaffMembers;

        
     
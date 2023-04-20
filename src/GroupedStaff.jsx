import { useState } from "react";

const GroupedStaff = ({staffMembers,selectedDept, setDept})=>{
   const [groupedStaff, setGroupedSt]=useState(groupedstaff());
function groupedstaff(){
var dept=[];
    var AdminList=staffMembers.filter((staf)=>staf.Dept==='Admin');
    var Admin= {dept:'Admin', members:AdminList, collapsed:selectedDept==='Admin'?false:true}
    dept.push(Admin);

    var ProductionList=staffMembers.filter((staf)=>staf.Dept==='Production');
    var Production= {dept:'Production', members:ProductionList, collapsed:selectedDept==='Production'?false:true}
    dept.push(Production);

var AudiList=staffMembers.filter((staf)=>staf.Dept==='Audit');
    var Production= {dept:'Audit', members:ProductionList, collapsed:selectedDept==='Audit'?false:true}
    dept.push(AudiList);

    var FinanceList=staffMembers.filter((staf)=>staf.Dept==='Finance');
    var Production= {dept:'Finance', members:ProductionList, collapsed:selectedDept==='Finance'?false:true}
    dept.push(FinanceList);

    var SecurityList=staffMembers.filter((staf)=>staf.Dept==='Security');
    var Security= {dept:'Security', members:SecurityList, collapsed:selectedDept==='Security'?false:true}
    dept.push(Security);
return dept;
    }
function handleDeptClick(event){
    var transformgroupstaff = groupedStaff.map((setGroupedSt)=>setGroupedSt.dept===event.currentTarget.id
                                                          ?{...setGroupedSt,collapsed:!setGroupedSt.collapsed}
                                                          :setGroupedSt);
    setGroupedSt(transformgroupstaff);
    setDept(event.currentTarget.id);
}
    return (
    <main className="container">
        {
groupedStaff.map((item)=>{
    return(
    <div key={item.dept} className="card mt-2" style={{cursor:'pointer'}}>
<h4 id={item.staff} className="card-header text-secondary bg-white" onClick={handleDeptClick}>
Staff Department: {item.dept}
</h4>
<div id={"collapse_" + item.dept} className={item.collapsed===true?"collapse":"" }>
<hr/>
{  
    item.members.map((staff)=>{
        return(
<div className="mt-2">
<h5 className="card-title mt-2">
<span className="text-dark">Full Name: {staff.staffName}</span>
<p>Designation: {staff.designation}</p>
</h5>
</div>
        );
    })
}
</div>
        </div>
    )
})}
</main>
    )
}
export default GroupedStaff;
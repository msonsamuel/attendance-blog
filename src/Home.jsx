import Header from './Header';
import StaffMembers from './StaffMembers';
import Nav from './Nav';
import { useState } from "react";
import Footer from './Footer';
import GroupedStaff from './GroupedStaff';
const Home=()=>{
    
  const[selectedDept, setselectedDept]=useState("Admin");
  const [staffMembers, setStaff] = useState([
    {id:1,
     StaffName:"John Paul",
     Dept:"Audit",
     Designation:"HOD",
     Gender:"Male",
     Age:30,
     pic:"url"
    },
   {id:2,
    StaffName:"Sarah Obochi",
     Dept:"Finance",
     Designation:"Accountant",
     Gender:"Female",
     Age:41,
     pic:"url"
    },
    {
     id:3,
     StaffName:"Samuel Mson",
     Dept:"Production",
     Designation:"Javascript Developer",
     Gender:"Male",
     Age:27,
     pic:"url"
    },
    { id:4,
        StaffName:"Thomas Edet",
        Dept:"Production",
        Designation:"Android Developer",
        Gender:"Male",
        Age:30,
        pic:"url"
 },
     {id:5,
        StaffName:"Essio Bassey",
        Dept:"Production",
        Designation:"Javascript Developer",
        Gender:"Male",
        Age:25,
        pic:"url"
      },
      {id:6,
        StaffName:"Esther Dashi",
        Dept:"Production",
        Designation:"Graphics Designer",
        Gender:"Female",
        Age:26,
        pic:"url"
       },
       {id:7,
       StaffName:"Joy Atams",
       Dept:"Production",
       Designation:"C++ Developer",
       Gender:"Female",
       Age:28,
       pic:"url"
        },
        {id:8,
        StaffName:"Paul Atams",
       Dept:"Admin",
       Designation:"Manager",
       Gender:"Male",
       Age:45,
       pic:"url"
       },
       {id:9,
        StaffName:"Peter Chris",
       Dept:"Admin",
       Designation:"Times Keeper",
       Gender:"Male",
       Age:25,
       pic:"url"
       },
      {id:10,
        StaffName:"Musa Usman",
        Dept:"Security",
        Designation:"Gate Man",
        Gender:"Male",
        Age:41,
        pic:"url"
        },
        {id:11,
          StaffName:"Danfodio Fatai",
          Dept:"Security",
          Designation:"CSO",
          Gender:"Male",
          Age:54,
          pic:"url"
          }
    ]);
    function handleselectedDept(event){
           
      setselectedDept(event.target.value);
    }
    function handlestaffclick(event){
      const transformstaff=staffMembers.map((stf)=>stf.id===parseInt(event.currentTarget.id)
      ?(stf.StaffName=selectedDept)?{...stf, StaffName:''}:{...stf, StaffName:selectedDept}
      :stf);
      setStaff(transformstaff);
        }
  
  return (
    <div>

        <Nav/>
        <Header selectedDept={selectedDept} 
         StaffCount={staffMembers.filter((deptstaf)=>deptstaf.Dept===selectedDept).length}
        />
       <StaffMembers staffMembers={staffMembers}
      handleselectedDept={handleselectedDept}
      handlestaffclick={handlestaffclick}
      /> 
         <Footer/>
        </div>
    
      
  );
   
}
export default Home;
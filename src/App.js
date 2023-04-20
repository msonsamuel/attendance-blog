import './App.css';
import LogIn from './LogIn';
import Signup from './Signup';
import Home from './Home';
import GroupedStaff from './GroupedStaff';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaffMembers from './StaffMembers';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <main className="container">
  <BrowserRouter>
<Routes>
  <Route  path="/"  element={ <LogIn/>}/>
  <Route path="/Signup" element={<Signup/>}/>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/GroupedStaff" element={<GroupedStaff/>}/>
   </Routes>
  </BrowserRouter>
  
    </main>
  );
}

export default App;

import { Link } from "react-router-dom";
const Nav =()=>{
    return (
       <nav className="Navbar Navbar-expand-lg navbar-light bg-light">
    <ul className="Navbar-nav me-auto mt-2 mb-lg-0">
    <li className="Nav-item">
    <Link className="Nav-link" to="/">Home</Link>
    </li>
    <li className="Nav-item">
    <Link className="Nav-link" to="/GroupedStaff"> Staff List</Link>   
    </li>
    </ul>
       </nav> 
    )
}
export default Nav;
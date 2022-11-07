import  Reac, {useState} from 'react';

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/form",
            name:"Form Register",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="gridmx">
            <div className='row'>
                <div className='col-auto'>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                <a href='/' className="link_logo">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   </a>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
                </div>
                <div className='col-autos'>
           <main>{children}</main>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
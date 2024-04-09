import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'


const Nav = () => {
    return (
        <div>
           <ul nav className=" justify-content-center navbar">
          
               <li className="nav-item">
                   <Link to={'/'} className="nav-link active text-light" aria-current="page">Home</Link>
               </li>

               <li className="nav-item">
                   <Link to={'/user'} className="nav-link  text-light">User</Link>
               </li>
               <li className="nav-item">
                     <Link to={'/author'}className="nav-link  text-light" >Author</Link>
                </li>
            
             </ul>
              
            
        </div>
    );
};

export default Nav;


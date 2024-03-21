import React from 'react';
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Users from './Users';
import Author from './Author';
import Nav from './Nav';
import Home from './Home';

const Datapro = () => {
    return (
        <div>
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/user' element={<Users/>}/>
                <Route path='/author' element={<Author/>}/>
              
            </Routes>
            
            </BrowserRouter>
            
        </div>
    );
};

export default Datapro;
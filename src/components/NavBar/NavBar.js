import React from 'react';
import logo from '../../resources/logo2.png';
import './NavBar.css';
import Auth from '../useAuth/useAuth';

const NavBar = () => {
    const auth = Auth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light  justify-content-md-between justify-content-center flex-wrap">
            <a className="navbar-brand" href="/home"><img src={logo} alt="Red Onion Foods"></img></a>
            <div className="">
              
                
                {auth.user.name? 
                    <a onClick={auth.signOut} className="sing-up"  href='/home'>Sign Out</a>:
                    <a className="sing-up" href="/signup">Sign Up</a>}
                   
                    
                    
            </div>
        </nav>
    );
};

export default NavBar;
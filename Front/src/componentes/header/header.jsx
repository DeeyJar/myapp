import React from 'react';
import Logo from '../../imagen/MYtineraryLogo.png';
import '../../App.css'
class Header extends React.Component{
    render(){
        return(
            <div className="Head">
            <img src={Logo}  width="500px" alt=""/>
            <h2>Find your perfect trip,designed by insides who know and love their cities</h2>
            </div>
        )
    }
}

export default Header;
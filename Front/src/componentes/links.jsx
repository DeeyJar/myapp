import React from 'react';
import { Link} from 'react-router-dom';
import Logout from '../componentes/user/Logout'

const Routers =()=>{
        return(
                <div>
                <ul className="lista">
                        {localStorage.getItem("token")?
                        <li ><Link to="/"><Logout/></Link></li>
                    :<>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/Create_Account">Create Account</Link></li>
                    </>}
                </ul>
                </div>
        );
        }

export default Routers;
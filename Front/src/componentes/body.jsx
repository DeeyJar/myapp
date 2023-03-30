import React from 'react';
import Flecha from '../imagen/circled-right-2.png';
import { Link} from 'react-router-dom';
import '../App.css';
class Body extends React.Component{
    render(){
        return(<div>
            <h3>Start browsing</h3>
            <Link to="/Search"><img src={Flecha} alt="" height="100px" width="100px"/></Link>
            <h4>Want to build your own MYtinerary?</h4>
            </div>
        )
    }
}
export default Body;

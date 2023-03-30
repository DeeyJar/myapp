import React from 'react';
import Footer from '../../imagen/homeIcon.png';
import '../../App.css';
import { Link} from 'react-router-dom';
class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <Link to="/"><img src={Footer} alt="" height="80px" width="80px"/></Link>
            </div>
        )
    }
}

export default Home;
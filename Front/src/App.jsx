import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './componentes/home';
import Login from './componentes/user/Login';
import Account from './componentes/user/CreateAccount';
import Search from './componentes/Search';
import {Provider} from "react-redux"
import Store from "./redux/store"
import Barcelona from "./componentes/Barcelona";

class App extends React.Component{
    
    render(){
        
        return(
        <Provider store={Store}>
            <div className="main">
            <Router>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/Create_Account" component={Account}/>
                <Route path="/Search" component={Search}/>
                <Route path="/Barcelona" component={Barcelona}/>
            </Router>
            </div>
        </Provider>   
        )
    }
}
export default App;

//
// class App extends React.Component {
//         state = {
//             datos: datos,
//             show: true
//         }
//         toggleShow = () => {
//             this.setState({ show: !this.state.show })
//         }

//         render() {
//                 if (this.state.show) {
//                     return <div > {this.state.datos.map(e => 
//                         < p key = { e.id } > 
//                                   { e.Name },
//                                   { e.LastName } 
//                         <button onClick = { this.toggleShow } > Cambio </button> 
//                         </p>)} 
//                             </div>
//                         }

//                         else {
//                             return <div>
//                                 <h1 > No hay nada </h1> 
//                                 <button onClick = { this.toggleShow } > Cambio </button> 
//                                     </div>
//                         }
//                     }
//                 }

import React from 'react';
import { Link} from 'react-router-dom';
import setAuthToken from "../utils/setAuthToken"
import {connect} from 'react-redux'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Alert
  } from 'reactstrap';
import Footer from '../footer/footer'
import {getLogin} from '../../redux/actions/LoginAction'
import {Redirect} from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import '../style.css'
import Foto from '../../imagen/login-icon-9.jpg'
import Itinerary from '../../imagen/myitinerary.png'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Password:'',
            Email:'',
            token:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange=(e)=> {
        var state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state)
    };      
    
    handleSubmit= async(event)=> {
        event.preventDefault();
        let {Email,Password}=this.state
        let Account={
            Email:Email,
            Password:Password
        }
       await this.props.getLogin(Account)
        this.setState({token:localStorage.getItem("token")})
        }

    render(){
        
        if(this.state.token){
            return <Redirect to="/" />
        }
        else
        {
        const responseGoogle = (response) => {
            this.setState({token:response.accessToken}) 
            setAuthToken(this.state.token)
            localStorage.setItem('token', this.state.token) 
        }
        return(
            <div >
                <img src={Itinerary} alt="log" height="150" width="400"/>

                <div className="login container">

                    <div className="loginFoto">
                        <h1>Login</h1> <img src={Foto} alt="icon" height="40" width="40"/>
                    </div>
                    <Container className="App">
                    <Form className="form" onSubmit={this.handleSubmit}>

                            <Col>
                                <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    value={this.state.Email}
                                    name="Email"
                                    placeholder="myemail@example.com"
                                    onChange={this.handleChange} 
                                />
                                </FormGroup>
                            </Col>
                            
                            <Col>
                                <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="Password" 
                                    value={this.state.Password} 
                                    name="Password" 
                                    placeholder="Password" 
                                    onChange={this.handleChange} 
                                />
                                </FormGroup>
                            </Col>
                            
                        <Button color="primary" type="submit" >Login</Button>

                    </Form>
                    </Container>
                    <br/>
                    <p>or</p>
                    <GoogleLogin
                        clientId="213577496742-kte13kljn526f7pjnoq051dcr5o8gmfg.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        className="border border"
                    />
                    <hr/>
                    <Alert color="primary" className="container">¿NO TIENES CUENTA?.CREA UNA, ES TOTALMENTE GRATIS. :D</Alert>
                    <Link to="/Create_Account"> <Button >CREA CUENTA</Button> </Link>    
                </div>
                <Footer/>
            </div>
        )
    }}
}

const mapStateToProps=state=>{
    return{
    }
}

const mapDisparchToProps = dispatch=>{
    return {
        getLogin: (Account) => dispatch(getLogin(Account)),
    }
    }

export default connect(mapStateToProps,mapDisparchToProps)(Login);
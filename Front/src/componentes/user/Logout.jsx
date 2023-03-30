import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {getoutlogin} from '../../redux/actions/LoginAction'
import {connect} from 'react-redux'

 class Logout extends Component {
    state={
        isAuthenticated:false
    }
     logout= async()=>{
        localStorage.clear("token")
        let isAuthenticated=this.state
        await this.props.getoutlogin(isAuthenticated)
        // this.setState({isAuthenticated:isAuthenticated})
    }
    render() {
        const isAuthenticated=this.props.isAuthenticated;
        if(isAuthenticated){
            return <Redirect to="/"/>
        }

       return <ul onClick={this.logout}>Log out</ul>
    }
}

const mapStateToProps= state=>{
    return{

    }
}

const mapDisparchToProps=dispatch=>{
    return{
        getoutlogin: (isAuthenticated) => dispatch(getoutlogin(isAuthenticated))
    }
}
export default connect(mapStateToProps,mapDisparchToProps)(Logout);
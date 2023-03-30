import React from 'react';
import Header from './header/header'
import Body from './body';
import Footer from './footer/footer';
import Carsouls from './carousel2';
import Navbar from './navbar/navbar'
import { connect } from 'react-redux'
import Store from '../redux/store'
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from '../redux/actions/LoginAction'
import jwt_decode from "jwt-decode";




class Home extends React.Component {
    componentDidMount() {
        console.log("token", localStorage.getItem("token"))
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token");
            setAuthToken(token)

            const decoded = jwt_decode(token)
            Store.dispatch(setCurrentUser(decoded))
            const currentTime = Date.now / 1000;
            if (decoded.exp < currentTime) {
                Store.dispatch(setCurrentUser())
                window.location.href = "./"
            }
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <br />
                <Header />
                <Body />
                <Carsouls />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDisparchToProps = dispatch => {
    return {

    }
}



export default connect(mapStateToProps, mapDisparchToProps)(Home);

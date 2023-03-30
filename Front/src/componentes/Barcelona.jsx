import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateItineary from '../redux/actions/actionitinerary'
import './style.css'
import Footer from './footer/footer'
import { Link } from 'react-router-dom';
import Activities from './Activities';
import { Button } from 'reactstrap';
import Navbara from './navbar/navbar'

class Itinerary extends Component {
    state = { isOpen: false }


    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        let Iti = this.props.Iti;
        return (
            <div className="Itinerary" key={Iti._id}>
                <div className="border border-primary" >

                    <div className="row">
                        <div className="col-md-5 nombre">
                            <div>
                                <img className="imagen" src={require(`../imagen/${Iti.profilePic}.png`)} alt="" height="100" width="100" />
                            </div>
                            <div>
                                {Iti.profilePic}
                            </div>
                        </div>

                        <div className="col-md-5 Info">
                            <div>
                                <h5>{Iti.tittle}</h5>
                            </div>

                            <div className="Rating">
                                <div>
                                    <p>Likes:{Iti.rating}</p>
                                </div>

                                <div>
                                    <p>{Iti.duration}Hours</p>
                                </div>

                                <div>
                                    <p>${Iti.price}</p>
                                </div>
                            </div>

                            <div>
                                {Iti.hastags}
                            </div>
                        </div>
                    </div>

                    {this.state.isOpen ? <Activities id_itinerario={Iti._id} /> : <div> </div>}
                    <Button color="primary" onClick={this.toggle.bind(this)} style={{ marginBottom: '1rem' }}>View All</Button>

                </div>

            </div>
        )
    }
}
class Barcelona extends Component {

    async componentDidMount() {
        await this.props.CreateItineary();
    }

    render() {
        return (
            <div>
                <Navbara />

                <img className="barcelona" src="https://www.metropoliabierta.com/uploads/s1/62/75/35/bcn_5_570x340.jpeg" alt="" />
                <h6>Available MYitineraries:</h6>
                {this.props.Itinerary.map((i, key) => {
                    return (
                        <Itinerary key={key} Iti={i} />
                    )
                })}
                <Link to="/Search">Choose another city</Link>
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        Itinerary: state.Itinerary
    }
}

const mapDisparchToProps = dispatch => {
    return {
        CreateItineary: () => dispatch(CreateItineary())
    }
}

export default connect(mapStateToProps, mapDisparchToProps)(Barcelona);

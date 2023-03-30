import React from 'react'
import {connect} from 'react-redux'
import getcities, { Filter } from '../redux/actions/action'
import Navbar from './navbar/navbar'
import { Link} from 'react-router-dom';
import Footer from './footer/footer'
class Search extends React.Component{
      
        async componentDidMount() {
        await this.props.getcities();
        console.log(this.props)
        }
      
    
        filtrarCiudades = (e) => {
            this.props.Filter(e,this.props.cities)
    }
    render(){
       
        return(
            <div>
                <Navbar/>
                <h1>Cities</h1>

                <form >
                    <label>
                        City:<input type="text"  onChange={this.filtrarCiudades} />
                    </label>
                </form>
                <div className="contenedorFotos">
                {this.props.FilterCities.map((i)=>{
                    console.log(i);
                    
                    return(
                       
                        <Link to={i.city}>
                            <div className="fotoCity" style={{backgroundImage: `url(${i.Url})`,
                            backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px'}} key={i._id}>
                            
                            <li className="textoFoto">
                            {i.city} - {i.country}
                            </li>
                        </div>
                        </Link> 
                    )
                }
                    )}
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        cities:state.cities,
        FilterCities:state.FilterCities
    }
}

const mapDisparchToProps = dispatch=>{
    return {
        getcities: () => dispatch(getcities()),
        Filter:(e,cuidades)=>{
            let filtro= e.target.value
            dispatch(Filter(filtro,cuidades))
        }
    }
}



export default connect(mapStateToProps,mapDisparchToProps)(Search);


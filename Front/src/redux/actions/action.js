const getcities= () => async(dispatch) =>{
    const respuesta=  await fetch("http://localhost:8080/api/cities").then(res=>res.json());
    console.log('respueta de api: ',respuesta);
    
    dispatch({
        type: "GET_CITIES",
        payload: respuesta
    })
}

export default getcities;

export const Filter = (filtro,cities)=>{

    let ciudades_filtradas = cities.filter(ciudad => {
        return ciudad.city.toLowerCase().indexOf(filtro.toLowerCase()) === 0
    })
    return { type: "FILTER_CITIES", payload: ciudades_filtradas}
}
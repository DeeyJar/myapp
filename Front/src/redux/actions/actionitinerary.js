const getItinerary= () => async(dispatch) =>{
    const respuesta=  await fetch("http://localhost:8080/api/itinerary").then(res=>res.json());
    
    dispatch({
        type: "GET_ITINERARY",
        payload: respuesta
    })
}

export default getItinerary;

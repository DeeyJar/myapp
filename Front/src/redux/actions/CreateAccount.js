import axios from 'axios'
    const api = axios.create({
        baseURL: "http://localhost:8080/api/CreateAccount"
    });

    
    const getAccount =(Account) =>{
        return async(dispatch) => {
            console.log(Account)
            console.log("llego al redux ")
            await api.post('/register',{
                Username: Account.Username, 
                Email:Account.Email,
                Password:Account.Password,
                FistName:Account.FistName,
                LastName:Account.LastName})
                        .then(res=>{
                            console.log("llego al back router")
                                    dispatch({
                                        type: "GET_ACCOUNT",
                                        payload: res
                                    })
                        })
                        .catch(err =>{
                            console.log("llego al back router y tiene un error a los datos ingresados")
                            dispatch({
                                type:"CREATE_USER_FAIL",
                                payload:err
                            })
                        })
        
    }
    }

export default getAccount;

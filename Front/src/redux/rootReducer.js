const isEmpty = require("is-empty");
const initState = {
    cities: [],
    FilterCities: [],
    Itinerary: [],
    Activity: [],
    Account: [],
    user: {},
    isAuthenticated: false
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'GET_CITIES': return {
            ...state,
            cities: action.payload,
            FilterCities: action.payload
        }
        case 'FILTER_CITIES': return {
            ...state,
            FilterCities: action.payload
        }
        case 'GET_ITINERARY': return {
            ...state,
            Itinerary: action.payload
        }
        case 'GET_ACTIVITIES': return {
            ...state,
            Activity: action.payload
        }
        case 'GET_ACCOUNT': return {
            ...state,
            Account: action.payload
        }
        case 'GET_LOGIN': return {
            ...state,
            Account: action.payload
        }
        case "SET_CURRENT_USER":
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                Account: action.payload
            }
        case "LOG_OUT":
            return {
                ...state,
                isAuthenticated: isEmpty(action.payload),
            }
        default: return state
    }

}

export default rootReducer;
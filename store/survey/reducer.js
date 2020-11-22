import { SurveyActionTypes } from './action'

const Reducer = (state, action) => {
    switch (action.type) {
        case SurveyActionTypes.SET_ITEMS:
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case SurveyActionTypes.SET_LANDING:
            console.log('reducer!', action.payload)
            return {
                ...state,
                landing: action.payload
            };
        case SurveyActionTypes.SET_FIELD:
            console.log('action.payload, ', action.payload)
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };

        default:
            return state
    }

}

export default Reducer;
import { SurveyActionTypes } from './action'
import update from 'immutability-helper';

const Reducer = (state, action) => {
    switch (action.type) {
        case SurveyActionTypes.SET_CONCERNS:
            return update(state, {
                concerns: { $set: action.payload }
            })
        case SurveyActionTypes.UPDATE_CONCERNS:
            const index = action.payload.index;
            const concern = state.concerns[index]
            const newConcern = update(concern, {
                selected: { $set: !concern.selected }
            })
            return update(state, {
                concerns: { $splice: [[index, 1, newConcern]] }
            })
        case SurveyActionTypes.SET_LANDING:
            return update(state, {
                landing: { $set: action.payload }
            })
        case SurveyActionTypes.SET_FIELD:
            return update(state, {
                [action.payload.name]: { $set: action.payload.value }
            })

        default:
            return state
    }
}

export default Reducer;
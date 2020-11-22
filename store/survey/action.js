// import fetch from 'isomorphic-unfetch';

export const SurveyActionTypes = {
    SET_FIELD: 'SET_FIELD',
    SET_ITEMS: 'SET_ITEMS'
}

export const fetchItems = () => async (dispatch) => {
    // const res = await fetch('https://badiairlines.herokuapp.com/aircrafts');
    // const payload = await res.json();

    // return dispatch({ type: SurveyActionTypes.SET_ITEMS, payload })
}

export const updateFormField = value => ({ type: SurveyActionTypes.SET_FIELD, payload: value });


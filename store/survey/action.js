import { createClient } from 'contentful';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const SurveyActionTypes = {
    SET_FIELD: 'SET_FIELD',
    SET_LANDING: 'SET_LANDING',
    SET_ITEMS: 'SET_ITEMS'
}

export const fetchItems = () => async (dispatch) => {
    // const res = await fetch('https://badiairlines.herokuapp.com/aircrafts');
    // const payload = await res.json();

    // return dispatch({ type: SurveyActionTypes.SET_ITEMS, payload })
}

export const fetchLanding = () => async (dispatch) => {
    const entries = await client.getEntries({
        content_type: 'landing', limit: 1
    });

    if (Array.isArray(entries.items)) {
        console.log('hola')
        return dispatch({ type: SurveyActionTypes.SET_LANDING, payload: entries.items[0].fields })
    }
};

export const updateFormField = value => ({ type: SurveyActionTypes.SET_FIELD, payload: value });


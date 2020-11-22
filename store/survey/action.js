import { createClient } from 'contentful';
const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export const SurveyActionTypes = {
    SET_FIELD: 'SET_FIELD',
    SET_LANDING: 'SET_LANDING',
    SET_CONCERNS: 'SET_CONCERNS',
    UPDATE_CONCERNS: 'UPDATE_CONCERNS'
}

export const fetchLanding = () => async (dispatch) => {
    const entries = await client.getEntries({
        content_type: 'landing', limit: 1
    });

    if (Array.isArray(entries.items)) {
        return dispatch({ type: SurveyActionTypes.SET_LANDING, payload: entries.items[0].fields })
    }
};

export const fetchConcerns = () => async (dispatch) => {
    const entries = await client.getEntries({
        content_type: 'concerns',
        order: 'sys.createdAt'
    });

    if (entries.items) {
        const items = entries.items.map((item, index) => ({
            index,
            title: item.fields.title,
            selected: false
        }))

        return dispatch({ type: SurveyActionTypes.SET_CONCERNS, payload: items })
    }
};

export const updateConcern = value => (dispatch) => dispatch({ type: SurveyActionTypes.UPDATE_CONCERNS, payload: value });

export const updateFormField = value => (dispatch) => dispatch({ type: SurveyActionTypes.SET_FIELD, payload: value });


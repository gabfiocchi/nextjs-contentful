const API_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export async function getAddresses(query) {
    const API_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${API_TOKEN}&cachebuster=1605744321747&autocomplete=true`;

    const res = await fetch(API_URL);

    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        // throw new Error('Failed to fetch API')
    }

    return json.features;
}
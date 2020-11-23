import styles from '../../styles/pages/location.module.scss';
import { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { updateFormField } from '../../store/survey/action';
import Link from 'next/link';
import { AutoComplete, Button, Grid, Page, Spacer, Text } from '@geist-ui/react';
import { getAddresses } from '../../lib/mapbox';
import Logo from '../../components/logo';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


const loadStore = () => {
    return useSelector(
        (state) => ({
            location: state.location,
        }),
        shallowEqual
    )
}

let map;
let marker;

const Location = () => {
    const { location } = loadStore();
    const dispatch = useDispatch();
    const [mapIsMounted, setMapIsMounted] = useState(false);
    const [addressAutocomplete, setAddressAutocomplete] = useState([]);
    const [addressRecommended, setAddressRecommended] = useState([]);
    const [searching, setSearching] = useState(false)
    const [address, setAddress] = useState();


    const handleMountMap = () => {
        if (mapIsMounted) {
            return;
        }

        setMapIsMounted(true);
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
        map = new mapboxgl.Map({
            container: "mapbox",
            style: "mapbox://styles/mapbox/streets-v11",
        });
    }

    const handleSelectedOption = (value) => {
        const selectedOption = addressRecommended.find(item => item.id === value);

        if (selectedOption.geometry.type === 'Point') {
            map.flyTo({
                zoom: 14,
                center: selectedOption.geometry.coordinates
            });

            if (marker) {
                marker.remove();
            }

            marker = new mapboxgl.Marker()
                .setLngLat(selectedOption.geometry.coordinates)
                .addTo(map);
        }

        updateFormField({
            name: 'location',
            value: selectedOption
        })(dispatch);
    }

    const AutoCompleteOption = (item) => (
        <AutoComplete.Option value={item.id}>
            <Grid.Container style={{ padding: '10pt 0' }}>
                {/* <Grid xs={24}>
                </Grid> */}
                <Text p className={styles.option}>
                    {item.place_name}
                </Text>
            </Grid.Container>
        </AutoComplete.Option>
    )

    const clearAddress = () => {
        updateFormField({
            name: 'location',
            value: null
        })(dispatch);
    }


    const handleSearch = async (currentValue) => {
        setAddress(currentValue);

        if (!currentValue) {
            clearAddress();
            setAddressAutocomplete([]);
            setAddressRecommended([]);
            return;
        }
        setSearching(true)

        handleMountMap();
        const resp = await getAddresses(address);

        if (resp && Array.isArray(resp)) {
            const customOptions = resp.map((item) => AutoCompleteOption(item));
            setAddressAutocomplete(customOptions);
            setAddressRecommended(resp);
        }
        setSearching(false);
    };

    return (
        <>
            <Page size="small">
                <Page.Header>
                    <Logo />
                </Page.Header>
                <Page.Content>

                    <Text h3>
                        ¿Cuál es la dirección de tu comercio o razon social?
                    </Text>
                    <AutoComplete
                        clearable
                        searching={searching}
                        options={addressAutocomplete}
                        onSearch={handleSearch}
                        onSelect={handleSelectedOption}
                        placeholder="Ingrese dirección"
                        value={location ? location.place_name : ''}
                        width="100%"
                    >
                        <AutoComplete.Searching>
                            <span>Buscando...</span>
                        </AutoComplete.Searching>
                        <AutoComplete.Empty>
                            <span>Sin resultados...</span>
                        </AutoComplete.Empty>
                    </AutoComplete>
                    <Spacer y={1} />
                    <div id="mapbox" className={styles.map} style={{ height: location && location.id ? 190 : 0, width: location && location.id ? '100%' : 0 }} />
                    <Spacer y={1} />
                    <Link href="/about-you/name">
                        <Button className="action" auto type="success" disabled={!location}>
                            Siguiente paso
                        </Button>
                    </Link>
                </Page.Content>
            </Page>
        </>
    )
}

export default Location
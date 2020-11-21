import styles from '../../styles/pages/location.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { AutoComplete, Button, Grid, Page, Spacer, Text } from '@geist-ui/react';
import { getAddresses } from '../../lib/mapbox';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



const Location = () => {
    const [mapIsMounted, setMapIsMounted] = useState(false);
    const [displayMap, setDisplayMap] = useState(false);
    const [addressRecommended, setAddressRecommended] = useState([]);
    const [searching, setSearching] = useState(false)
    const [address, setAddress] = useState();


    const handleMountMap = () => {
        if (mapIsMounted) {
            return;
        }

        setMapIsMounted(true);
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
        const map = new mapboxgl.Map({
            container: "mapbox",
            style: "mapbox://styles/mapbox/streets-v11",
        });
        console.log('handleMountMap', map)
    }


    const AutoCompleteOption = (id, label) => (
        <AutoComplete.Option value={id}>
            <Grid.Container style={{ padding: '10pt 0' }}>
                <Grid xs={24}>
                    {/*  TODO: Add word wrap. */}
                    <p span>{label}</p>
                </Grid>
                {/* <Grid.Container xs={24}>
                    <Grid xs><Text span>{label}</Text></Grid>
                    <Grid xs={4}><Badge type="success">Recommended</Badge></Grid>
                </Grid.Container> */}
            </Grid.Container>
        </AutoComplete.Option>
    )


    const handleSearch = async (currentValue) => {
        setAddress(currentValue);
        if (currentValue !== address && displayMap) {
            setDisplayMap(false);
        }
        if (!currentValue) {
            setDisplayMap(false);
            return setAddressRecommended([])
        }
        setSearching(true)
        setDisplayMap(true);

        console.log('currentValue', currentValue)
        handleMountMap();
        const resp = await getAddresses(address);
        console.log('resp', resp);

        if (resp && Array.isArray(resp)) {
            const customOptions = resp.map(({ id, place_name }) => AutoCompleteOption(id, place_name));
            setAddressRecommended(customOptions);
        }
        setSearching(false);
    };

    return (
        <>
            <Page size="small">
                <Page.Header>
                    <h2>Singular Cover</h2>
                </Page.Header>
                <Page.Content>

                    <Text h3>
                        ¿Cuál es la dirección de tu comercio o razon social?
                    </Text>
                    <AutoComplete
                        clearable
                        searching={searching}
                        options={addressRecommended}
                        onSearch={handleSearch}
                        placeholder="Ingrese dirección"
                        width="100%"
                    />
                    <Spacer y={1} />
                    <div id="mapbox" className={styles.map} style={{ height: displayMap ? 190 : 0, width: displayMap ? '100%' : 0 }} />
                    <Spacer y={1} />
                    <Link href="/about-you/name">
                        <Button className="action" auto type="success">
                            Siguiente paso
                        </Button>
                    </Link>
                </Page.Content>
                <Page.Footer>
                    <h2>Footer</h2>
                </Page.Footer>
            </Page>
        </>
    )
}

export default Location
import styles from '../../styles/Concerns.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Grid, Page, Spacer, Text } from '@geist-ui/react';
import { createClient } from 'contentful';
import Card from '../../components/card';

const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const Concerns = () => {
    async function fetchEntries() {
        const entries = await client.getEntries({
            content_type: 'concerns'
        })
        if (entries.items) {
            console.log('entries', entries.items);
            return entries.items;
        }
        console.log(`Error getting Entries for ${contentType.name}.`)
    }

    const [concerns, setConcerns] = useState([])

    useEffect(() => {
        const getConcerns = async () => {
            setConcerns(await fetchEntries())
        }
        getConcerns()
    }, [])


    return (
        <>
            <Page size="small">
                <Page.Header>
                    <h2>Singular Cover</h2>
                </Page.Header>
                <Page.Content>

                    <Text h3>
                        ¿Cuáles son tus inquietudes?
                    </Text>
                    <Grid.Container gap={2}>
                        {concerns.length > 0
                            ? concerns.map((item, index) => (
                                <Grid key={index} xs={12} sm={8} md={6}>
                                    <Card item={item} />
                                </Grid>
                            ))
                            : null}
                    </Grid.Container>
                    <Spacer y={1} />

                    <Link href="/about-you/location">
                        <Button className="action" auto type="success">
                            Siguiente paso
                        </Button>
                    </Link>

                    {/* <Grid>
                        <Link href="/about-you/location">
                            <Button className="action" auto type="success">
                                Go to Location
                            </Button>
                        </Link>
                    </Grid> */}
                </Page.Content>
                <Page.Footer>
                    <h2>Footer</h2>
                </Page.Footer>
            </Page>
        </>
    )
}

export default Concerns
import { Button, Grid, Page, Spacer, Text } from '@geist-ui/react';
import Card from '../components/card';
import Logo from '../components/logo';

const Price = () => {
    const concerns = [];
    return (
        <>
            <Page size="small">
                <Page.Header>
                    <Logo />
                </Page.Header>
                <Page.Content>

                    <Text h2>
                        👋 [name]!
                    </Text>
                    {/* Opciones seleccionadas */}
                    <Grid.Container gap={2}>
                        {concerns.length > 0
                            ? concerns.map((item, index) => (
                                <Grid key={index} xs={12} sm={8} md={6}>
                                    <Card item={item} />
                                </Grid>
                            ))
                            : null}
                    </Grid.Container>
                    <Text p>
                        Sugerencias para ti
                    </Text>
                    {/* Sugerencias */}
                </Page.Content>
                <Page.Footer>
                    <h2>Footer</h2>
                </Page.Footer>
            </Page>
        </>
    )
}

export default Price;
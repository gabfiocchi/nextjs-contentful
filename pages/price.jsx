
import { useSelector, shallowEqual } from 'react-redux';
import { Button, Grid, Page, Spacer, Text } from '@geist-ui/react';
import Card from '../components/card';
import Logo from '../components/logo';

const filterOptions = (options) => {
    console.log('options', options);
    return options.filter(item => item.selected)
}

const loadStore = () => {
    return useSelector(
        (state) => ({
            concerns: filterOptions(state.concerns),
            name: state.name
        }),
        shallowEqual
    )
}
const Price = () => {
    const { concerns, name } = loadStore()

    return (
        <>
            <Page size="small">
                <Page.Header>
                    <Logo />
                </Page.Header>
                <Page.Content>

                    <Text h2>
                        👋 {name}!
                    </Text>
                    <Grid.Container gap={1}>
                        {concerns.length > 0
                            ? concerns.map((item, index) => (
                                <Grid key={index} xs={8} sm={6} md={4}>
                                    <Card item={item} disabled="true" />
                                </Grid>
                            ))
                            : null}
                    </Grid.Container>
                    <Text p>
                        Sugerencias para ti
                    </Text>
                    {/* Sugerencias */}
                </Page.Content>
            </Page>
        </>
    )
}

export default Price;
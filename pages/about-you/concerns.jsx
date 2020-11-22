import { useSelector, shallowEqual } from 'react-redux'
import { fetchConcerns } from '../../store/survey/action';
import { initializeStore } from '../../store/store';
import styles from '../../styles/Concerns.module.scss';
import Link from 'next/link';
import { Button, Grid, Page, Spacer, Text } from '@geist-ui/react';
import Card from '../../components/card';
import Logo from '../../components/logo';

const loadStore = () => {
    return useSelector(
        (state) => ({
            concerns: state.concerns,
        }),
        shallowEqual
    )
}

const Concerns = () => {
    const { concerns } = loadStore()

    console.log('concerns', concerns)
    return (
        <>
            <Page size="small">
                <Page.Header>
                    <Logo />
                </Page.Header>
                <Page.Content>

                    <Text h3>
                        ¿Cuáles son tus inquietudes?
                    </Text>
                    <Grid.Container gap={2}>
                        {concerns.length > 0
                            ? concerns.map((item) => (
                                <Grid key={item.index} xs={12} sm={8} md={6}>
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

export const getServerSideProps = async () => {
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    await dispatch(fetchConcerns())

    return { props: { initialReduxState: reduxStore.getState() } }
}

export default Concerns
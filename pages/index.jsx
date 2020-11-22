import { useSelector, shallowEqual } from 'react-redux'
import { fetchLanding } from '../store/survey/action';
import { initializeStore } from '../store/store';
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { Button, Grid, Page, Text } from '@geist-ui/react';
import Logo from '../components/logo';

const loadStore = () => {
  return useSelector(
    (state) => ({
      content: state.landing,
    }),
    shallowEqual
  )
}


const HomePage = () => {
  const { content } = loadStore()

  return (
    <>
      <Page size="small">
        <Page.Header>
          <Logo />
        </Page.Header>
        <Page.Content>

          <Text h2>
            {content.title}
          </Text>

          <Text p>
            {content.subtitle}
          </Text>

          <Text p b>
            {content.text}
          </Text>
          <Grid>
            <Link href="/about-you/concerns">
              <Button className={styles.action} auto type="success">
                {content.action}
              </Button>
            </Link>
          </Grid>
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

  await dispatch(fetchLanding())

  return { props: { initialReduxState: reduxStore.getState() } }
}

export default HomePage;

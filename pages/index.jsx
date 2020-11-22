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

          <Text h2 size={36}>
            {content.title}
          </Text>

          <Text p size={14}>
            {content.subtitle}
          </Text>

          <Text p b size={18}>
            {content.text}
          </Text>
          <Grid>
            <Link href="/about-you/concerns">
              <Button className={styles.action} type="success">
                {content.action}
              </Button>
            </Link>
          </Grid>
        </Page.Content>
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

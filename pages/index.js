import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { Button, Grid, Page, Text } from '@geist-ui/react';
import { createClient } from 'contentful';


const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const HomePage = () => {
  async function fetchEntries() {
    const entries = await client.getEntries({
      content_type: 'landing',
      limit: 1
    })
    if (entries.items) {
      console.log('entries', entries.items[0].fields);
      return entries.items[0] && entries.items[0].fields;
    }
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [content, setContent] = useState([])

  useEffect(() => {
    const getContent = async () => {
      setContent(await fetchEntries())
    }
    getContent()
  }, [])
  return (
    <>
      <Page size="small">
        <Page.Header>
          <h2>Singular Cover</h2>
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

export default HomePage
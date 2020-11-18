import styles from '../../styles/Concerns.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Input, Page, Spacer, Text } from '@geist-ui/react';
import Card from '../../components/card';

const Location = () => {
    const [address, setAddress] = useState('');


    const handleClassChange = (event) => {
        console.log('event', event.target.value)
        setAddress(event.target.value);
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
                    <Input clearable placeholder="The Evil Rabbit" width="100%" onChange={handleClassChange} value={address} />
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
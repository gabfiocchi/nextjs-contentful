import styles from '../../styles/pages/location.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { Button, Input, Page, Spacer, Text } from '@geist-ui/react';
import Logo from '../../components/logo';

const Name = () => {
    return (
        <>
            <Page size="small">
                <Page.Header>
                    <Logo />
                </Page.Header>
                <Page.Content>

                    <Text h3>
                        ¿Cómo te llamas?
                    </Text>
                    <Input placeholder="Nombre y apellido" width="100%" />
                    <Spacer y={1} />
                    <Spacer y={1} />
                    <Link href="/about-you/contact">
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

export default Name
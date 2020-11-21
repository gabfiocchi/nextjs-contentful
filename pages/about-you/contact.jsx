import styles from '../../styles/pages/location.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { Button, Checkbox, Input, Page, Spacer, Text } from '@geist-ui/react';
import Logo from '../../components/logo';

const Contact = () => {
    return (
        <>
            <Page size="small">
                <Page.Header>
                    <Logo />
                </Page.Header>
                <Page.Content>

                    <Text h3>
                        Hola [name]
                    </Text>
                    <Text p>
                        ¿Te importa darnos tu número de teléfono y correo electrónico?
                    </Text>
                    <Input type="tel" placeholder="+34" width="100%" />
                    <Spacer y={.5} />
                    <Input type="email" placeholder="Correo electrónico" width="100%" />
                    <Text>
                        ¿Tienes algún codigo de descuento?
                    </Text>
                    <Checkbox checked={true}>
                        ¿Aceptas nuestra politica de privacidad?
                    </Checkbox>
                    <Checkbox checked={true}>
                        Acepto que me llamen, sólo a la hora que quiero
                    </Checkbox>
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

export default Contact;
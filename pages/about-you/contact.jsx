import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFormField } from '../../store/survey/action';
import Link from 'next/link';
import { Button, Checkbox, Input, Page, Spacer, Text } from '@geist-ui/react';
import Logo from '../../components/logo';
import DiscountModal from '../../components/discount-modal';
import styles from '../../styles/pages/location.module.scss';

const Contact = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const discountHandler = () => setIsOpen(true)
    const closeDiscountHandler = () => setIsOpen(false)
    const blurInput = (event) => {
        props.updateFormField({
            name: event.target.name,
            value: event.target.value
        });
    };

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

                    <Input name="phone" type="tel" placeholder="+34" width="100%" onBlur={blurInput} autoComplete="tel" />

                    <Spacer y={.5} />

                    <Input name="email" type="email" placeholder="Correo electrónico" width="100%" onBlur={blurInput} autoComplete="email" />

                    <Text size={14} onClick={discountHandler} className={styles.underline}>
                        ¿Tienes algún codigo de descuento?
                    </Text>

                    <DiscountModal open={isOpen} closeHandler={closeDiscountHandler} />

                    <Spacer y={1} />

                    <Checkbox checked={false} size="large" className={styles.underline}>
                        <Text size={14}>
                            ¿Aceptas nuestra politica de privacidad?
                        </Text>
                    </Checkbox>

                    <Spacer y={.5} />

                    <Checkbox checked={false} size="large">
                        <Text size={14}>
                            Acepto que me llamen, sólo a la hora que quiero
                        </Text>
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

const mapDispatchToProps = dispatch => ({
    updateFormField: bindActionCreators(updateFormField, dispatch)
})

export default connect(null, mapDispatchToProps)(Contact)

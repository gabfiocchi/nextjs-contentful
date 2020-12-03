import { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { updateFormField } from '../../store/survey/action';
import Link from 'next/link';
import { Button, Checkbox, Input, Page, Spacer, Text } from '@geist-ui/react';
import Logo from '../../components/logo';
import DiscountModal from '../../components/discount-modal';
import TermsModal from '../../components/terms-modal';
import styles from '../../styles/pages/location.module.scss';

const loadStore = () => {
    return useSelector(
        (state) => ({
            name: state.name,
            phone: state.phone,
            email: state.email,
        }),
        shallowEqual
    )
}

const Contact = () => {
    const { name, phone, email } = loadStore()
    const dispatch = useDispatch();

    const [isOpenDiscount, setIsOpenDiscount] = useState(false);
    
    const discountHandler = () => setIsOpenDiscount(true)
    const closeDiscountHandler = () => setIsOpenDiscount(false)
    
    const [acceptTime, setAcceptTime] = useState(false);
    const timeHandler = () => setAcceptTime(!acceptTime)
    
    const [isOpenTerms, setIsOpenTerms] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const termsModalHandler = () => setIsOpenTerms(true)
    const termsHandler = () => setAcceptTerms(!acceptTerms)
    const closeTermsHandler = () => setIsOpenTerms(false)

    const isDisabled = () => !acceptTerms || !acceptTime || !phone || !email;

    return (
        <>
            <Page size="small">
                <Page.Header>
                    <Logo />
                </Page.Header>
                <Page.Content>
                    <Text h3>
                        Hola {name}
                    </Text>

                    <Text p>
                        ¿Te importa darnos tu número de teléfono y correo electrónico?
                    </Text>

                    <Input value={phone} name="phone" type="tel" placeholder="+34" width="100%" onChange={blurInput} autoComplete="tel" />

                    <Spacer y={.5} />

                    <Input value={email} name="email" type="email" placeholder="Correo electrónico" width="100%" onChange={blurInput} autoComplete="email" />

                    <Text size={14} onClick={discountHandler} className={styles.underline}>
                        ¿Tienes algún codigo de descuento?
                    </Text>

                    <DiscountModal open={isOpenDiscount} closeHandler={closeDiscountHandler} />

                    <Spacer y={1} />

                    <Checkbox checked={acceptTerms} onClick={termsModalHandler} onChange={termsHandler} size="large" className={styles.underline}>
                        <Text size={14}>
                            ¿Aceptas nuestra politica de privacidad?
                        </Text>
                    </Checkbox>
                    <TermsModal open={isOpenTerms} closeHandler={closeTermsHandler} />

                    <Spacer y={.5} />

                    <Checkbox checked={acceptTime} onChange={timeHandler} size="large">
                        <Text size={14}>
                            Acepto que me llamen, sólo a la hora que quiero
                        </Text>
                    </Checkbox>

                    <Spacer y={1} />
                    <Spacer y={1} />

                    <Link href="/price">
                        <Button className="action" type="success" disabled={isDisabled()}>
                            Siguiente paso
                        </Button>
                    </Link>
                </Page.Content>
            </Page>
        </>
    )
}

export default Contact;

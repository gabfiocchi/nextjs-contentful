
import { useDispatch } from 'react-redux'
import { SurveyActionTypes } from '../../store/survey/action';
import Link from 'next/link';
import { Button, Input, Page, Spacer, Text } from '@geist-ui/react';
import Logo from '../../components/logo';


const Store = () => {
    const dispatch = useDispatch();

    return (payload) =>
        dispatch({
            type: SurveyActionTypes.SET_FIELD,
            payload
        });
};

const Name = () => {
    const updateFormField = Store()

    const blurInput = (event) => {
        updateFormField({
            name: event.target.name,
            value: event.target.value
        })
    };


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
                    <Input name="name" placeholder="Nombre y apellido" width="100%" onBlur={blurInput} autoComplete="name" />
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

export default Name;
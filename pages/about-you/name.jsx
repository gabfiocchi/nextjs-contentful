
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { updateFormField } from '../../store/survey/action';
import Link from 'next/link';
import { Button, Input, Page, Spacer, Text } from '@geist-ui/react';
import Logo from '../../components/logo';

const loadStore = () => {
    return useSelector(
        (state) => ({
            name: state.name,
        }),
        shallowEqual
    )
}

const Name = () => {
    const { name } = loadStore()
    const dispatch = useDispatch();

    const blurInput = (event) => updateFormField({
        name: event.target.name,
        value: event.target.value
    })(dispatch);

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
                    <Input value={name} name="name" placeholder="Nombre y apellido" width="100%" onChange={blurInput} autoComplete="name" />
                    <Spacer y={1} />
                    <Spacer y={1} />
                    <Link href="/about-you/contact">
                        <Button className="action" type="success" disabled={ !name }>
                            Siguiente paso
                        </Button>
                    </Link>
                </Page.Content>
            </Page>
        </>
    )
}

export default Name;
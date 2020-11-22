import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFormField } from '../../store/survey/action';
import Link from 'next/link';
import { Button, Input, Page, Spacer, Text } from '@geist-ui/react';
import Logo from '../../components/logo';

const Name = (props) => {
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


const mapDispatchToProps = dispatch => ({
    updateFormField: bindActionCreators(updateFormField, dispatch)
})

export default connect(null, mapDispatchToProps)(Name)
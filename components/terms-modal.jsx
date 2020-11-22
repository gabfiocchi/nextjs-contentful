
import { Modal } from '@geist-ui/react';


const TermsModal = ({ open, closeHandler }) => {
    return (
        <Modal open={open}>
            <Modal.Subtitle>Políticas de privacidad</Modal.Subtitle>
            <Modal.Content>
                <h2>What is Lorem Ipsum?</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Modal.Content>
            <Modal.Action passive onClick={closeHandler}>Cancelar</Modal.Action>
            <Modal.Action passive onClick={closeHandler}>Aceptar</Modal.Action>
        </Modal>
    )
};

export default TermsModal;
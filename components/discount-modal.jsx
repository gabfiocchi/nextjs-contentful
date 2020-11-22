
import { Input, Modal } from '@geist-ui/react';


const DiscountModal = ({ open, closeHandler }) => {
    return (
        <Modal open={open}>
            <Modal.Subtitle>Ingresa tu código</Modal.Subtitle>
            <Modal.Content>
                <Input name="name" placeholder="Código" width="100%" />
            </Modal.Content>
            <Modal.Action passive onClick={closeHandler}>Cancelar</Modal.Action>
            <Modal.Action passive onClick={closeHandler}>Aceptar</Modal.Action>
        </Modal>
    )
};

export default DiscountModal;
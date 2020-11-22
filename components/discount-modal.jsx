
import { Modal } from '@geist-ui/react';


const Logo = ({ open, closeHandler }) => {
    return (
        <div>
            <Modal open={open}>
                <Modal.Title>Modal</Modal.Title>
                <Modal.Subtitle>This is a modal</Modal.Subtitle>
                <Modal.Content>
                    <p>Some content contained within the modal.</p>
                </Modal.Content>
                <Modal.Action passive onClick={closeHandler}>Cancel</Modal.Action>
                <Modal.Action>Submit</Modal.Action>
            </Modal>
        </div>
    )
};

export default Logo;
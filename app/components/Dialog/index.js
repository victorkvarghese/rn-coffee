import * as React from 'react';
import { Paragraph, Button, Portal, Dialog, Colors } from 'react-native-paper';
import PropTypes from 'prop-types';

const UndismissableDialog = ({ visible, description, onSubmit, onCancel }) => (
    <Portal>
        <Dialog onDismiss={onCancel} visible={visible} dismissable={false}>
            <Dialog.Title>COFFEE</Dialog.Title>
            <Dialog.Content>
                <Paragraph>{description}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
                <Button color={Colors.grey500} onPress={onCancel}>
                    Cancel
                </Button>
                <Button primary onPress={onSubmit}>
                    OK
                </Button>
            </Dialog.Actions>
        </Dialog>
    </Portal>
);

UndismissableDialog.propTypes = {
    visible: PropTypes.bool,
    description: PropTypes.string,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func
};
export default UndismissableDialog;

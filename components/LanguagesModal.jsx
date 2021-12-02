import React from 'react'

import {Modal,Button, Text} from 'react-native'

function LanguagesModal ({item , isModal, setisModal}) {
    return (
        <Modal 
        visible={isModal} >
            <Text>Hii</Text>
            <Button onPress={() => setisModal(false)} title='Close Modal'></Button>
        </Modal>
    
    )
}

export default LanguagesModal

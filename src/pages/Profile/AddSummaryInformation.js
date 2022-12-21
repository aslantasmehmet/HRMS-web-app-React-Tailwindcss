import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Textarea
  } from '@chakra-ui/react'

export default function AddSummaryInformation() {
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
     
      const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
    
  return (
    <div>
    
       <label className='cursor-pointer'
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Özet Bilgi Ekle
      </label>
      
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Özet Bilgi Ekle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Textarea placeholder='' />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Kaydet</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

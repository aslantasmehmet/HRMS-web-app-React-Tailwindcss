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
    Input,
    Text
  } from '@chakra-ui/react'

export default function AddSkillInformation() {
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
     
      const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)


//   Input
  const [value, setValue] = React.useState('')
  const handleChange = (event) => setValue(event.target.value)
    
  return (
    <div>
           <label className='cursor-pointer'
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Yetenek Bilgisi Ekle
      </label>
      
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Yetenek Bilgisi Ekle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Yetenek'
        size='md'
      />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Ekle</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

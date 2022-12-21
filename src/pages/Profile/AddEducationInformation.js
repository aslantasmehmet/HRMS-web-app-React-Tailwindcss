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

export default function AddEducationInformation() {
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
        Eğitim Bilgisi Ekle
      </label>
      
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Eğitim Bilgisi Ekle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
      <Text mb='8px'>Üniversite Adı</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Üniversite'
        size='md'
      />
      <Text mb='8px'>Bölüm </Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Bölüm'
        size='md'
      />
      <Text mb='8px'>Başlangıç Tarihi</Text>
      <Input
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
      <Text mb='8px'>Mezuniyet Tarihi</Text>
      <Input
 placeholder="Select Date and Time"
 size="md"
 type="datetime-local"
/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Kaydet</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

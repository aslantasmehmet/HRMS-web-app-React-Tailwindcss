import React from "react";
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
  Select,
} from "@chakra-ui/react";

export default function AddLanguageInformation() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <div>
      <label
        className="cursor-pointer"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Yabancı Dİl Bilgisi Ekle
      </label>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Yabancı Dİl Bilgisi Ekle</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select placeholder="Dil Seçin">
              <option value="option1">İngilizce</option>
            </Select>
          </ModalBody>
          <ModalBody>
            <Select placeholder="Seviye">
              <option value="option1">Mükemmel</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Kaydet</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

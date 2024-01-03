/*
 * Copyright (c) 2023,
 * Walter de Oliveira Tenorio Ferreira, Thiago Lopes da Silva
 */
import React from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Text,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
  Icon,
  CloseIcon,
} from '@gluestack-ui/themed';

interface RodapeCadastroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RodapeCadastroModal: React.FC<RodapeCadastroModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} finalFocusRef={null}>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Cancelar?</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>Ao cancelar, você irá perder todos os dados!</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={onClose}>
            <ButtonText>Voltar</ButtonText>
          </Button>
          <Button
            size="sm"
            action="negative"
            borderWidth="$0"
            onPress={onClose}>
            <ButtonText>Cancelar</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RodapeCadastroModal;

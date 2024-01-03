import React from 'react';
import {HStack, Button, ButtonText} from '@gluestack-ui/themed';

const RodapeCadastroButtons = ({onOpenModal}) => {
  return (
    <HStack
      justifyContent="space-between"
      mt={30}
      bg="$warmGray200"
      padding={'$2'}>
      <Button action={'negative'} onPress={onOpenModal}>
        <ButtonText>Cancelar</ButtonText>
      </Button>
      <Button action={'positive'} variant={'solid'}>
        <ButtonText
          textTransform="uppercase"
          fontSize="$md"
          fontWeight="$bold"
          color="$white">
          Salvar
        </ButtonText>
      </Button>
    </HStack>
  );
};

export default RodapeCadastroButtons;

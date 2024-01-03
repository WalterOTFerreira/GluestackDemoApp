/*
 * Copyright (c) 2023,
 * Walter de Oliveira Tenorio Ferreira, Thiago Lopes da Silva
 */
import React from 'react';
import {HStack, VStack, Input, InputField, Text} from '@gluestack-ui/themed';

const CadastroNome = () => {
  return (
    <HStack>
      <VStack flex={2} width="100%" justifyContent="center">
        <Text>Nome</Text>
        <Input>
          <InputField placeholder="Nome do cliente" />
        </Input>
      </VStack>
      <VStack flex={2} width="100%" justifyContent="center">
        <Text>Sobrenome</Text>
        <Input>
          <InputField placeholder="Sobrenome do cliente" />
        </Input>
      </VStack>
    </HStack>
  );
};

export default CadastroNome;

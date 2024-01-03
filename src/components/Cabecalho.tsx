/*
 * Copyright (c) 2023,
 * Walter de Oliveira Tenorio Ferreira, Thiago Lopes da Silva
 */
import React from 'react';
import {Image, Heading} from '@gluestack-ui/themed';

interface CabecalhoProps {
  titulo: string;
}

const Cabecalho: React.FC<CabecalhoProps> = ({titulo}) => {
  return (
    <>
      <Image
        size="2xl"
        style={{aspectRatio: 2}}
        source={require('../../assets/logo.png')}
        alt="Logo"
      />
      <Heading color="$orange600" size="2xl">
        {titulo}
      </Heading>
    </>
  );
};

export default Cabecalho;

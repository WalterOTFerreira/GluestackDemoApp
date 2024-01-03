/*
 * Copyright (c) 2023,
 * Walter de Oliveira Tenorio Ferreira, Thiago Lopes da Silva
 */
import React from 'react';
import {
  HStack,
  Text,
  CircleIcon,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@gluestack-ui/themed';

const SelecaoPredio = () => {
  const [predio, setPredio] = React.useState('');
  return (
    <>
      <Text mt={20}>Local de trabalho</Text>
      <RadioGroup value={predio} onChange={setPredio}>
        <HStack space="2xl">
          <Radio value="Tiradentes">
            <RadioIndicator mr="$2">
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Tiradentes</RadioLabel>
          </Radio>
          <Radio value="Apolo">
            <RadioIndicator mr="$2">
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Apolo</RadioLabel>
          </Radio>
          <Radio value="Moinho">
            <RadioIndicator mr="$2">
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Moinho</RadioLabel>
          </Radio>
        </HStack>
      </RadioGroup>
    </>
  );
};

export default SelecaoPredio;

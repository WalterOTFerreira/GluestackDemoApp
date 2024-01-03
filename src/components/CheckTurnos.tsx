/*
 * Copyright (c) 2023,
 * Walter de Oliveira Tenorio Ferreira, Thiago Lopes da Silva
 */
import React from 'react';
import {
  Text,
  HStack,
  CheckIcon,
  CheckboxGroup,
  Checkbox,
  CheckboxIcon,
  CheckboxLabel,
  CheckboxIndicator,
} from '@gluestack-ui/themed';

const CheckTurnos = () => {
  const [values, setValues] = React.useState(['Manhã', 'Tarde']);
  return (
    <>
      <Text mt={20}>Turnos</Text>
      <CheckboxGroup
        value={values}
        onChange={keys => {
          setValues(keys);
        }}>
        <HStack space="3xl">
          <Checkbox value="Manhã" aria-label="Manhã">
            <CheckboxLabel>Manhã</CheckboxLabel>
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
          </Checkbox>
          <Checkbox value="Tarde" aria-label="Tarde">
            <CheckboxLabel>Tarde</CheckboxLabel>
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
          </Checkbox>
        </HStack>
      </CheckboxGroup>
    </>
  );
};

export default CheckTurnos;

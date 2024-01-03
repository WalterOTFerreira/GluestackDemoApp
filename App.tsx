/*
 * Copyright (c) 2023,
 * Walter de Oliveira Tenorio Ferreira, Thiago Lopes da Silva
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box, GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import Cabecalho from './src/components/Cabecalho';
import CadastroNome from './src/components/CadastroNome';
import SelecaoPredio from './src/components/SelecaoPredio';
import CheckTurnos from './src/components/CheckTurnos';
import RodapeCadastro from './src/components/RodapeCadastro';

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView>
        <Box>
          <Cabecalho titulo="Cadastro de Colaborador" />
          <CadastroNome />
          <SelecaoPredio />
          <CheckTurnos />
          <RodapeCadastro />
        </Box>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

export default App;

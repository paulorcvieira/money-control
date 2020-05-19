import React from 'react';

import Container from '../../Core/Container';

// SubComponents
import Chart from './Chart';
import List from './List';

const entrySummaryList = [
  {key: '1', description: 'Alimentação', amount: 200},
  {key: '2', description: 'Combustível', amount: 12},
  {key: '3', description: 'Aluguel', amount: 120},
  {key: '4', description: 'Lazer', amount: 250},
  {key: '5', description: 'Outros', amount: 1200},
];

const EntrySummary = () => {
  return (
    <Container
      title="Categorias"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <Chart />
      <List entrySummaryList={entrySummaryList} />
    </Container>
  );
};

export default EntrySummary;

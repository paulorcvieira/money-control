import React from 'react';
import {View, StyleSheet} from 'react-native';

// Components
import BalancePanel from '../../components/NewEntry/BalancePanel';
import ReportFilter from '../../components/Report/Filter';
import EntrySummary from '../../components/Main/EntrySummary';
import ReportButtons from '../../components/Report/Buttons';

const Report = () => {
  const currentBalance = 2164.35;

  const entrySummaryList = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 12},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 1200},
  ];

  const entryListReleases = [
    {key: '1', description: 'Padaria Mathias', amount: 10},
    {key: '2', description: 'Supermercados Tozetto', amount: 190},
    {key: '3', description: 'Posto Guri', amount: 200},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <ReportFilter />
      <EntrySummary entrySummaryList={entrySummaryList} />
      <ReportButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default Report;

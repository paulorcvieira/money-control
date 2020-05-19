import React from 'react';
import {View, StyleSheet} from 'react-native';

// SubComponents
import Value from './Value';

const BalancePanel = ({currentBalance}) => {
  return (
    <View style={styles.BalancePanel}>
      <View style={styles.LabelValue}>
        <Value currentBalance={currentBalance} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BalancePanel: {
    // flex: 1,
  },
  LabelValue: {
    alignItems: 'center',
  },
});

export default BalancePanel;

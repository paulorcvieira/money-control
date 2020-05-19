import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Pallet Colors
import Colors from '../../../styles/Colors';

// SubComponents
import Value from './Value';
import Chart from './Chart';

const BalancePanel = ({onNewEntryPress}) => {
  const currentBalance = 2164.35;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.BalancePanel}>
        <View style={styles.LabelValue}>
          <Value currentBalance={currentBalance} />
        </View>

        <Chart />
      </LinearGradient>
      <TouchableOpacity style={styles.addButton} onPress={onNewEntryPress}>
        <Icon name="add" size={35} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  BalancePanel: {
    paddingVertical: 10,
  },
  LabelValue: {
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: Colors.green,
    borderRadius: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    marginTop: -24,
    marginRight: 15,
  },
});

export default BalancePanel;

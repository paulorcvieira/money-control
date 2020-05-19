import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Pallet Colors
import Colors from '../../../../styles/Colors';

const Value = ({currentBalance}) => {
  return (
    <View>
      <Text style={styles.Label}>Saldo atual</Text>
      <Text style={styles.Value}>${currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Label: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.white,
    marginTop: 10,
    marginBottom: 10,
  },
  Value: {
    fontSize: 40,
    fontWeight: '200',
    color: Colors.white,
  },
});

export default Value;

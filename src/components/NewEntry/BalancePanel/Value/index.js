import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Value = ({currentBalance}) => {
  return (
    <View>
      <Text style={styles.Label}>Saldo atual</Text>
      <Text style={styles.Value}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Label: {
    fontSize: 18,
    fontWeight: '300',
    marginTop: 10,
    marginBottom: 10,
  },
  Value: {
    fontSize: 40,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Value;

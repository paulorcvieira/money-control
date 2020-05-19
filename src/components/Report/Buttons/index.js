import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const Buttons = () => {
  return (
    <View style={styles.ReportFilter}>
      <Button title="Salvar" />
      <Button title="Fechar" />
    </View>
  );
};

const styles = StyleSheet.create({
  ReportFilter: {
    // flex: 1,
  },
});

export default Buttons;

import React from 'react';
import {View, Picker, StyleSheet} from 'react-native';

const Filter = () => {
  return (
    <View style={styles.Filter}>
      <Picker>
        <Picker.Item label="Todas as Categorias" />
      </Picker>
      <Picker>
        <Picker.Item label="Últimos 7 dias" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  Filter: {
    // flex: 1,
  },
});

export default Filter;

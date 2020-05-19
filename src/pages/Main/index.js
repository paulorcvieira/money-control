import React from 'react';
import {View, StyleSheet} from 'react-native';

// Components
import BalancePanel from '../../components/Main/BalancePanel';
import EntrySummary from '../../components/Main/EntrySummary';
import EntryList from '../../components/Main/EntryList';

// Pallet Colors
import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel
        onNewEntryPress={() => {
          navigation.navigate('NewEntry');
        }}
      />
      <EntrySummary />
      <EntryList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: Colors.background,
  },
});

export default Main;

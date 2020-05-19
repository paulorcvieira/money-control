import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

import Container from '../../Core/Container';

import {getEntries} from '../../../services/Entries';

// Pallet Colors
import Colors from '../../../styles/Colors';

const EntryList = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }

    loadEntries();

    console.log('EntryList :: useEffect');
  }, []);

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={() => {}}>
      <View style={styles.EntContainerryList}>
        <FlatList
          data={entries}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View>
              <Text style={styles.Releases}>
                {item.description}: ${item.amount}
              </Text>
            </View>
          )}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  EntryList: {
    flex: 1,
    backgroundColor: Colors.asphalt,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    margin: 5,
    padding: 8,
  },
  Releases: {
    fontSize: 10,
    color: Colors.white,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;

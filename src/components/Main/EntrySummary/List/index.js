import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

// Pallet Colors
import Colors from '../../../../styles/Colors';

const List = ({entrySummaryList}) => {
  return (
    <View>
      <FlatList
        data={entrySummaryList}
        renderItem={({item}) => (
          <Text style={styles.List}>
            * {item.description} R${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  List: {
    fontSize: 12,
    color: Colors.white,
  },
});

export default List;

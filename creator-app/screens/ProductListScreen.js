import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Lipstick Set', description: 'High quality lipstick bundle' },
  { id: '2', name: 'Hair Clip Pack', description: 'Trendy hair accessories' },
  { id: '3', name: 'LED Mirror', description: 'Perfect for makeup lighting' },
  { id: '4', name: 'Mini Fan', description: 'Portable cooling fan' },
];

export default function ProductListScreen({ navigation }) {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('ProductDetail', { product: item }) // ✅ 已修复
      }
    >
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#eee',
    borderRadius: 8
  },
  text: { fontSize: 16 }
});
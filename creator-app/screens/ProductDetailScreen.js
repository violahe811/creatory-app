import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {

  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  desc: { fontSize: 16 }
});
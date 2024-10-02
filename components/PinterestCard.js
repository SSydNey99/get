import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const PinterestCard = ({ item }) => {
  const windowWidth = Dimensions.get('window').width;
  const cardWidth = windowWidth / 2 - 15;

  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={{ uri: item.image }} style={[styles.image, { height: item.height }]} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    borderRadius: 10,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PinterestCard;

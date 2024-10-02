import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image.src} style={styles.image} />
      <Text style={styles.title}>{image.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default DetailScreen;

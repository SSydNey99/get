import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import PinterestCard from '../components/PinterestCard';

export default function HomeScreen() {
  const [images, setImages] = useState([]);
  

  
  

  useEffect(() => {
    const fetchedImages = [
      { id: '1', image: 'https://i.pinimg.com/736x/dc/80/65/dc8065622d3c6c930521427c0e555925.jpg', height: 320, title: 'Vanitas                           ⋯' },
      { id: '2', image: 'https://i.pinimg.com/736x/d9/fc/7f/d9fc7f2df1d9633be5ab8bd0fba4ca8f.jpg', height: 320, title: 'Jeanne ❄️✨' },
      { id: '3', image: 'https://i.pinimg.com/736x/c8/2b/c2/c82bc2c1c19d7952d69e6045eec0833d.jpg', height: 200, title: '♨ᴠᴀɴíᴛᴀs' },
      { id: '4', image: 'https://i.pinimg.com/736x/23/93/cd/2393cd5900f529e0cc3e716476c0f753.jpg', height: 200, title: 'な | dominique ꜝꜞ' },
      { id: '5', image: 'https://i.pinimg.com/736x/96/cb/37/96cb375e30be4236a7c7070dcc9a4b72.jpg', height: 220, title: 'Choloe' },
      { id: '6', image: 'https://i.pinimg.com/736x/d5/8d/69/d58d69d918693fda328f780129eb2974.jpg', height: 220, title: 'vanitas no carte' },
    ];
    setImages(fetchedImages); 
  }, []);

 
  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
  data={images}
  renderItem={({ item }) => <PinterestCard item={item} />}
  keyExtractor={(item) => item.id}
  numColumns={2}
  contentContainerStyle={styles.grid}
  scrollEnabled={true}
/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  grid: {
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});

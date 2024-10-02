import React, { useState } from 'react';
import { View, TextInput, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const HomeScreen = ({ navigation }) => {
    const [images, setImages] = useState(initialImages);
  
    const handlePress = (image) => {
      navigation.navigate('Detail', { image });
    }
    };
  
  const searchSuggestions = [
    { id: 1, label: 'ภาพคู่', image: 'https://i.pinimg.com/564x/0d/f9/4d/0df94d3db6316c21072921b7bdb7d29a.jpg' },
    { id: 2, label: 'เจ้าชายอสูร', image: 'https://i.pinimg.com/564x/6c/c8/c3/6cc8c36258c31f1e2a1c3326a3b75199.jpg' },
    { id: 3, label: 'การ์ตูนสาว', image: 'https://i.pinimg.com/736x/5c/ae/d2/5caed274b718311ad5900e819d4aefce.jpg' },
    { id: 4, label: 'กราฟิกดีไซน์ญี่ปุ่น', image: 'https://i.pinimg.com/736x/76/d3/a3/76d3a3eea993631c6de63031597700b7.jpg' },
    { id: 5, label: 'ปราสาทเวทมนตร์ของฮาวล์', image: 'https://i.pinimg.com/564x/b7/da/01/b7da019f816d835c878dc3881244202f.jpg' },
    { id: 6, label: 'บันทึกการอ่าน', image: 'https://i.pinimg.com/564x/cd/f7/fb/cdf7fbd016a6500ccd083df0596e8cbb.jpg' },
    { id: 7, label: 'ภาพพื้นหลังส้ม', image: 'https://i.pinimg.com/736x/cc/3f/23/cc3f23297e917aaef077d9d786c93c0a.jpg' },
    { id: 8, label: 'แฟชั่นญี่ปุ่น', image: 'https://i.pinimg.com/564x/b0/3f/34/b03f34325ab56c9caea99c8fd4eb2146.jpg' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="ค้นหาไอเดีย"
        placeholderTextColor="#000000"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <ScrollView>
        <Text style={styles.sectionTitle}>ไอเดียสำหรับคุณ</Text>
        <View style={styles.grid}>
          {searchSuggestions.map(item => (
            <TouchableOpacity key={item.id} style={styles.item}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  searchBar: {
    backgroundColor: '#b3b3b3',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    margin: 10,
    color: '#050101',
  },
  sectionTitle: {
    color: '#050101',
    fontSize: 18,
    marginVertical: 10,
    marginLeft: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  item: {
    width: '45%',
    marginVertical: 10,
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  itemLabel: {
    color: '#e7e7e7',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default SearchScreen;

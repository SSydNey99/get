import React, { useState } from 'react';
import { View, TextInput, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const searchSuggestions = [
    { id: 1, label: 'ภาพคู่', image: 'https://i.pinimg.com/564x/e1/66/4e/e1664e0c98773776a0f6c14013a19586.jpg' },
    { id: 2, label: 'เจ้าชายอสูร', image: 'https://i.pinimg.com/564x/6c/c8/c3/6cc8c36258c31f1e2a1c3326a3b75199.jpg' },
    { id: 3, label: 'การ์ตูนสาว', image: 'https://i.pinimg.com/736x/5c/ae/d2/5caed274b718311ad5900e819d4aefce.jpg' },
    { id: 4, label: 'กราฟิกดีไซน์ญี่ปุ่น', image: 'https://i.pinimg.com/736x/76/d3/a3/76d3a3eea993631c6de63031597700b7.jpg' },
    { id: 5, label: 'ปราสาทเวทมนตร์ของฮาวล์', image: 'https://i.pinimg.com/564x/b7/da/01/b7da019f816d835c878dc3881244202f.jpg' },
    { id: 6, label: 'รูปสวย', image: 'https://i.pinimg.com/564x/f6/60/0b/f6600b3d27d596d3a5c26b17caed399e.jpg' },
    { id: 7, label: 'ไฮไลท์ ig คุมโทน', image: 'https://i.pinimg.com/564x/96/35/52/963552e4eedd4e741cfe5ad9b8c81063.jpg' },
    { id: 8, label: 'แฟชั่นญี่ปุ่น', image: 'https://i.pinimg.com/564x/b0/3f/34/b03f34325ab56c9caea99c8fd4eb2146.jpg' },
  ];

  // กรองรายการค้นหาตาม query
  const filteredSuggestions = searchSuggestions.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ฟังก์ชันเมื่อกดที่รายการค้นหา
  const handlePress = (item) => {
    navigation.navigate('Detail', { image: item.image, label: item.label });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="ค้นหาไอเดีย"
        placeholderTextColor="#555"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>ไอเดียสำหรับคุณ</Text>
        <View style={styles.grid}>
          {filteredSuggestions.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => handlePress(item)}
              accessibilityLabel={`ค้นหาไอเดีย: ${item.label}`}
              accessibilityHint={`ไปยังรายละเอียดของ ${item.label}`}
            >
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
          {filteredSuggestions.length === 0 && (
            <Text style={styles.noResultsText}>ไม่พบผลลัพธ์สำหรับ "{searchQuery}"</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // เปลี่ยนเป็นสีเทา
  },
  searchBar: {
    backgroundColor: '#f0f0f0', // สีเทาอ่อนสำหรับความสวยงาม
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    margin: 15,
    fontSize: 16,
    color: '#333333',
  },
  sectionTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 15,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  item: {
    width: '48%', // เล็กน้อยน้อยกว่า 50% เพื่อให้มีช่องว่างระหว่างรายการ
    marginBottom: 15,
    backgroundColor: '#fafafa', // สามารถปรับสีให้เข้ากับธีมได้
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 2, // สำหรับเงาบนอุปกรณ์ Android
    shadowColor: '#000', // สำหรับเงาบนอุปกรณ์ iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemImage: {
    width: '100%',
    height: 150,
  },
  itemLabel: {
    color: '#333333',
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
  },
  noResultsText: {
    color: '#000000',
    textAlign: 'center',
    width: '100%',
    marginTop: 20,
    fontSize: 16,
  },
});

export default SearchScreen;

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // นำเข้า Ionicons

const DetailScreen = ({ route, navigation }) => {
  const { image, label } = route.params;

  // สร้างข้อมูลที่เกี่ยวข้องกับแต่ละ label
  
  const details = {
    'ภาพคู่': {
      description: 'นี่คือไอเดียสำหรับการถ่ายภาพคู่ที่มีความหมายและน่าสนใจ',
      additionalImages: [
        'https://i.pinimg.com/736x/44/c2/42/44c2423b235626f4fc9c32c12cdf824c.jpg',
        'https://i.pinimg.com/736x/57/fe/bd/57febde45f531a773e85008ade45da60.jpg',
      ],
    },
    'เจ้าชายอสูร': {
      description: 'นี่คือไอเดียสำหรับการถ่ายภาพเจ้าชายอสูรที่มีเอกลักษณ์',
      additionalImages: [
        'https://i.pinimg.com/564x/78/19/42/7819428e72c8d38b23d545071373c600.jpg',
        'https://i.pinimg.com/564x/22/3b/4d/223b4d87eb980dbc7555f9dedabdc08d.jpg',
      ],
    },
    'การ์ตูนสาว': {
      description: 'นี่คือไอเดียสำหรับการถ่ายภาพการ์ตูนสาวที่น่ารัก',
      additionalImages: [
        'https://i.pinimg.com/736x/76/e2/bf/76e2bf5ffb77f8d22a04b7dd4f743688.jpg',
        'https://i.pinimg.com/736x/a7/71/f0/a771f0adbbce18618cf5353b76e39555.jpg',
      ],
    },
    'กราฟิกดีไซน์ญี่ปุ่น': {
      description: 'นี่คือไอเดียสำหรับการถ่ายภาพการ์ตูนสาวที่น่ารัก',
      additionalImages: [
        'https://i.pinimg.com/564x/87/3a/da/873adae041999df5ff0b3e7eb5d2fc05.jpg',
        'https://i.pinimg.com/564x/32/76/a8/3276a879922a7ec2006acb878da6e52f.jpg',
      ],
    },
    'ปราสาทเวทมนตร์ของฮาวล์': {
      description: 'นี่คือไอเดียสำหรับการถ่ายภาพการ์ตูนสาวที่น่ารัก',
      additionalImages: [
        'https://i.pinimg.com/564x/1b/9a/b5/1b9ab5c7c3a6d241325a6ff18ce935a9.jpg',
        'https://i.pinimg.com/564x/ad/50/91/ad5091506116fe12c2fae1baf509ad13.jpg',
      ],
    },
    'รูปสวย': {
      description: 'นี่คือไอเดียสำหรับการถ่ายภาพการ์ตูนสาวที่น่ารัก',
      additionalImages: [
        'https://i.pinimg.com/736x/54/72/4d/54724d86c17a787a882ec3bbb6fc22c9.jpg',
        'https://i.pinimg.com/736x/d8/74/b2/d874b21db9126d0c0e4df19661788706.jpg',
      ],
    },
    'ไฮไลท์ ig คุมโทน': {
      description: 'นี่คือไอเดียสำหรับการถ่ายภาพการ์ตูนสาวที่น่ารัก',
      additionalImages: [
        'https://i.pinimg.com/564x/03/55/b0/0355b0f1674b4c9bc9a77a3fb11f136d.jpg',
        'https://i.pinimg.com/564x/f3/a1/18/f3a11839ebf7602ec0f50582f27dbc33.jpg',
      ],
    },
    'แฟชั่นญี่ปุ่น': {
      description: 'นี่คือไอเดียสำหรับการถ่ายภาพการ์ตูนสาวที่น่ารัก',
      additionalImages: [
        'https://i.pinimg.com/736x/cb/e7/4d/cbe74d8d0d50d1a87a2a04313bfa569c.jpg',
        'https://i.pinimg.com/736x/90/c1/a0/90c1a032ee9f086db9bb65813fa4e7c3.jpg',
      ],
    },
    
    
    // เพิ่มข้อมูลใหม่ได้ที่นี่
  };

  const { description, additionalImages } = details[label] || { description: '', additionalImages: [] };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{label}</Text>
        </View>
        
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
        
        {/* แสดงภาพเพิ่มเติม */}
        <Text style={styles.additionalImagesTitle}>ภาพเพิ่มเติม:</Text>
        {additionalImages.map((img, index) => (
          <Image key={index} source={{ uri: img }} style={styles.additionalImage} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#000000', // ปรับให้เข้ากับธีม
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginTop: 10,
  },
  additionalImagesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 15,
    textAlign: 'center',
  },
  additionalImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
});

export default DetailScreen;

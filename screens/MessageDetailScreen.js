import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // นำเข้า Ionicons
import { useNavigation } from '@react-navigation/native'; // นำเข้า useNavigation

const MessageDetailScreen = ({ route }) => {
  const navigation = useNavigation(); // สร้าง navigation object
  const { image, title, time } = route.params; // ดึงข้อมูลจาก params

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>รายละเอียดข้อความ</Text>
      </View>

      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.description}>
        {/* เพิ่มรายละเอียดเพิ่มเติมเกี่ยวกับข้อความ */}
        นี่คือรายละเอียดเพิ่มเติมเกี่ยวกับข้อความนี้
      </Text>
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
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  time: {
    fontSize: 14,
    color: '#888',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default MessageDetailScreen;

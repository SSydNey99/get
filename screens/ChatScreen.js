import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
  const chatMessages = [
    { id: 1, image: 'https://i.pinimg.com/564x/b3/69/16/b369169101ac495969f34fab193e9164.jpg', title: 'หน้าฟีดหลักมีพินใหม่ๆ', time: '5 ชม.' },
    { id: 2, image: 'https://i.pinimg.com/564x/01/c3/d4/01c3d4c815d60c64578058c7ebddd713.jpg', title: 'ศิลปะการ์ตูน สำหรับคุณ', time: '22 ชม.' },
    { id: 3, image: 'https://i.pinimg.com/564x/c0/e1/de/c0e1de3465afa1736536af14f62c8b87.jpg', title: 'พินที่ได้รับแรงบันดาลใจจากคุณ', time: '1 ชม.' },
    { id: 4, image: 'https://i.pinimg.com/564x/87/df/6a/87df6ac877baf7e3360a8feec1a91d5a.jpg', title: 'ไอเดียสำหรับคุณ', time: '1 ชม.' },
    { id: 5, image: 'https://i.pinimg.com/564x/9a/0d/02/9a0d02bc0660d1ae3ee505de567e9d61.jpg', title: 'พินที่ได้รับแรงบันดาลใจจากคุณ', time: '2 ชม.' },
    { id: 6, image: 'https://i.pinimg.com/564x/e0/8a/67/e08a675a7422566a1d396dbf36eea09f.jpg', title: 'ไอเดียสำหรับคุณ', time: '2 ชม.' },
    { id: 7, image: 'https://i.pinimg.com/564x/43/4a/d8/434ad8864dd4b4ea60a61ccff6ecb947.jpg', title: 'พินที่ได้รับแรงบันดาลใจจากคุณ', time: '2 ชม.' },
    { id: 8, image: 'https://i.pinimg.com/564x/f0/b0/2f/f0b02f489b5b5c58d3ee0d877948dbbb.jpg', title: 'ไอเดียสำหรับคุณ', time: '3 ชม.' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {chatMessages.map(item => (
          <TouchableOpacity key={item.id} style={styles.messageContainer}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d0d0', // พื้นหลังสีดำ
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 16,
  },
  time: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
});

export default ChatScreen;

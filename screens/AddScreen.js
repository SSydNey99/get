import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function AddScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pins, setPins] = useState([]); // เก็บข้อมูลพิน
  const [image, setImage] = useState(null); // เก็บข้อมูลภาพที่เลือก

  // ฟังก์ชันเลือกภาพจากแกลเลอรี่
  const pickImage = async () => {
    // ขออนุญาตเข้าถึงแกลเลอรี่
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("คุณต้องอนุญาตให้แอปเข้าถึงแกลเลอรี่");
      return;
    }

    // เปิดแกลเลอรี่ให้ผู้ใช้เลือกภาพ
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri); // เก็บ URL ของภาพที่เลือก
      addPin(result.uri); // เรียกฟังก์ชันเพิ่มพินด้วยภาพที่เลือก
      setModalVisible(false); // ปิด modal หลังเพิ่มภาพ
    }
  };

  const addPin = (imageUri) => {
    // เพิ่มพินใหม่พร้อมกับภาพลงในลิสต์
    setPins([...pins, { id: pins.length + 1, imageUri }]);
    Alert.alert('พินถูกเพิ่มแล้ว', `พินใหม่ถูกเพิ่มเรียบร้อย!`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.openButton}>
        <Text style={styles.openButtonText}>เริ่มสร้างเลย</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <MaterialIcons name="close" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>เริ่มสร้างเลย</Text>
            <View style={styles.optionsContainer}>
              <View style={styles.option}>
                <TouchableOpacity onPress={pickImage}>
                  <FontAwesome5 name="thumbtack" size={24} color="white" />
                  <Text style={styles.optionText}>พิน</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.option}>
                <FontAwesome5 name="cut" size={24} color="white" />
                <Text style={styles.optionText}>พินปะติด</Text>
              </View>
              <View style={styles.option}>
                <FontAwesome5 name="border-all" size={24} color="white" />
                <Text style={styles.optionText}>บอร์ด</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* แสดงพินที่มีภาพ */}
      <View style={styles.pinsContainer}>
        {pins.map((pin) => (
          <View key={pin.id} style={styles.pin}>
            {pin.imageUri && <Image source={{ uri: pin.imageUri }} style={styles.pinImage} />}
            <Text style={styles.pinText}>พิน {pin.id}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  openButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
  },
  openButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    width: 300,
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  modalTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  option: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  optionText: {
    color: 'white',
    marginTop: 10,
    fontSize: 14,
  },
  pinsContainer: {
    marginTop: 20,
  },
  pin: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pinImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  pinText: {
    fontSize: 16,
    color: 'black',
  },
});

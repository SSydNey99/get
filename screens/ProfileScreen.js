import React from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const pins = [
    { id: 1, image: 'https://i.pinimg.com/564x/af/b3/87/afb38702b05630669b0d0a1e792b7917.jpg' },
    { id: 2, image: 'https://i.pinimg.com/564x/14/e4/98/14e49899512446206c3c875712d518b8.jpg' },
    { id: 3, image: 'https://i.pinimg.com/564x/27/59/1c/27591c613fea91d8310f1b30a7f425ad.jpg' },
    { id: 4, image: 'https://i.pinimg.com/564x/79/7f/02/797f02abaa206f156e7050ad2d47abee.jpg' },
    { id: 5, image: 'https://i.pinimg.com/564x/ea/15/5d/ea155d0da1d98c608b1d4798bf17aa4b.jpg' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Ionicons name="person-circle" size={50} color="#fff" />
        <Text style={styles.headerText}>Vier</Text>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTextActive}>พิน</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>บอร์ด</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="ค้นหาพินของคุณ"
          placeholderTextColor="#888"
        />
        <Ionicons name="add" size={24} color="#fff" />
      </View>

      <ScrollView>
        <View style={styles.grid}>
          {pins.map(pin => (
            <TouchableOpacity key={pin.id} style={styles.pinItem} onPress={() => navigation.navigate('ImageDetail', { image: pin.image })}>
              <Image source={{ uri: pin.image }} style={styles.pinImage} />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.footerText}>บันทึก {pins.length} พินแล้ว</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tab: {
    marginHorizontal: 20,
  },
  tabTextActive: {
    color: '#fff',
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  tabText: {
    color: '#888',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  pinItem: {
    width: '45%',
    marginVertical: 10,
  },
  pinImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  footerText: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default ProfileScreen;

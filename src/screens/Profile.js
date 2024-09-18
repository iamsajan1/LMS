import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'; // Import Animatable library

const Profile = () => {
  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <Animatable.View animation="fadeIn" style={styles.parentContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
         </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.container}>
        <Animatable.View animation="slideInUp">
          <View style={styles.profileContainer}>
            <View style={styles.avatar}>
              <Image
                source={{ uri: 'https://img.freepik.com/premium-vector/pretty-hijab-woman-side-profile-with-colorful-flower-bouquet_185694-1105.jpg' }}
                style={styles.avatarImage}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>Bhawna Kumari</Text>
              <Text style={styles.text}>DOB: 01/01/1990</Text>
              <Text style={styles.text}>Bhawna@gmail.com</Text>
            </View>
          </View>
        </Animatable.View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Communication Address</Text>
            <Text style={styles.cardText}>Radha Krishna Kunj collony  Amrit Steel Ghaziabad  Pincode 201001 uttar Pradesh India</Text>
          </View>
        </View>
        <View style={styles.settingOptionsContainer}>
          <View style={styles.gridItem}>
            <Icon name="envelope" size={20} color="#13591d" />
            <Text style={styles.iconText}>Bhawna@gmail.com</Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="phone" size={20} color="#13591d" />
            <Text style={styles.iconText}>+1234567890</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#e1f5e3',
  },
  header: {
    backgroundColor: '#e1f5e3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  backIcon: {
    marginRight: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 150,
    backgroundColor: '#fff',
    marginTop:40
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 10,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  text: {
    fontSize: 16,
    marginBottom: 3,
   },
  cardContainer: {
    marginBottom: 20,
    marginTop: 30,
  },
  card: {
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  cardText: {
    fontSize: 16,
   },
  settingOptionsContainer: {
    justifyContent: 'space-between',
  },
  gridItem: {
    alignItems: 'center',
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 5,
  },
  iconText: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#13591d',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: '50%',
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Profile;

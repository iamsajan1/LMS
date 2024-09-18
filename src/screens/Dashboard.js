import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { ProgressCircle } from 'react-native-svg-charts';
import { Icon, IconButton } from 'react-native-paper';
 const Dashboard = ({ studentName, courseName }) => {
  const handleMissedClassClick = () => {
    alert('You missed the last class. Clicked to view details.');
  };
  const courses = [
    { id: 1, name: 'Human Resource Management', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', progress: 60, pinned: false },
    { id: 2, name: 'Bachelor of Business', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', progress: 30, pinned: true },
    { id: 3, name: 'Finance Management  ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', progress: 30, pinned: true },
    { id: 4, name: 'Supply Chain and Logistics Management', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', progress: 30, pinned: true },
    { id: 5, name: 'Human Resource Management', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', progress: 30, pinned: true },
  ];  
  return (
    <ScrollView style={styles.container}>
    <View>
      <View>
        <Animatable.View animation="slideInUp" duration={1500}>
          <ImageBackground
            source={require('./../assets/BACK.png')}
            style={styles.backgroundImage}
          >
            <View style={styles.header}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.studentName}>Bhawna Kumari</Text>
              <Text style={styles.courseText}>MBA</Text>
            </View>
            <View style={styles.iconsContainer}>
              <TouchableOpacity style={styles.icon}>
                <MaterialIcons name="event" size={20} color="#13591d" />
                <Text style={styles.iconText}>10%</Text>
                <Text>Attendance</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <MaterialIcons name="star" size={20} color="#13591d" />
                <Text style={styles.iconText}>0</Text>
                <Text>Points</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <MaterialIcons name="assistant" size={20} color="#13591d" />
                <Text style={styles.iconText}>Platinum</Text>
                <Text>Level</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <MaterialIcons name="leaderboard" size={20} color="#13591d" />
                <Text style={styles.iconText}>31/360</Text>
                <Text>Rank</Text>
              </TouchableOpacity>
            </View>
            <Animatable.View animation="bounceIn" duration={1000} >

            <TouchableOpacity style={styles.card} onPress={handleMissedClassClick}>
  <Text style={styles.resumeClassLabel}>Resume Class</Text>
  <View style={styles.additionalInfoContainer}>
    <Image
      source={{ uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/website-video-pause-4782134-3979445.png' }} // Replace with your image URL
      style={styles.additionalInfoImage}
    />
    <View style={styles.additionalInfoContent}>
      <Text style={styles.courseName}>Course Name</Text>
      <Text style={styles.classDescription}>Short description of today's class</Text>
    </View>
  </View>
</TouchableOpacity>
</Animatable.View>
<Animatable.View animation="fadeInRight" duration={1000} style={{
     position: 'absolute',
    bottom: '60%',
    left:'35%',}} >
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/256/8662/8662298.png' }}
              style={styles.image}
            />
            </Animatable.View>
          </ImageBackground>
        </Animatable.View>
      </View>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', margin:10,}}>
      <Text style={styles.lable}>
        Your Courses
      </Text>
      <Text style={{color:'#13591d', fontWeight:'600'}}>
        See all{'>'}
      </Text>
    </View>
    <ScrollView showsHorizontalScrollIndicator={false}
    horizontal
    >
        {courses.map(course => (
          <Animatable.View key={course.id} animation="bounceIn" duration={1000} >
          <TouchableOpacity key={course.id} style={styles.courseItem}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            <View style={styles.courseDetails}>
            <Text>mandatory course</Text>
              <Text style={styles.courseName}>{course.name}</Text>
              <View style={styles.progressContainer}>
               
              </View>
              <TouchableOpacity style={styles.pinButton}>
                  <Icon  source={course.pinned ? 'pin-outline' : 'pin'} size={20} color="#13591d" />
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
          </Animatable.View>
        ))}
      </ScrollView>
      <View style={{flexDirection:'row', alignItems:'center',margin:10}}>
      <Text style={styles.lable}>
        Your Pending tasks
      </Text>
      <Text style={{ backgroundColor:'#f2fffc' , marginLeft:5,borderRadius:10,}}>14</Text>
      </View>
      <Animatable.View animation="flipInY" duration={1500}>
      <View style={styles.FooterContainer}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="assignment" size={30} color="#13591d" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Pending Tasks</Text>
        <Text style={styles.count}>14 Quiz</Text>
      </View>
    </View>
    </Animatable.View>
    </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  header: {
    marginBottom: 20,
  },
  backgroundImage: {
    opacity: 1,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#13591d',
  },
  studentName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#13591d',
  },
  courseText: {
    fontSize: 16,
    color: '#13591d',
    backgroundColor: '#f0f0f0', // Background color for the chip
    paddingHorizontal: 10, // Add some horizontal padding
    paddingVertical: 5, // Add some vertical padding
    borderRadius: 20, // Make it rounded
    width: '20%',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width:'50%',
    flexWrap:'wrap'
  },
  icon: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    color: '#555',
    fontWeight:'600'
  },
  card: {
    backgroundColor: '#f2fffc',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    marginBottom: 20,
  },

  image: {
    width: 250,
    height: 160,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: '60%',
    left:'35%',
  },
  resumeClassLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#13591d',
    marginBottom: 10,
  },
  additionalInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  additionalInfoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  additionalInfoContent: {
    flex: 1,
  },
  courseName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#13591d',
    marginBottom: 2,
    width:'90%'
  },
  classDescription: {
    fontSize: 14,
    color: '#555',
  },  
  courseItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginHorizontal:5,
    elevation:3,
    width: 250,
  },
  courseImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  courseDetails: {
    flex: 1,
    padding: 10,
  },

  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  pinButton: {
    padding: 5,
    backgroundColor:'#f0f0f0',
    borderRadius: 15,
    alignSelf:'flex-end',
    justifyContent:'flex-end',
    alignContent:'flex-end',
    alignItems:'flex-end'
  },
  lable:{
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#13591d',
  },
  iconContainer: {
    marginRight: 20,
  },
  textContainer: {
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#13591d',
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#13591d',
  },
  FooterContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor:'#f2fffc',
    width:'60%',borderRadius: 10,elevation:2,margin:10, marginBottom:30
  }
});

export default Dashboard;

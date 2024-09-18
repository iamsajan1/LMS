import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Animated } from 'react-native';

const coursesData = [
  { id: 1, name: 'Human Resource Management', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', mandatory: true, started: false },
  { id: 2, name: 'Bachelor of Business', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', mandatory: true, started: false },
  { id: 3, name: 'Human Resource Management', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', mandatory: true, started: false },
  { id: 4, name: 'Bachelor of Business', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', mandatory: true, started: false },
  { id: 5, name: 'Human Resource Management', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', mandatory: true, started: false },
  { id: 6, name: 'Human Resource Management', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOtPP9yICuHhUtsiLrAPHuEOn_grytrxETA&s', mandatory: true, started: false },
];

const Courses = () => {
  const [scrollY] = useState(new Animated.Value(0));

  const renderCourseItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <Text style={styles.courseName}>{item.name}</Text>
      {item.mandatory && <Text style={styles.tag}>Mandatory Course</Text>}
      <View style={styles.divider} />
      {!item.started && <Text style={styles.tagBottom}>Yet to Start</Text>}
    </View>
  );

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [150, 50],
    extrapolate: 'clamp',
  });

  const headerFontSize = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [24, 16],
    extrapolate: 'clamp',
  });

  const headerLeft = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [20, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
         <Animated.Text style={[styles.headerText, { fontSize: headerFontSize, marginLeft: headerLeft }]}>Courses</Animated.Text>
      </Animated.View>
      <View style={{paddingTop:30, borderTopLeftRadius:50}}>
      <FlatList
        data={coursesData}
        renderItem={renderCourseItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 150 }} 
        
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   },
  header: {
    backgroundColor: '#e1f5e3',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
  },
  courseItem: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  courseImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 10,
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#13591d',
    marginBottom: 5,
  },
  tag: {
    fontSize: 12,
    color: 'green',
    marginBottom: 5,
    backgroundColor: '#f2fffc',
    padding: 5,
    borderRadius: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    marginVertical: 10,
  },
  tagBottom: {
    fontSize: 12,
    color: '#6a62f5',
    marginBottom: 5,
    backgroundColor: '#d0cef5',
    padding: 5,
    borderRadius: 10,
  },
});

export default Courses;

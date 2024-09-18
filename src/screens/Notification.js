import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Animated } from 'react-native';

const dummyNotifications = [
  { id: 1, title: 'New Message', message: 'You have received a new message.' },
  { id: 2, title: 'Reminder', message: "Don't forget to complete your tasks for today." },
  { id: 3, title: 'Event Reminder', message: 'Tomorrow is the company meeting at 10 AM.' },
  { id: 4, title: 'New Feature', message: 'Check out our latest feature update!' },
  { id: 5, title: 'New Message', message: 'You have received a new message.' },
  { id: 6, title: 'Reminder', message: "Don't forget to complete your tasks for today." },
  { id: 7, title: 'Event Reminder', message: 'Tomorrow is the company meeting at 10 AM.' },
  { id: 8, title: 'New Feature', message: 'Check out our latest feature update!' },
  { id: 9, title: 'New Message', message: 'You have received a new message.' },
  { id: 10, title: 'Reminder', message: "Don't forget to complete your tasks for today." },
  { id: 345, title: 'Event Reminder', message: 'Tomorrow is the company meeting at 10 AM.' },
  { id: 421, title: 'New Feature', message: 'Check out our latest feature update!' },
];

const Notification = () => {
  const [scrollY] = useState(new Animated.Value(0));

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
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
        <Animated.Text style={[styles.headerText, { fontSize: headerFontSize, marginLeft: headerLeft }]}>Notifications</Animated.Text>
      </Animated.View>
      <View style={{ backgroundColor:'#fff' }}>
        <FlatList
          data={dummyNotifications}
          renderItem={renderNotificationItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1f5e3',
  },
  listContainer: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  notificationItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  notificationTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    color: '#555',
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
});

export default Notification;

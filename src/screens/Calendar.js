import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const CalendarScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState(4); // April (1-indexed)
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedDate, setSelectedDate] = useState(null);
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleDatePress = (date) => {
    setSelectedDate(date);
    setFeedbackMessage(''); // Clear previous feedback message
  };

  const handleMonthChange = (increment) => {
    const newMonth = selectedMonth + increment;
    if (newMonth < 1 || newMonth > 12) return;
    setSelectedMonth(newMonth);
    setFeedbackMessage('');
  };

  const handleYearChange = (increment) => {
    const newYear = selectedYear + increment;
    setSelectedYear(newYear);
    setFeedbackMessage('');
  };

  const handleAddTask = () => {
    if (!taskInput.trim()) {
      setFeedbackMessage('Task input cannot be empty');
      return;
    }
    if (!selectedDate) {
      setFeedbackMessage('Please select a date');
      return;
    }
    const newTask = { date: selectedDate, task: taskInput };
    setTasks([...tasks, newTask]);
    setTaskInput('');
    setFeedbackMessage('Task added successfully');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${getMonthName(selectedMonth)} ${selectedYear}`}</Text>
      <View style={styles.navigationContainer}>
        <TouchableOpacity onPress={() => handleMonthChange(-1)}>
          <Text style={styles.navigationButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.navigationText}>{getMonthName(selectedMonth)}</Text>
        <TouchableOpacity onPress={() => handleMonthChange(1)}>
          <Text style={styles.navigationButton}>{'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleYearChange(-1)}>
          <Text style={styles.navigationButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.navigationText}>{selectedYear}</Text>
        <TouchableOpacity onPress={() => handleYearChange(1)}>
          <Text style={styles.navigationButton}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.daysContainer}>
        <View style={styles.weekRow}>
          <Text style={styles.weekDay}>Sun</Text>
          <Text style={styles.weekDay}>Mon</Text>
          <Text style={styles.weekDay}>Tue</Text>
          <Text style={styles.weekDay}>Wed</Text>
          <Text style={styles.weekDay}>Thu</Text>
          <Text style={styles.weekDay}>Fri</Text>
          <Text style={styles.weekDay}>Sat</Text>
        </View>
        {[...Array(getDaysInMonth(selectedMonth, selectedYear)).keys()].map((day) => (
          <TouchableOpacity key={day} onPress={() => handleDatePress(day + 1)}>
            <Text style={[styles.calendarDay, selectedDate === day + 1 && styles.selectedDate]}>
              {day + 1}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedDate && (
        <View style={styles.taskContainer}>
          <TextInput
            style={styles.taskInput}
            placeholder="Add a task..."
            value={taskInput}
            onChangeText={setTaskInput}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      )}
      {feedbackMessage ? <Text style={styles.feedbackMessage}>{feedbackMessage}</Text> : null}
      <ScrollView style={styles.taskList}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.taskItem}>
            <Text style={styles.taskDate}>Date: {task.date}</Text>
            <Text style={styles.taskText}>Task: {task.task}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  navigationButton: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  navigationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  weekDay: {
    width: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  calendarDay: {
    width: 40,
    textAlign: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 5,
    borderRadius: 5,
  },
  selectedDate: {
    backgroundColor: 'lightblue',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  taskInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  feedbackMessage: {
    textAlign: 'center',
    marginBottom: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  taskList: {
    flexGrow: 1,
  },
  taskItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskDate: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskText: {
    marginBottom: 5,
  },
});

// Helper functions
const getMonthName = (month) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  return monthNames[month - 1];
};

const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

export default CalendarScreen;

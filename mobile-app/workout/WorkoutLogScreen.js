import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/common/Card';

const WorkoutLogScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Workout Log</Text>
      
      <Card>
        <Text style={styles.sectionTitle}>Today's Workout</Text>
        <View style={styles.exerciseRow}>
          <Text style={styles.exerciseName}>Bench Press</Text>
          <Text style={styles.exerciseStats}>3 x 8 @ 185 lbs</Text>
        </View>
        <View style={styles.exerciseRow}>
          <Text style={styles.exerciseName}>Pull Ups</Text>
          <Text style={styles.exerciseStats}>3 x 10</Text>
        </View>
        <View style={styles.exerciseRow}>
          <Text style={styles.exerciseName}>Squat</Text>
          <Text style={styles.exerciseStats}>4 x 6 @ 225 lbs</Text>
        </View>
        <View style={styles.exerciseRow}>
          <Text style={styles.exerciseName}>Plank</Text>
          <Text style={styles.exerciseStats}>3 x 1 min</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Notes</Text>
        <Text style={styles.notesText}>
          Felt strong on squats, but struggled with last set of bench press. Need to focus on form for pull ups.
        </Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18181b',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#60a5fa',
    marginBottom: 8,
  },
  exerciseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  exerciseName: {
    color: '#fbbf24',
    fontSize: 16,
  },
  exerciseStats: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  notesText: {
    color: '#d1d5db',
    fontSize: 16,
    marginTop: 4,
  },
});

export default WorkoutLogScreen; 
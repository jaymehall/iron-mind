import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>IronMind.ai</Text>
        <Text style={styles.subtitle}>Your AI-powered fitness companion</Text>
      </View>

      <Card style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        <Button
          title="Start Workout"
          onPress={() => navigation.navigate('WorkoutLog')}
          style={styles.actionButton}
        />
        
        <Button
          title="Log Meal"
          onPress={() => navigation.navigate('ImageUpload')}
          style={styles.actionButton}
        />
        
        <Button
          title="Chat with Coach"
          onPress={() => navigation.navigate('Chatbot')}
          style={styles.actionButton}
        />
        
        <Button
          title="View Progress"
          onPress={() => navigation.navigate('Progress')}
          style={styles.actionButton}
        />
      </Card>

      <Card style={styles.stats}>
        <Text style={styles.sectionTitle}>Today's Stats</Text>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Calories:</Text>
          <Text style={styles.statValue}>1,850 / 2,200</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Protein:</Text>
          <Text style={styles.statValue}>120g / 150g</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Workouts:</Text>
          <Text style={styles.statValue}>1 this week</Text>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  quickActions: {
    marginBottom: 20,
  },
  stats: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  actionButton: {
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default HomeScreen; 
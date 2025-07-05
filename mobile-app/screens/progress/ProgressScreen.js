import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/common/Card';

const ProgressScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Progress</Text>
      
      <Card>
        <Text style={styles.sectionTitle}>This Week</Text>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Workouts:</Text>
          <Text style={styles.statValue}>3</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Total Time:</Text>
          <Text style={styles.statValue}>4h 30m</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Avg. Calories:</Text>
          <Text style={styles.statValue}>2,150</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Body Metrics</Text>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Weight:</Text>
          <Text style={styles.statValue}>180.5 lbs</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Body Fat:</Text>
          <Text style={styles.statValue}>12.5%</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Muscle Mass:</Text>
          <Text style={styles.statValue}>158.4 lbs</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Strength Progress</Text>
        <View style={styles.statRow}>
          <Tex 
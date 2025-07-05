import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/common/Card';

const NutritionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nutrition</Text>
      
      <Card>
        <Text style={styles.sectionTitle}>Today's Summary</Text>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Calories Consumed:</Text>
          <Text style={styles.statValue}>2,100 kcal</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Calories Remaining:</Text>
          <Text style={styles.statValue}>400 kcal</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Macros</Text>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Protein:</Text>
          <Text style={styles.statValue}>160g</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Carbs:</Text>
          <Text style={styles.statValue}>220g</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Fat:</Text>
          <Text style={styles.statValue}>60g</Text>
        </View>
      </Card>

      <Card>
        <Text style={styles.sectionTitle}>Recent Meals</Text>
        <View style={styles.mealRow}>
          <Text style={styles.mealName}>Chicken & Rice</Text>
          <Text style={styles.mealCals}>550 kcal</Text>
        </View>
        <View style={styles.mealRow}>
          <Text style={styles.mealName}>Greek Yogurt & Berries</Text>
          <Text style={styles.mealCals}>200 kcal</Text>
        </View>
        <View style={styles.mealRow}>
          <Text style={styles.mealName}>Salmon & Veggies</Text>
          <Text style={styles.mealCals}>600 kcal</Text>
        </View>
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
    color: '#34d399',
    marginBottom: 8,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  statLabel: {
    color: '#d1d5db',
    fontSize: 16,
  },
  statValue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  mealName: {
    color: '#fbbf24',
    fontSize: 16,
  },
  mealCals: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default NutritionScreen; 
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList /* better performance than ScrollView for infinite or long lists */,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (newGoal) => {
    //console.log(enteredGoal);
    //the code below is NOT GUARANTEE
    //setCourseGoals([...courseGoals, enteredGoal]);

    //the code below is ALWAYS GUARANTEE
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      //enteredGoal,
      { id: Math.random().toString(), goal: newGoal }, //key required for FlatList
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.goal}
            onDelete={() => console.log(itemData.item.id, itemData.item.goal)}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  //for top-level View
  screen: {
    padding: 50,
  },
});

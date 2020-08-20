import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  // Text,
  View,
  // TextInput,
  Button,
  // ScrollView,
  FlatList /* better performance than ScrollView for infinite or long lists */,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (newGoal) => {
    //console.log(enteredGoal);
    //the code below is NOT GUARANTEE
    //setCourseGoals([...courseGoals, enteredGoal]);

    //the code below is ALWAYS GUARANTEE
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      //enteredGoal,
      { id: Math.random().toString(), val: newGoal }, //key required for FlatList
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.val}
            //onDelete={() => console.log(itemData.item.id, itemData.item.goal)}
            onDelete={removeGoalHandler}
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

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

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    //console.log(enteredGoal);
    //the code below is NOT GUARANTEE
    //setCourseGoals([...courseGoals, enteredGoal]);

    //the code below is ALWAYS GUARANTEE
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      //enteredGoal,
      { id: Math.random().toString(), goal: enteredGoal }, //key required for FlatList
    ]);

    setEnteredGoal("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      {/*
      <ScrollView>
        {courseGoals.map((goal) => (
          //since Text does not allow too much styling, we are using View as a wrapper
          <View style={styles.goalListItem} key={goal}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
*/}
      {/* 
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.goalListItem}>
            <Text>{itemData.item.goal}</Text>
          </View>
        )}
      /> */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.goal} />}
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

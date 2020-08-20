import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  const { id, onDelete } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      //onPress={onDelete.bind(this, id)}
      onPress={() => onDelete(id)}
    >
      <View style={styles.goalListItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalListItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;

import React from "react";
import { View, Text } from "react-native";

const renderItems = items => {
  return items.map(item => <Text>{item}</Text>);
};

const renderExpenses = items => {
  return items.map(item => <Text>{`${item.category} : ${item.cost}`}</Text>);
};

const ActivityList = props => {
  return (
    <View>
      <Text>{props.title}</Text>
      {props.title === "Expenses"
        ? renderExpenses(props.data)
        : renderItems(props.data)}
    </View>
  );
};

export default ActivityList;

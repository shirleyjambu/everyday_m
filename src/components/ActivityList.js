import React from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const renderItems = items => {
  return items.map((item, index) => <Text key={index}>{item}</Text>);
};

const renderExpenses = items => {
  return items.map((item, index) => (
    <Text key={index}>{`${item.category} : ${item.cost}`}</Text>
  ));
};

const ActivityList = props => {
  const { title, data } = props;
  return (
    <Card>
      <CardSection>
        <View>
          <Text>{title}</Text>
        </View>
      </CardSection>
      <CardSection>
        <View style={styles.hStyle}>
          {title === "Expenses" ? renderExpenses(data) : renderItems(data)}
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  hStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  }
};

export default ActivityList;

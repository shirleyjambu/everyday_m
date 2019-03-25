import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "react-native-axios";
import Header from "./../components/Header";
import ActivityList from "./../components/ActivityList";
import VoiceButton from "../components/VoiceButton";

export default class Everyday extends Component {
  state = {
    isLoggedIn: true,
    user_id: "",
    email: "",
    schedule: [],
    expenses: [],
    buy: [],
    theme: "dark",
    icon: "toggle-on"
  };

  componentWillMount() {
    axios
      .get("https://evryday.herokuapp.com/api/user/guest@gmail.com")
      .then(res => {
        console.log(res);
        this.setState({
          user_id: res.data._id,
          email: res.data.email,
          schedule: res.data.schedule,
          expenses: res.data.expenses,
          buy: res.data.buy
        });
      });
  }

  render() {
    const { buy, schedule, expenses } = this.state;
    return (
      <ScrollView>
        <Header headerText="Hey Tanish!" />
        <VoiceButton />
        <ActivityList title="Schedule" data={schedule} />
        <ActivityList title="Expenses" data={expenses} />
        <ActivityList title="Shopping List" data={buy} />
      </ScrollView>
    );
  }
}

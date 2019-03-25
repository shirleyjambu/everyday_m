import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Voice from "react-native-voice";

export default class VoiceControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: "",
      started: "",
      results: []
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
  onSpeechStart(e) {
    this.setState({
      started: "√"
    });
  }
  onSpeechRecognized(e) {
    alert("Speech regn");
    this.setState({
      recognized: "√"
    });
  }
  onSpeechResults(e) {
    alert(e.value);
    this.setState({
      results: e.value
    });
  }
  async _startRecognition(e) {
    this.setState({
      recognized: "",
      started: "",
      results: []
    });
    try {
      await Voice.start("en-US");
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.transcript}>Transcript</Text>
        {this.state.results.map((result, index) => (
          <Text style={styles.transcript}> {result}</Text>
        ))}
        <Button
          style={styles.transcript}
          onPress={this._startRecognition.bind(this)}
          title="Start"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: "center",
    color: "#000000",
    marginBottom: 1
  }
});

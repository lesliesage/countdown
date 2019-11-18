import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

class App extends Component {
  state = {
    startDate: null,
    difFromStart: 0,
    difFromEnd: 0,
    percent: 0
  };
  handleChange = date => {
    const endDate = new Date("2020-07-01T21:00:00");
    this.setState({
      startDate: date.setTime(date.getTime() + 1000 * 60 * 60 * 9),
      difFromStart: ((new Date() - date) / (1000 * 60 * 60 * 24)).toFixed(1),
      difFromEnd: ((endDate - new Date()) / (1000 * 60 * 60 * 24)).toFixed(1),
      percent: ((new Date() - date) / (endDate - date)) * 100
    });
  };

  render() {
    return (
      <div className="App">
        <h1>The SCOTUS Clerkship Calculator</h1>
        <p>Enter your start date:</p>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        {this.state.startDate ? (
          <div>
            {console.log("Start Date: ", new Date(this.state.startDate))}
            <p>
              {this.state.difFromStart} days down, {this.state.difFromEnd} days
              to go.
            </p>
            <p>
              You're {this.state.percent.toFixed(1)}% of the way to July 1st.
            </p>
            <img
              src={require("./light.jpg")}
              alt="Light at the end of the tunnel"
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

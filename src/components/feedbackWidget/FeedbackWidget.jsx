import { Button } from './FeedbackWidgetStyles';
import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //additional methods
  countTotalFeedback = () => {
    this.setState(() => {
      return {
        total: this.state.good + this.state.bad + this.state.neutral + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(() => {
      console.log(this.state.good, this.state.total);
      return {
        positiveFeedback: (
          ((this.state.good + 1) / (this.state.total + 1)) *
          100
        ).toFixed(0),
      };
    });
  };

  // feedbackCounters
  goodCounter = () => {
    for (let i = 0; i < 1; i += 1) {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  neutralCounter = () => {
    for (let i = 0; i < 1; i += 1) {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  badCounter = () => {
    for (let i = 0; i < 1; i += 1) {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <Button type="button" onClick={this.goodCounter}>
          Good
        </Button>
        <Button type="button" onClick={this.neutralCounter}>
          Neutral
        </Button>
        <Button type="button" onClick={this.badCounter}>
          Bad
        </Button>

        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.state.total} </li>
          <li>Positive Feedback: {this.state.positiveFeedback}%</li>
        </ul>
      </>
    );
  }
}

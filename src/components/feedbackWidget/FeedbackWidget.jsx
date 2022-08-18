import { Button } from './FeedbackWidgetStyles';
import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodCounter = () => {
    for (let i = 0; i < 1; i += 1) {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    }
  };
  neutralCounter = () => {
    for (let i = 0; i < 1; i += 1) {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    }
  };
  badCounter = () => {
    for (let i = 0; i < 1; i += 1) {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }
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
        </ul>
      </>
    );
  }
}

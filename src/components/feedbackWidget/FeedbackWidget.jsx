import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

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
    this.setState(prevState => {
      return {
        positiveFeedback: ((prevState.good / prevState.total) * 100).toFixed(0),
      };
    });
  };

  // feedback counters
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
    const { good, neutral, bad, total, positiveFeedback } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.goodCounter} onLeaveFeedback="Good" />
          <FeedbackOptions
            options={this.neutralCounter}
            onLeaveFeedback="Neutral"
          />
          <FeedbackOptions options={this.badCounter} onLeaveFeedback="Bad" />
        </Section>

        <Section title="Statistics">
          {total === undefined ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}

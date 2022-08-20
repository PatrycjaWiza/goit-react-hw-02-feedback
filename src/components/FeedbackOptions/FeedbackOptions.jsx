import { Button } from './FeedbackWidgetStyles';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        <Button type="button" onClick={options}>
          {onLeaveFeedback}
        </Button>
      </>
    );
  }
}

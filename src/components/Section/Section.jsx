import { Component } from 'react';

export class Section extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <h2>{this.props.title}</h2>
        {children}
      </>
    );
  }
}

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      // eslint-disable-next-line react/no-unused-state
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState((previousState) => (calculate(previousState, buttonName)));
  };

  render() {
    const { next, total } = this.state;

    return (
      <div className="component-app">
        <Display value={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

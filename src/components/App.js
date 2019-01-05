import React, { Component } from 'react';
import ccxt from 'ccxt';

import Exchanges from './Exchanges'

class App extends Component {
  state = {
    exchanges: ccxt.exchanges,
    pairs: [],
    trades: [],
    pair: null,
    exchange: null
  }

  componentDidMount = () => {
    console.log(this.state.exchanges)
  }
  render() {
    return (
      <div>
        <Exchanges exchanges={this.state.exchanges}/>
        </div>
    )
  }
};

export default App;

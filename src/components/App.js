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

  setExchange = e => {
    this.setState({exchange: e.target.value})
  }
  render() {
    return (
      <div>
        <Exchanges exchanges={this.state.exchanges}
        setExchange={this.setExchange}/>
        </div>
    )
  }
};

export default App;

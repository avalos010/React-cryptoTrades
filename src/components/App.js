import React, { Component } from 'react';
import ccxt from 'ccxt';

import Exchanges from './Exchanges'
import Pairs from './Pairs';

class App extends Component {
  state = {
    exchanges: ccxt.exchanges,
    pairs: [],
    trades: [],
    pair: '',
    exchange: null
  }

  componentDidMount = () => {
    console.log(this.state.exchanges)
  }

  setPair = (e) => {
    e.target.value && this.setState({pair: e.target.value})
  }

  setExchange = async(e) => {
    this.setState({exchange: e.target.value})
    await this.state.exchange

    let exchange = new ccxt[this.state.exchange]();
    exchange.proxy ='https://cors-anywhere.herokuapp.com/';
    let markets = await exchange.load_markets();
    await markets;
    this.setState({pairs: Object.keys(markets)})
    console.log(this.state)
  }


  render() {
    return (
      <div>
        <Exchanges exchanges={this.state.exchanges}
        setExchange={this.setExchange}/>

      <Pairs pairs={this.state.pairs} setPair={this.setPair}/>

        </div>
    )
  }
};

export default App;

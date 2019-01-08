import React, { Component } from 'react';
import ccxt from 'ccxt';

import Exchanges from './Exchanges'
import Pairs from './Pairs';
import Trades from './Trades';

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

  setPair = async(e) => {
   const selectedPair = e.target.value;
   await selectedPair;
   this.setState({pair:selectedPair})
   await this.state.pair
    this.fetchTrades(this.state.pair)
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

  fetchTrades = async(symbol) => {
    let exchange = new ccxt[this.state.exchange]();
  exchange.proxy ='https://cors-anywhere.herokuapp.com/';
    if(exchange.has['fetchTrades']) {
      let since = exchange.seconds() - 2;
      while(since < exchange.seconds()) {
        const limit = 20;
        const trades = await exchange.fetchTrades(symbol, since, limit);

        if(trades.length) {
          since = trades[trades.length - 1];
          this.setState({trades});
        }
        else {
          break
        }

      }
    }
  }


  render() {
    return (
      <div className="container bg-light">
        <h1 className="text-center"><span className="text-success">Crypto</span><span className="text-primary">Trades</span></h1>
        <div className="row">
        <Exchanges exchanges={this.state.exchanges}
        setExchange={this.setExchange}/>

      <Pairs pairs={this.state.pairs} setPair={this.setPair}/>
      </div>
      <Trades trades={this.state.trades} />
      </div>

    )
  }
};

export default App;

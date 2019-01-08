import React from 'react';

const Exchanges = ({exchanges, setExchange}) => (
  <div>
    <label for="exchange-select"> Choose an exchange: </label>

    <select onChange={setExchange}>
    <option selected disabled>Exchange</option>
    {exchanges.map(exchange => <option key={exchange} value={exchange}>{exchange}</option>)}
    </select>
  </div>
)

export default Exchanges;

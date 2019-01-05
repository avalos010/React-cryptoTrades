import React from 'react';

const Exchanges = ({exchanges, setExchange}) => (
  <div>
    <label for="exchange-select"> Choose an exchange: </label>

    <select onChange={setExchange}>
    {exchanges.map(exchange => <option key={exchange} value={exchange}>{exchange}</option>)}
    </select>
  </div>
)

export default Exchanges;

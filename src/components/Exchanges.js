import React from 'react';

const Exchanges = ({exchanges}) => (
  <div>
    <label for="exchange-select"> Choose an exchange: </label>
    <select>
    {exchanges.map(exchange => <option value={exchange}>{exchange}</option>)}
    </select>
  </div>
)

export default Exchanges;

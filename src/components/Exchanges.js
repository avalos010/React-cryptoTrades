import React from 'react';

const Exchanges = ({exchanges, setExchange}) => (
  <div className="col-md-4 offset-md-2">
  <div className="d-flex flex-column mt-3">
    <h3 className="text-center">Exchanges</h3>

    <select onChange={setExchange} className="form-control btn-primary">
    <option defaultValue selected disabled>Exchange</option>
    {exchanges.map(exchange => <option key={exchange} value={exchange}>{exchange}</option>)}
    </select>
    </div>
  </div>
)

export default Exchanges;

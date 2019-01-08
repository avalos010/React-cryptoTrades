import React from 'react';

const Pairs = ({pairs,setPair}) => {
  return (
    <div className="col-md-4 ">
    <div className="mt-3 d-flex flex-column">
    <h3 className="text-center"> Pairs </h3>
    <select onChange={setPair} className="btn-success form-control">
    <option selected disabled>Pair</option>
    {pairs.length && pairs.map(pair =>
      <option key={pair} value={pair}> {pair} </option>
    )}
    </select>
    </div>
    </div>
  )
}
  export default Pairs

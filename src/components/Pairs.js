import React from 'react';

const Pairs = ({pairs,setPair}) => {
  return (
    <div>
    <label> Choose Pair </label>
    <select onChange={setPair}>
    <option selected disabled>Pair</option>
    {pairs.length && pairs.map(pair =>
      <option key={pair} value={pair}> {pair} </option>
    )}
    </select>
    </div>
  )
}
  export default Pairs

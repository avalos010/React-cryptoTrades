import React from 'react';

const Trades  = ({trades}) => {

  return(
    <div className="col-md-12 mt-3">
    <h3 className="text-center"> Trades </h3>
    <table class="table mt-3">
<thead class="thead-dark">
<tr>
  <th scope="col">Date</th>
  <th scope="col">Price</th>
  <th scope="col">Pair</th>
  <th scope="col">Side</th>
</tr>
</thead>
<tbody>
    {trades.length > 0 && trades.map(trade => {
      return (
    <tr>
      <th scope="row">{trade.datetime}</th>
      <td>{trade.price}</td>
      <td>{trade.symbol}</td>
      <td className={trade.side == 'sell' && 'text-danger' || trade.side == 'buy' && 'text-success'}>{trade.side}</td>
    </tr>


      )
    })}
    </tbody>
  </table>
    </div>
  )

};

export default Trades

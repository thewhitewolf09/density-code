import React, { useState } from "react";

function BuySell({ currentPrice }) {
  const [nofStocks, setNofStocks] = useState(1);

  return (
    <div className=" border p-2">
      <div className="m-2 flex border justify-around w-full bg-gray-50 p-2 ">
        <div>Current Price</div>
        <div> ₹ {405}</div>
        <div className="text-green-500"> +8.5%</div>
      </div>
      <div className="m-2 flex border justify-around w-full bg-gray-50 p-2 ">
        <div>Current Supply in AMM</div>
        <div> {12200}</div>
      </div>
      <div className="m-2 flex justify-around">
        <div>
          <div>Number of stocks</div>
          <input
            value={nofStocks}
            onChange={(e) => setNofStocks(e.target.value)}
            type="number"
            className=" border m-1 p-2"
            placeholder="Number of stocks"
          />
        </div>
        <div>
          <div>Amount</div>

          <input
            value={nofStocks * currentPrice}
            onChange={(e) =>
              setNofStocks(parseFloat(e.target.value) / currentPrice)
            }
            className=" border m-1 p-2"
            type="number"
            placeholder="Amount"
          />
        </div>
      </div>
      <div className="flex justify-evenly">
        <button className=" bg-red-600 text-white p-3">BUY</button>
        <button className=" bg-green-600 text-white p-3">SELL</button>
      </div>
    </div>
  );
}

export default BuySell;

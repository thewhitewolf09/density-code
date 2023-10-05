import React from "react";

function StockInfo() {
  const playerName = "Virat Kohli";
  const stockPrice = 365;
  return (
    <div>
      <div>Player Name</div>
      <div>{playerName}</div>
      <div>
        <img
          src="https://h.cricapi.com/img/players/c61d247d-7f77-452c-b495-2813a9cd0ac4.jpg"
          alt="cric"
        />
        <div>Stock Price : {stockPrice}</div>
      </div>
    </div>
  );
}

export default StockInfo;

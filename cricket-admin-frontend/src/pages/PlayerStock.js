import React from "react";
import Chart from "../components/Chart";
import Buysell from "../components/MarketPlace/BuySell";
import SearchBar from "../components/SearchBar";
const playerData = [
  "Asparagus",
  "Beetroot",
  "Broccoli",
  "Cabbage",
  "Carrot",
  "Cauliflower",
  "Celery",
  "Corn",
  "Eggplant",
  "Lettuce",
  "Mushroom",
  "Onion",
  "Parsnip",
  "Pea",
  "Potato",
  "Pumpkin",
  "Radish",
  "Spinach",
  "Tomato",
  "Turnip",
  "Virat Kohli",
  "Kumar",
  "kota",
];

function PlayerStockStat() {
  return (
    <div>
      <div className="text-center p-2 bg-emerald-700 text-white">
        <span>Player Stock Stats</span>
      </div>
      <div className="flex justify-center p-2">
        {/* player search bar */}
        <SearchBar data={playerData} />
      </div>
      <div className="flex">
        <div className="m-3 w-3/5">
          <span className="mb-2.5">
            Player Name:
            <span className="text-emerald-700 text-xl font-bold">
              Virat Kohli
            </span>
          </span>
          {/* player graph stats */}
          <div className="bg-slate-300 p-3 mt-3">
            <Chart word="hi" />
          </div>
        </div>
        <div className="w-2/5 m-2">
          <Buysell currentPrice={405} />
        </div>
      </div>
    </div>
  );
}

export default PlayerStockStat;

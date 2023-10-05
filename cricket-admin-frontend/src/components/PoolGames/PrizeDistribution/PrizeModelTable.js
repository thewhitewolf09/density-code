import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addPrizeDisModels } from "../../../pages/PoolGames/apiFunctions";

function PrizeModelTable({
  models,
  setModels,
  currentModelIndex,
  isAdd,
  numOfEntries,
  modelName,
  handleAdd,
}) {
  const addModel = () => {
    let distribution = "";
    for (let i = 0; i < numOfEntries; i++) {
      distribution += numOfWinnersArray[i];
      distribution += ":";
      distribution += percentagesArray[i];
      if (i !== numOfEntries - 1) distribution += ",";
    }
    console.log(distribution);
    let prizeObj = {
      name: modelName,
      prize_distribution: distribution,
    };
    addPrizeDisModels(JSON.stringify(prizeObj))
      .then((res) => {
        console.log(res.data);
        redirect();
      })
      .catch((err) => console.log(err));
  };
  const percentagesArray = numOfEntries
    ? [...Array(parseInt(numOfEntries))]
    : [];
  const numOfWinnersArray = numOfEntries
    ? [...Array(parseInt(numOfEntries))]
    : [];
  const rows = isAdd
    ? percentagesArray.map((entry, index) => (
        <tr>
          <td className="border border-slate-200">
            <input
              value={percentagesArray[index]}
              type="number"
              onChange={(e) => {
                percentagesArray[index] = e.target.value;
              }}
              className="text-center"
            />
          </td>
          <td className="border border-slate-200">
            <input
              className="text-center"
              value={numOfWinnersArray[index]}
              onChange={(e) => {
                numOfWinnersArray[index] = e.target.value;
              }}
            />
          </td>
        </tr>
      ))
    : models[currentModelIndex].data.map((row, index) => (
        <tr key={index}>
          <td className="border border-slate-200">{row.percentageOfShare}%</td>
          <td className="border border-slate-200">{row.numOfWinners}</td>
        </tr>
      ));
  const navigate = useNavigate();
  const redirect = () => {
    let url = "/pool";
    navigate(url, { replace: true });
  };
  return (
    <>
      <div className="flex justify-center">
        <table class="table-auto  text-center">
          <thead className=" bg-slate-200 ">
            <tr>
              <th className="border p-2 border-black">Percentage of Share</th>
              <th className="border p-2 border-black">Ranking</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>

      {isAdd && (
        <div className="flex justify-evenly m-2">
          <button
            onClick={addModel}
            className=" p-2 border bg-green-400 text-white"
          >
            Save
          </button>
          <button className="p-2 border bg-red-400 text-white">Cancel</button>
        </div>
      )}
    </>
  );
}

export default PrizeModelTable;

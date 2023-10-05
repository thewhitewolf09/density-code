import React, { useEffect, useState } from "react";
import PrizeModelTable from "../../../components/PoolGames/PrizeDistribution/PrizeModelTable";

function PrizeDistribution() {
  const [poolPrize, setPoolPrize] = useState("");
  const [poolSize, setPoolSize] = useState("");
  const [entryPrice, setEntryPrice] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [modelName, setModelName] = useState("");
  const [numOfEntries, setNumOfEntries] = useState(10);
  const [index, setIndex] = useState(0);
  const [editName, setEditName] = useState(true);
  const model1 = {
    modelName: "Mini contest",
    data: [
      { percentageOfShare: 10, numOfWinners: 1 },
      { percentageOfShare: 5, numOfWinners: 2 },
      { percentageOfShare: 4, numOfWinners: 10 },
      { percentageOfShare: 2, numOfWinners: 20 },
      { percentageOfShare: 1, numOfWinners: 20 },
      { percentageOfShare: 0.5, numOfWinners: 30 },
      { percentageOfShare: 0.1, numOfWinners: 50 },
      { percentageOfShare: 0.05, numOfWinners: 100 },
    ],
  };
  const [models, setModels] = useState([model1]);
  const [prizeDist, setPrizeDist] = useState([]);
  const distribution = () => {
    let rank = 1;
    let tempDist = [];
    for (let i = 0; i < models[index].data.length; i++) {
      tempDist.push(
        <tr>
          {parseInt(models[index].data[i].numOfWinners) === 1 ? (
            <td className="border border-slate-200">{rank}</td>
          ) : (
            <td className="border border-slate-200">
              {rank}-{rank + parseInt(models[index].data[i].numOfWinners) - 1}
            </td>
          )}
          <td className="border border-slate-200">
            {parseFloat(models[index].data[i].percentageOfShare) *
              poolPrize *
              0.01}
          </td>
        </tr>
      );
      rank += parseInt(models[index].data[i].numOfWinners);
    }
    console.log(models[index]);
    setPrizeDist(tempDist);
  };

  return (
    <div>
      <div className=" text-white text-center w-full bg-emerald-800 text-3xl mb-4">
        Prize distribution models
      </div>

      <div className="flex">
        <div className=" basis-1/3 m-2">
          <div className="text-center flex w-full justify-center">
            <div>Available Models</div>
            <button className=" underline mx-2" onClick={() => setIsAdd(true)}>
              {" "}
              Add new model{" "}
            </button>
          </div>
          <div className="flex justify-center w-full m-2">
            {isAdd ? (
              <div className="flex">
                <input
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                  placeholder="Model Name"
                  className=" p-1 border"
                  disabled={!editName}
                />
                <input
                  value={numOfEntries}
                  max={50}
                  maxLength={2}
                  type="number"
                  onChange={(e) => setNumOfEntries(e.target.value)}
                  placeholder="Number of entries"
                  className=" border p-1"
                  disabled={!editName}
                />
                <button
                  onClick={() => setEditName(!editName)}
                  className=" p-1 bg-slate-400 border"
                >
                  {editName ? "✔" : "✎"}
                </button>
              </div>
            ) : (
              <select
                value={index}
                onChange={(e) => setIndex(e.target.value)}
                className="w-full p-2 outline-none border rounded-md"
              >
                {models.map((model, index) => (
                  <option value={parseInt(index)}>{model.modelName}</option>
                ))}
              </select>
            )}
          </div>
          {!isAdd && (
            <PrizeModelTable
              currentModelIndex={index}
              models={models}
              setModels={setModels}
              isAdd={isAdd}
            />
          )}
          {isAdd && numOfEntries > 0 && (
            <PrizeModelTable
              currentModelIndex={index}
              models={models}
              setModels={setModels}
              isAdd={isAdd}
              handleAdd={() => setIsAdd(!isAdd)}
              numOfEntries={numOfEntries}
              modelName={modelName}
            />
          )}
        </div>
        <div className=" basis-2/3 m-2">
          <div className="text-center">Prize distribution</div>
          <div className="flex justify-around">
            <div>
              <div>Entry Fee</div>
              <input
                className=" bg-gray-100 p-2"
                placeholder="Entry Fee"
                value={entryPrice}
                onChange={(e) => setEntryPrice(e.target.value)}
              />
            </div>
            <div>
              <div>Pool Size</div>
              <input
                className=" bg-gray-100 p-2"
                placeholder="Pool Size"
                value={poolSize}
                onChange={(e) => setPoolSize(e.target.value)}
              />
            </div>
            <div>
              <div>Pool Prize</div>
              <input
                className=" bg-gray-100 p-2"
                placeholder="Pool Prize"
                value={poolPrize}
                onChange={(e) => setPoolPrize(e.target.value)}
              />
            </div>
            <div className="self-center">
              <button
                onClick={distribution}
                className=" bg-slate-500 p-2 rounded-md text-white"
              >
                Show distribution
              </button>
            </div>
          </div>
          <div className="flex m-2 justify-center">
            <table class="table-auto  text-center">
              <thead className=" bg-slate-200 ">
                <tr>
                  <th className="border p-2 border-black">Rank</th>
                  <th className="border p-2 border-black">Winnings</th>
                </tr>
              </thead>
              <tbody>{prizeDist}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeDistribution;

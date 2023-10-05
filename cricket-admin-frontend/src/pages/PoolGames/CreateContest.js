import React, { useEffect, useState } from "react";
import { getPrizeDisModels } from "./apiFunctions";
export default function CreateContest({
  customContests,
  setCustomContests,
  matchId,
  prizeModels,
}) {
  const [prizepool, setprizepool] = useState();
  const [poolsize, setpoolsize] = useState();
  const [entryfee, setentryfee] = useState();
  const [selectedModel, setSelectedModel] = useState("");

  function submitcontest() {
    const contestObj = {
      entry_fee: parseInt(entryfee),
      // pool_prize: prizepool,
      pool_size: parseInt(poolsize),
      prize_distribution_id: selectedModel,
      match_id: matchId,
      participant_count: 0,
      type: "kuchbhi",
    };
    setCustomContests((state) => [...state, contestObj]);
    setprizepool("");
    setpoolsize("");
    setentryfee("");
    console.log(customContests);
  }
  return (
    <>
      {/*d
       */}
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-0 text-center  text-3xl font-bold tracking-tight text-gray-900">
              CreateContest
            </h2>
          </div>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              pool-prize
              <label htmlFor="pool-prize" className="sr-only">
                pool-prize
              </label>
              <input
                name="price"
                type="number"
                value={prizepool}
                onChange={(e) => setprizepool(e.target.value)}
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="pool-prize"
              />
            </div>
            <div>
              pool-size
              <label htmlFor="pool-size" className="sr-only">
                pool-size
              </label>
              <input
                id="pool-size"
                name="size"
                type="number"
                value={poolsize}
                onChange={(e) => setpoolsize(e.target.value)}
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="pool-size"
              />
            </div>

            <div>
              entry-fee
              <label htmlFor="entry-fee" className="sr-only">
                entry-fee
              </label>
              <input
                id="entry-fee"
                name="entry-fee"
                type="number"
                value={entryfee}
                onChange={(e) => setentryfee(e.target.value)}
                //   autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="entry-fee"
              />
            </div>
            <div className="my-4">
              <p>Prize Distribution Model</p>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className=" w-full border my-2"
              >
                {prizeModels.map((model) => (
                  <option value={model.id}>{model.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between"></div>
          <div>
            <button
              onClick={submitcontest}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              add to custom list
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from "react";

// function OnAirContest() {
//   return (
//     <div>
//       <div className="">Contest Name</div>
//       <div>
//         <div>Pool details</div>
//         <div>Pool Size</div>
//         <div>Pool Filled</div>
//         <div>Filled percentage</div>
//       </div>
//       <div>
//         <div>Bots</div>

//         <button>Add bots</button>
//       </div>
//     </div>
//   );
// }

// export default OnAirContest;


import React from "react";
import { Link } from "react-router-dom";
const onAirContestList = [
  {
    entry_fee: "49",
    pool_prize: "1 Crores",
    pool_filled: "5000",
    pool_size: "21768",
    number_of_bots: 10,
  },
  {
    entry_fee: "55",
    pool_prize: "2 Crores",
    pool_filled: "5000",
    number_of_bots: 10,
    pool_size: "12768",
  },
  {
    entry_fee: "49",
    pool_prize: "3 Crores",
    pool_filled: "5000",
    number_of_bots: 10,
    pool_size: "21767",
  },
];
function OnAirContests() {
  return (
    <div className="">
      <div className=" text-white text-center w-full bg-emerald-800 text-3xl mb-4">
        On Air Contests
      </div>
      <div className="p-4">
        {onAirContestList.map((contest, index) => (
          <div className="flex bg-gray-100 mt-2 rounded-xl">
            <div className=" flex m-2 justify-around w-full">
              <div>
                <div>Entry Fee</div>
                <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
                  {contest.entry_fee}
                </div>
              </div>
              <div>
                <div>Pool Size</div>
                <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
                  {contest.pool_size}
                </div>
              </div>
              <div>
                <div>Pool Prize</div>
                <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
                  {contest.pool_prize}
                </div>
              </div>
              <div>
                <div>Pool Filled</div>
                <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
                  {contest.pool_filled}
                </div>
              </div>
              <div>
                <div>Pool Fill Percentage</div>
                <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
                  {parseFloat(
                    (contest.pool_filled * 100) / contest.pool_size
                  ).toFixed(2)}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <Link to="/pool/onAir/contestId">
                  <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"  >ADD BOTS</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OnAirContests;


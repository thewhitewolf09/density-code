import React, { useState } from "react";
import Contestcreation from "./Contestcreation";
import CreateContest from "./CreateContest";
// import CreateContest from "../../components/PoolGames/Contests/CreateContest";

function Contests() {
  return (
    <div className="p-2">
      <div className=" text-white text-center w-full bg-emerald-800 text-3xl mb-4">
        Pool Games/Contests
      </div>
      <div className="flex ">
        <div className="basis-1/2 text-center">
          <div>Select Contests</div>
          <Contestcreation />
        </div>
        <div className="basis-1/2 text-center">
          <div>Create Contest</div>
          <CreateContest />
        </div>
      </div>
    </div>
  );
}

export default Contests;

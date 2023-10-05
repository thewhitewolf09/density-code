import React, { useEffect, useState } from "react";
import MatchList from "../PoolGames/components/MatchList";
import { getAllMatches } from "./apiFunctions";
function PoolGames() {
  useEffect(() => {
    console.log("running");
    getAllMatches()
      .then((response) => {
        console.log(response.data);
        setAllMatches(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [allMatches, setAllMatches] = useState([]);
  const [activeMatches, setActiveMatches] = useState([]);
  const [inActiveMatches, setInActiveMatches] = useState([]);
  useEffect(() => {
    let p = allMatches.filter((match) => {
      return match.isActive;
    });
    setActiveMatches(p);
    let q = allMatches.filter((match) => {
      return !match.isActive;
    });
    setInActiveMatches(q);
  }, [allMatches]);
  return (
    <div className="p-2">
      <div className=" text-white text-center w-full bg-emerald-800 text-3xl mb-4">
        Pool Games
      </div>
      <div className="flex ">
        <div className=" basis-1/2 text-center">
          <div>Upcoming Matches</div>
          <MatchList data={inActiveMatches} />
        </div>
        <div className="basis-1/2 text-center">
          Approved Matches
          <MatchList data={activeMatches} />
        </div>
      </div>
    </div>
  );
}

export default PoolGames;

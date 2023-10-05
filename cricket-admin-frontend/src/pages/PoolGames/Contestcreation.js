import React, { useEffect, useRef } from "react";
import "./Contestcreation.css";

import { useState } from "react";
import CreateContest from "./CreateContest";
import ContestCard from "../../components/PoolGames/Contests/ContestCard";
import { Link, useNavigate } from "react-router-dom";
import { addContests, getPrizeDisModels } from "./apiFunctions";

function Contestcreation({ matchId }) {
  const [selectedContests, setSelectedContests] = useState([]);
  const [customContests, setCustomContests] = useState([]);
  const [added, setAdded] = useState(false);
  const [prizeModels, setPrizeModels] = useState([]);
  const [prizeMap, setPrizeMap] = useState(new Map());
  const tempMap = new Map();
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/pool", { replace: true });
  };
  const handleCreateContest = () => {
    let finalContests = selectedContests;
    for (let i = 0; i < finalContests.length; i++) {
      delete finalContests[i]["contest_id"];
    }
    console.log(JSON.stringify(finalContests));
    addContests(JSON.stringify(finalContests))
      .then((res) => {
        console.log(res);
        setAdded(true);
        redirect();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPrizeDisModels()
      .then((response) => {
        console.log(response.data);
        response.data?.forEach((model) => {
          tempMap.set(model.id, model.name);
        });
        setPrizeMap(tempMap);
        // console.log(tempMap);
        setPrizeModels(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const contestList = [
    {
      participant_count: 0,
      match_id: matchId,
      entry_fee: 49,
      type: "contest_1",
      pool_size: 2000,
      prize_distribution_id: "e97ed339-ef93-44a6-8e9e-9fc0732f7e33",
    },
    {
      participant_count: 0,
      match_id: matchId,
      entry_fee: 55,
      type: "contest_1",
      pool_size: 10000,
      prize_distribution_id: "e97ed339-ef93-44a6-8e9e-9fc0732f7e33",
    },
    {
      participant_count: 0,
      match_id: matchId,
      entry_fee: 100,
      type: "contest_1",
      pool_size: 2000,
      prize_distribution_id: "e97ed339-ef93-44a6-8e9e-9fc0732f7e33",
    },
    {
      participant_count: 0,
      match_id: matchId,
      entry_fee: 1000,
      type: "contest_1",
      pool_size: 100,
      prize_distribution_id: "e97ed339-ef93-44a6-8e9e-9fc0732f7e33",
    },
    {
      participant_count: 0,
      match_id: matchId,
      entry_fee: 10000,
      type: "contest_1",
      pool_size: 50,
      prize_distribution_id: "76c5c6d6-eee4-4280-93e6-c5d74905b78e",
    },
    {
      participant_count: 0,
      match_id: matchId,
      entry_fee: 20000,
      type: "contest_1",
      pool_size: 50,
      prize_distribution_id: "76c5c6d6-eee4-4280-93e6-c5d74905b78e",
    },
  ];
  useEffect(() => {
    console.log(selectedContests);
  }, [selectedContests]);
  return (
    <div className="contest-main-container ">
      <div className=" text-white text-center w-full bg-emerald-800 text-3xl mb-4">
        Pool Games/Contests
      </div>
      <div className="contest-select-and-creation-container">
        <div className="genral-contest-list-container">
          <span>Contests</span>
          <div className="genral-contest-list">
            {contestList.map((contest, index) => (
              <ContestCard
                selectedcontestList={selectedContests}
                setselectedContestList={setSelectedContests}
                contest={contest}
                id={"general" + index}
                prizeMap={prizeMap}
              />
            ))}
          </div>
        </div>
        <div className="genral-contest-list-container">
          <span>Custom Contests</span>
          <div className="genral-contest-list">
            {customContests.map((contest, index) => (
              <ContestCard
                selectedcontestList={selectedContests}
                setselectedContestList={setSelectedContests}
                contest={contest}
                id={"custom" + index}
                prizeMap={prizeMap}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <CreateContest
          customContests={customContests}
          setCustomContests={setCustomContests}
          prizeModels={prizeModels}
          matchId={matchId}
        />
      </div>
      <div className="listed-contest-container">
        <span>Listed Contests</span>
        <div className="flex">
          {selectedContests.map((contest, index) => {
            return (
              <div className=" bg-slate-100 p-2 m-2 text-center rounded-md w-48">
                <div className="text-red-500">{contest.pool_prize}</div>
                <div>{contest.pool_size}</div>
                <div>{contest.entry_fee}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="contest-publish-container">
        <button
          className="bg-black text-white hover:scale-110 p-4"
          onClick={handleCreateContest}
        >
          Create contests
        </button>
        {added && <p>Contests added please refresh</p>}
      </div>
    </div>
  );
}

export default Contestcreation;

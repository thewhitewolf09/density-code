import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContestByMatchId, getSquadByMatchId } from "./apiFunctions";
import MatchSquad from "./components/MatchSquad";
import Contestcreation from "./Contestcreation";
import Contests from "./Contests";

function PoolMatch() {
  const { id } = useParams();
  const [tab, setTab] = useState(0);
  const [existingContestList, setExistingContestList] = useState([]);
  useEffect(() => {
    if (tab) {
    } else {
      getContestByMatchId(id)
        .then((response) => {
          console.log(response);
          setExistingContestList(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [tab]);

  return (
    <div>
      <div className=" flex w-full">
        <button
          onClick={() => {
            setTab(0);
          }}
          className={`${
            tab ? "bg-slate-500 text-white" : "bg-slate-200"
          }   w-1/2`}
        >
          Squad
        </button>

        <button
          onClick={() => {
            setTab(1);
          }}
          className={`${
            !tab ? "bg-slate-500 text-white" : "bg-slate-200"
          }   w-1/2`}
        >
          Contests
        </button>
      </div>
      {tab ? <Contestcreation matchId={id} /> : <MatchSquad matchId={id} />}
    </div>
  );
}

export default PoolMatch;

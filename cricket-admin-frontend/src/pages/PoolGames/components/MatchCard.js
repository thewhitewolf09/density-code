import React from "react";
import { useNavigate } from "react-router-dom";
import timeTillStart from "../../../helpers/timeTillStart";
function MatchCard({
  name,
  startTime,
  teamA,
  teamB,
  nofContests,
  hPrizePool,
  id,
}) {
  let navigate = useNavigate();
  const redirect = (id) => {
    let url = "match/" + id;
    navigate(url, { replace: true });
  };
  return (
    <div
      onClick={() => redirect(id)}
      className=" m-2 p-1 border cursor-pointer"
    >
      <div className="  bg-slate-100 border-b-2">
        <div className=" text-lg">{name}</div>
        <div>{timeTillStart(startTime)}</div>
      </div>
      <div className="flex justify-between">
        <div>{teamA}</div>
        <div>vs</div>
        <div>{teamB}</div>
      </div>
      <div className=" flex justify-center">
        <div>
          {nofContests} | {hPrizePool}
        </div>
      </div>
    </div>
  );
}

export default MatchCard;

import React, { useEffect, useState } from "react";
import MatchCard from "./MatchCard";

function MatchList({ data }) {
  return (
    <div>
      {data.map((match, index) => (
        <MatchCard
          key={index}
          id={match.id}
          teamA={match.team_a}
          teamB={match.team_b}
          nofContests={match.no_of_contest}
          startTime={match.start_time}
          endTime={match.end_time}
          name={match.name}
          hPrizePool={match.highest_prize_pool}
        />
      ))}
    </div>
  );
}

export default MatchList;

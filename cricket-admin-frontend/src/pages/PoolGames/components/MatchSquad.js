import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSquadByMatchId } from "../apiFunctions";

function MatchSquad({ matchId, teamA, teamB }) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getSquadByMatchId(matchId)
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0][1].team);
        console.log(teamA, teamB);
        let allPlayers = [];
        for (let i = 0; i < response.data[0].length; i++)
          allPlayers.push(response.data[0][i]);
        for (let i = 0; i < response.data[1].length; i++)
          allPlayers.push(response.data[1][i]);
        for (let i = 0; i < response.data[3].length; i++)
          allPlayers.push(response.data[3][i]);
        console.log(allPlayers);
        setPlayers(allPlayers);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="flex w-full justify-center">
        <p>IND vs SL</p>
      </div>
      <div className="flex ">
        <div className="w-1/2">
          <p> Indian squad</p>
          {players.map((player) => (
            <div className="flex">
              <img width={48} src={player.image_url} />
              <div>
                <p>{player.name}</p>
                <p>{player.type}</p>
              </div>
              <div>
                <p>Credits</p>
                <input placeholder="Credits" className="w-20" />
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/2 mx-4">
          <p> Indian squad</p>
          {players.map((player) => (
            <div className="flex justify-between">
              <div className="flex space-x-4">
                <img width={48} src={player.image_url} />
                <div>
                  <p>{player.name}</p>
                  <p className="text-sm">{player.type}</p>
                </div>
              </div>
              <div>
                <p>Credits</p>
                <input placeholder="Credits" className="w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MatchSquad;

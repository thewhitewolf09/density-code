import React, { useState } from "react";

function CreateContest({ poolSize, entryFee, poolPrice, disabled }) {
  const [newContestEntryPrice, setNewContestEntryPrice] = useState("");
  const [newContestPoolSize, setNewContestPoolSize] = useState("");
  const [newContestPoolPrize, setNewContestPoolPrize] = useState("");

  return (
    <div>
      <input
        placeholder="Entry Price"
        disabled={disabled}
        onChange={(e) => setNewContestEntryPrice(e.target.value)}
        value={newContestEntryPrice}
      />
      <div className="flex space-x-4">
        <input
          disabled={disabled}
          onChange={(e) => setNewContestPoolPrize(e.target.value)}
          placeholder="Pool Prize"
          value={newContestPoolPrize}
        />
        <input
          disabled={disabled}
          onChange={(e) => setNewContestPoolSize(e.target.value)}
          placeholder="Pool Size"
          value={newContestPoolSize}
        />
      </div>
      <div> Prize Distribution</div>
      <select>
        <option>Model 1</option>
        <option>Model 2</option>
        <option>Model 3</option>
      </select>
    </div>
  );
}

export default CreateContest;

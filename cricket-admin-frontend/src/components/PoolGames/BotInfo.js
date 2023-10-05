import React from "react";

function BotInfo() {
  return (
    <div>
      <input placeholder="Number of bots" />
      <input placeholder="Amount" />
      <button onClick={() => {}}>Fill all</button>
      <select name="Account" id="cars">
        <option value="volvo">Acc1</option>
        <option value="saab">Acc2</option>
        <option value="mercedes">Acc3</option>
        <option value="audi">Acc4</option>
      </select>
    </div>
  );
}

export default BotInfo;

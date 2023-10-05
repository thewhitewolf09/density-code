import { useState } from "react";

const ContestCard = ({
  selectedcontestList,
  setselectedContestList,
  contest,
  id,
  prizeMap,
}) => {
  const [checked, setChecked] = useState(false);
  const handleCheck = () => {
    if (!checked) {
      const contestObj = {
        ...contest,
        contest_id: id,
      };
      setselectedContestList((state) => [...state, contestObj]);
    } else {
      setselectedContestList(
        selectedcontestList.filter((sContest) => sContest.contest_id !== id)
      );
    }
    setChecked(!checked);
  };
  return (
    <div className="contest-card-container">
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
        <div>model</div>
        <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
          {prizeMap.get(contest.prize_distribution_id)}
        </div>
      </div>
      <div className="contest-checkbox-container">
        <input type="checkbox" name="checkbox" onChange={handleCheck} />
      </div>
    </div>
  );
};
export default ContestCard;

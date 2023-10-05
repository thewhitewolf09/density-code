const timeTillStart = (time) => {
  let x = new Date(time);
  var difference = x.getTime() - Date.now();

  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  let result = hoursDifference + " HH " + minutesDifference + " MM ";
  return result;
};
export default timeTillStart;

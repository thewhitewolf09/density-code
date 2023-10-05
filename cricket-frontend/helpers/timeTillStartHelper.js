const timeTillStart = (time) => {
	let x = new Date(time)
	var difference = x.getTime() - Date.now()

	var hoursDifference = Math.floor(difference / 1000 / 60 / 60)
	difference -= hoursDifference * 1000 * 60 * 60

	var minutesDifference = Math.floor(difference / 1000 / 60)
	difference -= minutesDifference * 1000 * 60

	let result = hoursDifference + ' HH ' + minutesDifference + ' MM '

	let timeRemaininSecond = hoursDifference*60*60 + minutesDifference*60

    
	return {result,timeRemaininSecond}
}
export default timeTillStart

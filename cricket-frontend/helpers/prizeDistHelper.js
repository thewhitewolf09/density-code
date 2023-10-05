const prizeDistHelper = (prize) => {
	let prizeArray = prize.split(',')
	let prizeDist = []
	for (let i = 0; i < prizeArray.length; i++) {
		let temp = prizeArray[i].split(':')
		let limits = temp[0].split('-')
		prizeDist.push({
			rankLow: limits[0],
			rankHigh: limits[1],
			percentage: temp[1],
		})
	}
	return prizeDist
}
export default prizeDistHelper

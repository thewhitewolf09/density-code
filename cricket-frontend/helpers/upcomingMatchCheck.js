const isUpcoming = (time) => {
	let x = new Date(time)
	let timeStamp = x.getTime()
	return timeStamp > Date.now()
}

export default isUpcoming

const shortName = (name) => {
	let temp = name.split(' ')
	let res = ''
	if (temp.length === 1) {
		res = temp[0].slice(0, 3).toUpperCase()
	} else temp.forEach((value) => (res += value[0]))
	return res
}

export default shortName

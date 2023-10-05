export const filterByEntryFee = (contestList, setContestList, filterIndex) => {
	if (filterIndex === 0) {
		setContestList(contestList)
	}
	if (filterIndex === 1) {
		setContestList(
			contestList.filter((item) => {
				if (item.entry_fee < 51 && item.entry_fee > 0) return item
			}),
		)
	}
	if (filterIndex === 2) {
		setContestList(
			contestList.filter((item) => {
				if (item.entry_fee < 101 && item.entry_fee > 50) return item
			}),
		)
	}
	if (filterIndex === 3) {
		setContestList(
			contestList.filter((item) => {
				if (item.entry_fee < 1001 && item.entry_fee > 100) return item
			}),
		)
	}
	if (filterIndex === 4) {
		setContestList(contestList.filter((item) => item.entry_fee > 1000))
	}
}

export const filterByPrizePool = (contestList, setContestList, filterIndex) => {
	if (filterIndex === 0) setContestList(contestList)
	if (filterIndex === 1)
		setContestList(
			contestList.filter((item) => {
				if (
					item.entry_fee * item.pool_size > 0 &&
					item.entry_fee * item.pool_size < 10001
				)
					return item
			}),
		)
	if (filterIndex === 2)
		setContestList(
			contestList.filter(
				(item) =>
					item.entry_fee * item.pool_size > 10000 &&
					item.entry_fee * item.pool_size < 100001,
			),
		)
	if (filterIndex === 3)
		setContestList(
			contestList.filter(
				(item) =>
					item.entry_fee * item.pool_size > 100000 &&
					item.entry_fee * item.pool_size < 1000001,
			),
		)
	if (filterIndex === 4)
		setContestList(
			contestList.filter(
				(item) =>
					item.entry_fee * item.pool_size > 1000000 &&
					item.entry_fee * item.pool_size < 2500001,
			),
		)
	if (filterIndex === 5)
		setContestList(
			contestList.filter((item) => item.entry_fee * item.pool_size > 2500000),
		)
}

export const filterByTeam = (playerList, setPlayerList) => {}

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Pressable,
} from 'react-native'
import React, { useEffect, useState } from 'react'

const sortbypoolandprice = [
	{
		name: 'Entry Price (High to Low)',
	},
	{
		name: 'Entry Price (Low to High)',
	},
	{
		name: 'Prize Pool (High to Low)',
	},
	{
		name: 'Prize Pool (Lowsadf to High)',
	},
]
const SortByBottomSheet = ({ contestList, setContestList, sheetRef }) => {
	const [checked, setChecked] = useState(0)
	useEffect(() => {
		console.log(checked)
		if (checked === 0) {
			setContestList(contestList.sort((a, b) => b.entry_fee - a.entry_fee))
		}
		if (checked === 1) {
			setContestList(contestList.sort((a, b) => a.entry_fee - b.entry_fee))
		}
		if (checked === 2) {
			setContestList(
				contestList.sort(
					(a, b) => b.entry_fee * b.pool_size - a.entry_fee * a.pool_size,
				),
			)
		}
		if (checked === 3) {
			setContestList(
				contestList.sort(
					(a, b) => a.entry_fee * a.pool_size - b.entry_fee * b.pool_size,
				),
			)
		}
		sheetRef.current.close()
	}, [checked])
	return (
		<View style={{ padding: 20 }}>
			{sortbypoolandprice &&
				sortbypoolandprice.map((item, i, arr) => {
					return checked === i ? (
						<Pressable key={i} style={styles.sortby_text}>
							<TouchableOpacity
								style={{
									height: 20,
									width: 20,
									borderColor: '#6D48FF',
									borderRightWidth: 2,
									borderBottomWidth: 2,
									borderLeftWidth: 2,
									borderTopWidth: 2,
									borderRadius: 40,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<View
									style={{
										height: 14,
										width: 14,
										backgroundColor: '#6D48FF',
										borderRadius: 40,
									}}
								></View>
							</TouchableOpacity>

							<Text style={styles.sortby_text.font}>{item.name}</Text>
						</Pressable>
					) : (
						<Pressable
							key={i}
							style={styles.sortby_text}
							onPress={() => {
								setChecked(i)
							}}
						>
							<TouchableOpacity
								style={{
									height: 20,
									width: 20,
									borderColor: '#6D48FF',
									borderRightWidth: 2,
									borderBottomWidth: 2,
									borderLeftWidth: 2,
									borderTopWidth: 2,
									borderRadius: 40,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							></TouchableOpacity>
							<Text style={styles.sortby_text.font}>{item.name}</Text>
						</Pressable>
					)
				})}
		</View>
	)
}

export default SortByBottomSheet

const styles = StyleSheet.create({
	sortby_text: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		font: {
			marginLeft: 10,
			height: 21,
			fontSize: 14,
			lineHeight: 21,
			color: '#1F1D2',
			fontWeight: '500',
		},
	},
})

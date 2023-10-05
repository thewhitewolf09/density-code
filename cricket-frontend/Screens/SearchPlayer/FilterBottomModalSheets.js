import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import HunterText from '../../components/UI/HunterText'

const Nationality = [
	{
		name: 'Batsman',
	},
	{
		name: 'Bowler',
	},
	{
		name: 'All rounder',
	},
]
const Ipl_teams = [
	{
		name: 'Chennai Super Kings',
		checked: false,
	},
	{
		name: 'Delhi Capital',
		checked: false,
	},
	{
		name: 'Gujarat Titans',
		checked: false,
	},
	{
		name: 'Mumbai Indians',
		checked: false,
	},
	{
		name: 'Kolkata Knight Riders',
		checked: false,
	},
	{
		name: 'Sunrisers Hyderabad',
		checked: false,
	},
	{
		name: 'Punjab Kings',
		checked: false,
	},
	{
		name: 'RC Bangalore',
		checked: false,
	},
	{
		name: 'Rajasthan Royals',
		checked: false,
	},
]
const countries = [
	{
		name: 'India',
		checked: false,
	},
	{
		name: 'New Zealand',
		checked: false,
	},
	{
		name: 'Australia',
		checked: false,
	},
	{
		name: 'Pakistan',
		checked: false,
	},
	{
		name: 'West Indies',
		checked: false,
	},
	{
		name: 'South Africa',
		checked: false,
	},
	{
		name: 'Sri Lanka',
		checked: false,
	},
	{
		name: 'Bangladesh',
		checked: false,
	},
	{
		name: 'Afghanistan',
		checked: false,
	},
	{
		name: 'Ireland',
		checked: false,
	},
	{
		name: 'Scotland',
		checked: false,
	},
	{
		name: 'Netherlands',
		checked: false,
	},
	{
		name: 'Zimbabve',
		checked: false,
	},
	{
		name: 'UAE',
		checked: false,
	},
]
const player_type = [
	{
		name: 'Capped',
	},
	{
		name: 'Un-capped',
	},
]
const FilterBottomModalSheets = ({
	setNationality,
	setIplTeam,
	setplayerStatus,
	iplTeam,
	nationality,
	playerStatus,
}) => {
	const [state, setState] = useState(1)
	const [checked, setChecked] = useState(false)
	const [radiochecked1, setRadioChecked1] = useState(0)
	const [radiochecked2, setRadioChecked2] = useState(0)
	const [radiochecked, setRadioChecked] = useState('')
	const [selectedParameters, setSelectedParameters] = useState([])
	return (
		<View style={styles.filter_content_container}>
			{/*container for filter tabs  */}
			<View style={styles.filter_vertical_tab}>
				{/* tab for Nationality */}
				<Pressable
					style={
						state === 3
							? styles.filter_vertical_tab_button_selected
							: styles.filter_vertical_tab_button_not_selected
					}
					onPress={() => setState(3)}
				>
					<HunterText style={styles.filter_vertical_tab_button}>
						Nationality
					</HunterText>
				</Pressable>

				{/* tab for IPL Team */}
				<Pressable
					style={
						state === 2
							? styles.filter_vertical_tab_button_selected
							: styles.filter_vertical_tab_button_not_selected
					}
					onPress={() => setState(2)}
				>
					<HunterText style={styles.filter_vertical_tab_button}>
						IPL Team
					</HunterText>
				</Pressable>

				{/* tab for Player Status */}
				<Pressable
					style={
						state === 4
							? styles.filter_vertical_tab_button_selected
							: styles.filter_vertical_tab_button_not_selected
					}
					onPress={() => setState(4)}
				>
					<HunterText style={styles.filter_vertical_tab_button}>
						Player Status
					</HunterText>
				</Pressable>

				{/* tab for player types */}
				<Pressable
					style={
						state === 1
							? styles.filter_vertical_tab_button_selected
							: styles.filter_vertical_tab_button_not_selected
					}
					onPress={() => setState(1)}
				>
					<HunterText style={styles.filter_vertical_tab_button}>
						Player Type
					</HunterText>
				</Pressable>
			</View>

			{/* container for filter tab content  */}
			<View>
				{/* tabcontent for Nationality */}
				<View
					style={
						state === 1
							? styles.filter_tabcontent_selected
							: styles.filter_tabcontent_not_selected
					}
				>
					<View style={{ width: '100%' }}>
						{Nationality &&
							Nationality.map((item, i, arr) => {
								return radiochecked1 === i ? (
									<Pressable
										key={i}
										style={styles.tabcontentchild}
										onPress={() => {}}
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

										<HunterText style={styles.tabcontentchild.font}>
											{item.name}
										</HunterText>
									</Pressable>
								) : (
									<Pressable
										key={i}
										style={styles.tabcontentchild}
										onPress={() => {
											setRadioChecked1(i)
											setplayerStatus(item.name)
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
										<HunterText style={styles.tabcontentchild.font}>
											{item.name}
										</HunterText>
									</Pressable>
								)
							})}
					</View>
				</View>

				{/* tabcontent for Ipl_teams */}
				<View
					style={
						state === 2
							? styles.filter_tabcontent_selected
							: styles.filter_tabcontent_not_selected
					}
				>
					<BottomSheetScrollView style={{ width: '100%' }}>
						{Ipl_teams &&
							Ipl_teams.map((item, i, arr) => {
								return (
									<Pressable
										key={i}
										style={styles.tabcontentchild}
										onPress={() => {
											setChecked(!checked)
											arr[i].checked = !checked

											setIplTeam(item.name)
										}}
									>
										<Checkbox
											color={item.checked ? '#6D48FF' : undefined}
											value={item.checked}
										/>
										<HunterText style={styles.tabcontentchild.font}>
											{item.name}
										</HunterText>
									</Pressable>
								)
							})}
					</BottomSheetScrollView>
				</View>

				{/* tabcontent for countries */}
				<View
					style={
						state === 3
							? styles.filter_tabcontent_selected
							: styles.filter_tabcontent_not_selected
					}
				>
					<BottomSheetScrollView style={{ width: '100%' }}>
						{countries &&
							countries.map((item, i, arr) => {
								return (
									<Pressable
										key={i}
										style={styles.tabcontentchild}
										onPress={() => {
											setChecked(!checked)
											arr[i].checked = !checked
											// if (checked) {
											// 	setNationality([...nationality, item.name])
											// 	 setNationality(
											// 	 	nationality.filter((obj) => obj != item.name),
											// 	 )
											// 	 let newComparePlayerData = nationality.filter(
											// 	 	obj => obj != item,
											// 	 )
											// 	 nationality = newComparePlayerData
											// 	console.log(nationality.length)
											// } else {
											// 	setNationality(
											// 		nationality.filter((obj) => obj != item.name),
											// 	)
											// 	 setNationality([...nationality, item.name])
											// 	 nationality.push(item)
											// 	 console.log(nationality.length)
											// }
											setNationality(item.name)
										}}
									>
										<Checkbox
											color={item.checked ? '#6D48FF' : undefined}
											value={item.checked}
										/>
										<HunterText style={styles.tabcontentchild.font}>
											{item.name}
										</HunterText>
									</Pressable>
								)
							})}
					</BottomSheetScrollView>
				</View>

				{/* tab content for player type */}
				<View
					style={
						state === 4
							? styles.filter_tabcontent_selected
							: styles.filter_tabcontent_not_selected
					}
				>
					<View style={{ width: '100%' }}>
						{player_type &&
							player_type.map((item, i) => {
								return radiochecked2 === i ? (
									<Pressable key={i} style={styles.tabcontentchild}>
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

										<HunterText style={styles.tabcontentchild.font}>
											{item.name}
										</HunterText>
									</Pressable>
								) : (
									<Pressable
										key={i}
										style={styles.tabcontentchild}
										onPress={() => {
											setRadioChecked2(i)
											setCapped(item.name)
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
										<HunterText style={styles.tabcontentchild.font}>
											{item.name}
										</HunterText>
									</Pressable>
								)
							})}
					</View>
				</View>
			</View>
		</View>
	)
}

export default FilterBottomModalSheets

const styles = StyleSheet.create({
	filter_content_container: {
		display: 'flex',
		flexDirection: 'row',
	},
	filter_vertical_tab: {
		backgroundColor: '#FFFFFF',
		width: '40%',
		height: 420,
		boxSizing: 'border-box',
		borderRightWidth: 1,
		borderRightColor: '#EFEFEF',
		shadowColor: 'rgba(0, 0, 0, 0.09)',
		elevation: 10,
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: { height: 1, width: 1 },
	},
	filter_vertical_tab_button_selected: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 44,
		backgroundColor: '#E7E7E7',
	},
	filter_vertical_tab_button_not_selected: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 44,
	},
	filter_vertical_tab_button: {
		fontSize: 16,
		fontWeight: '500',
		color: '#1F1D29',
	},
	filter_tabcontent_selected: {
		display: 'flex',
		padding: 12,
		flex: 1,
		width: 234,
		marginBottom: 50,
	},
	filter_tabcontent_not_selected: {
		display: 'none',
		padding: 12,
	},
	tabcontentchild: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'center',
		height: 44,
		font: {
			marginLeft: 10,
			fontWeight: '500',
			fontSize: 14,
			lineHeight: 21,
			color: '#1F1D29',
		},
	},
})

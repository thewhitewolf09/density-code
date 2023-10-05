import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import React, { useState } from 'react'
import { BottomSheetScrollView } from '@gorhom/bottom-sheet'

const SortBottomModalSheets = ({ handlesortbottomsheet, setSortByOption }) => {
	const SortFeatures = [
		{
			name: 'Trending 25',
		},
		{
			name: 'MVPs',
		},
		{
			name: 'Buy Dip',
		},
		{
			name: 'Most Runs', // Done
		},
		{
			name: '1 Week gainers',
		},
		{
			name: 'Rising Young',
		},
		{
			name: 'Price: High to Low',
		},
		{
			name: 'All',
		},
	]
	return (
		<View style={{ height: 433 }}>
			<BottomSheetScrollView style={styles.sort_content_container}>
				{SortFeatures &&
					SortFeatures.map((item) => (
						<Pressable
							key={item.name}
							style={styles.sort_content_button}
							onPress={() => {
								setSortByOption(item.name)
								handlesortbottomsheet(-1)
							}}
						>
							<Text style={styles.sort_content_button.font} value={item.name}>
								{item.name}
							</Text>
						</Pressable>
					))}
			</BottomSheetScrollView>
		</View>
	)
}

export default SortBottomModalSheets

const styles = StyleSheet.create({
	sort_content_container: {
		display: 'flex',
		flexDirection: 'column',
		padding: 16,
		paddingBottom: 30,
		marginBottom: 80,
	},
	sort_content_button: {
		height: 49,
		paddingLeft: 18,
		borderBottomColor: '#E2E1EC',
		borderBottomWidth: 1,
		display: 'flex',
		justifyContent: 'center',
		font: {
			fontSize: 14,
			fontWeight: '500',
			lineHeight: 21,
			color: '#1F1D29',
		},
	},
})

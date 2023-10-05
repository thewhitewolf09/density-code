import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import appColors from '../../../styles/Colors'
import HunterText from '../HunterText'

const RadioButton = ({ title, isActive, onPress }) => {
	return (
		<Pressable onPress={onPress} style={styles.tabcontentchild}>
			<TouchableOpacity
				style={{
					height: 20,
					width: 20,
					borderWidth: 2,
					borderColor: isActive ? appColors.hunter : appColors.primary,
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
						backgroundColor: isActive ? '#6D48FF' : undefined,
						borderRadius: 40,
					}}
				></View>
			</TouchableOpacity>

			<HunterText style={styles.tabcontentchild.font}>{title}</HunterText>
		</Pressable>
	)
}

export default RadioButton

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

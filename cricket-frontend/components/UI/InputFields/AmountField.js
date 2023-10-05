import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import FilterButton from '../Buttons/FilterButton'
import HunterText from '../HunterText'
import appColors from '../../../styles/Colors'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const AmountField = ({ title, addOptions, unit, value, setValue, isBuy }) => {
	return (
		<View>
			<HunterText
				style={{
					fontSize: 14,
					color: '#0F0B19',
				}}
			>
				{title}
			</HunterText>
			{isBuy ? (
				<View style={styles.inputHolder}>
					{unit && (
						<HunterText style={{ textAlignVertical: 'center' }}>
							{unit}
						</HunterText>
					)}
					<TextInput
						value={value}
						style={{
							textAlignVertical: 'center',
							fontFamily: 'hunter',
							width: '100%',
							marginHorizontal: 2,
						}}
						onChange={setValue}
						onChangeText={(newValue) => {
							console.log(newValue)
							if (newValue == '') setValue(0)
							else setValue(newValue)
						}}
						keyboardType="numeric"
						placeholder={title}
					/>
				</View>
			) : (
				<View style={styles.inputHolder}>
					<TextInput
						value={value}
						style={{
							textAlignVertical: 'center',
							fontFamily: 'hunter',
							width: '100%',
							marginHorizontal: 2,
						}}
						onChange={setValue}
						onChangeText={(newValue) => {
							setValue(newValue)
						}}
						keyboardType="numeric"
						placeholder={title}
					/>
					{unit && (
						<HunterText
							style={{
								textAlignVertical: 'center',
								marginLeft: -10,
							}}
						>
							{unit}
						</HunterText>
					)}
				</View>
			)}

			<View style={{ flexDirection: 'row', marginVertical: sHeight / 141 }}>
				{addOptions.map((option, i) => (
					<FilterButton
						key={i}
						style={{ marginHorizontal: sWidth / 67 }}
						title={option}
						onPress={() => {
							isBuy
								? setValue(
										(
											parseInt(value ? value : 0) + parseInt(option.slice(1))
										).toString(),
								  )
								: setValue(
										(
											parseInt(value ? value : 0) +
											parseInt(option.slice(0, -1))
										).toString(),
								  )
							// console.log(option.slice(1));
						}}
					/>
				))}
			</View>
		</View>
	)
}

export default AmountField

const styles = StyleSheet.create({
	inputHolder: {
		flexDirection: 'row',
		borderWidth: 2,
		padding: sWidth / 30.7,
		borderRadius: 12,
		borderColor: appColors.secondaryDark,
		fontFamily: 'hunter',
		marginVertical: 6,
	},
})

import { Pressable, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import HunterText from '../HunterText'
import Colors from '../../../styles/Colors'
import screenUtils from '../../../constants/Dimensions'

const SwitchButton = ({
	leftTitle,
	rightTitle,
	leftPress,
	rightPress,
	leftVisible,
	checked,
	clicked,
}) => {
	const [select, setSelect] = useState(false)

	return (
		<View
			style={{
				
				display: 'flex',
				flexDirection: 'row',
				paddingVertical: screenUtils.height / 600,
				background: 'transparent',
				justifyContent: 'center',
				elevation: 4,
                marginBottom:screenUtils.height / 50
			}}
		>
			<Pressable
				onPress={() => {
                    {leftPress()}
					setSelect(true)
				}}
			>
				<View
					style={
						clicked
							? [
									styles.SelectedBtn,
									{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
							  ]
							: [
									styles.UnSelect,
									{ borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
							  ]
					}
				>
					<HunterText
						style={clicked ? styles.SelectBtnText : styles.UnSelectBtnText}
					>
						{leftTitle}
					</HunterText>
				</View>
			</Pressable>
			<Pressable
				onPress={() => {
					setSelect(false)
                    {rightPress()}
				}}
			>
				<View
					
					style={
						!clicked
							? [
									styles.SelectedBtn,
									{ borderTopRightRadius: 8, borderBottomRightRadius: 8 },
							  ]
							: [
									styles.UnSelect,
									{ borderTopRightRadius: 8, borderBottomRightRadius: 8 },
							  ]
					}
				>
					<HunterText
						style={!clicked ? styles.SelectBtnText : styles.UnSelectBtnText}
					>
						{rightTitle}
					</HunterText>
				</View>
			</Pressable>
		</View>
	)
}

export default SwitchButton

const styles = StyleSheet.create({
	textStyle: {
		backgroundColor: '#6D48FF',
		color: 'white',
		textAlign: 'center',
		borderRadius: 12,
		padding: screenUtils.width / 30.7,
		fontSize: screenUtils.width / 25,
	},
	SelectedBtn: {
		borderRightWidth: 1,
		borderColor: 'grey',
		paddingVertical: screenUtils.height / 70,
		paddingHorizontal: 10,
		textAlign: 'center',
		backgroundColor: 'rgba(109, 72, 255, 0.72)',
		width: screenUtils.width / 2,
	},

	UnSelect: {
		borderRightWidth: 1,
		borderColor: 'grey',
		paddingVertical: screenUtils.height / 70,
		paddingHorizontal: 10,
		textAlign: 'center',
		backgroundColor: 'white',
		width: screenUtils.width / 2,
	},

	SelectBtnText: { color: 'white', textAlign: 'center' },
	UnSelectBtnText: { color: 'black', textAlign: 'center' },
})

{
	/* <View>
			<View
				style={{
					position: 'absolute',
					bottom: 0,
					// backgroundColor: '#FFFFFF',
                    background:'transparent',
					padding: 25,
					flex: 1,
					display: 'flex',
					flexDirection: 'row',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
				}}
			>
				<View
					style={{
						flex: 1,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Pressable
						// onPress={() => navigation.navigate("BuySell")}
						style={{ flex: 0.45, elevation: 10 }}
					>
						<HunterText
							style={{
								backgroundColor: '#EDEFF1',
								textAlign: 'center',
								borderRadius: 12,
								padding: 13,
								fontSize: 16,
							}}
						>
							Sell
						</HunterText>
					</Pressable>
					<Pressable style={{ flex: 0.45 }}>
						<HunterText
							style={{
								backgroundColor: '#6D48FF',
								color: 'white',
								textAlign: 'center',
								borderRadius: 12,
								padding: 13,
								fontSize: 16,
							}}
						>
							Buy
						</HunterText>
					</Pressable>
				</View>
			</View>
		</View>



 */
}

{
	/* <View
			style={{
				position: 'absolute',
				bottom: 0,
				backgroundColor: '#FFFFFF',
				padding: screenUtils.height / 36,
				flex: 1,
				display: 'flex',
				flexDirection: 'row',
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
				elevation: 20,
			}}
		>
			<View
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				{leftTitle && (
					<Pressable
						onPress={leftPress}
						style={{
							flex: 0.45,
							elevation: 10,
							borderRadius: 12,
						}}
					>
						<HunterText
							style={{
								backgroundColor: '#EDEFF1',
								textAlign: 'center',
								padding: 13,
								fontSize: 16,
							}}
						>
							{leftTitle}
						</HunterText>
					</Pressable>
				)}
				<Pressable
					style={{ flex: leftVisible ? 0.45 : 1, elevation: 10 }}
					onPress={rightPress}
				>
					<HunterText
						style={{
							backgroundColor: checked ? Colors.hunter : Colors.secondary,
							color: 'white',
							textAlign: 'center',
							borderRadius: 12,
							padding: 13,
							fontSize: 16,
						}}
					>
						{rightTitle}
					</HunterText>
				</Pressable>
			</View>
		</View> */
}

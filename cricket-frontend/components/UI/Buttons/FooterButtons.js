import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import HunterText from '../HunterText'
import Colors from '../../../styles/Colors'
import screenUtils from '../../../constants/Dimensions'
import appColors from '../../../styles/Colors'

const FooterButtons = ({
	leftTitle,
	rightTitle,
	leftPress,
	rightPress,
	leftVisible,
	checked,
}) => {
	return (
		<View
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
						}}
					>
						<HunterText
							style={{
								backgroundColor: '#EDEFF1',
								textAlign: 'center',
								padding: screenUtils.width / 30.8,
								borderRadius: 12,
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
							backgroundColor: checked ? appColors.hunter : appColors.secondary,
							color: 'white',
							textAlign: 'center',
							borderRadius: 12,
							padding: screenUtils.width / 30.8,
							fontSize: 16,
						}}
					>
						{rightTitle}
					</HunterText>
				</Pressable>
			</View>
		</View>
	)
}

export default FooterButtons

const styles = StyleSheet.create({
	textStyle: {
		backgroundColor: '#6D48FF',
		color: 'white',
		textAlign: 'center',
		borderRadius: 12,
		padding: screenUtils.width / 30.7,
		fontSize: screenUtils.width / 25,
	},
})

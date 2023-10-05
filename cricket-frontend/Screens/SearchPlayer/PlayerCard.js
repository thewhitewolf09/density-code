import {
	Dimensions,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React, { useState } from 'react'
import HunterBoldText from '../../components/UI/HunterBoldText'
import { useNavigation } from '@react-navigation/native'
import PercentageChange from '../../components/UI/PercentageChange'
import { arrowDownwardIos, vkSmall } from '../../assets/assets'
// import Checkbox from 'expo-checkbox'
import HunterText from '../../components/UI/HunterText'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import Checkbox from 'expo-checkbox'
import screenUtils from '../../constants/Dimensions'
import NumberToWord from '../../helpers/NumberToWord'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const arrow = '❯'

const PlayerCard = ({
	button,
	arrow,
	checkbox,
	name,
	position,
	nationality,
	ipl_team,
	backgroundColor,
	imageUrl,
	price,
	percentagechange,
}) => {
	if (name.length > 18) {
		name = name.substring(0, 18) + '...'
	}
	if (nationality.length > 8) {
		nationality = nationality.substring(0, 8) + '...'
	}
	if (ipl_team.length > 7) {
		ipl_team = ipl_team.substring(0, 7) + '...'
	}

	const navigation = useNavigation()
	const [isChecked, setIsChecked] = useState(false)
	return (
		<View
			style={{
				flexDirection: 'row',
				// width: 0.8 * width,
				paddingHorizontal: screenUtils.width / 40,
			}}
		>
			{checkbox && (
				<Checkbox
					color={backgroundColor ? '#6D48FF' : undefined}
					value={backgroundColor}
					onValueChange={() => {
						setIsChecked(!isChecked)
					}}
					style={{ alignSelf: 'center' }}
				/>
			)}
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginVertical: height * 0.011,
					marginHorizontal: 0.015 * width,
					alignItems: 'center',
					paddingHorizontal: 0.025 * width,
					paddingVertical: 0.01 * height,
					backgroundColor: backgroundColor ? 'lightblue' : 'white',
					borderRadius: 20,
					elevation: 10,
					width: 0.9 * width,
				}}
			>
				<View style={{ flexDirection: 'row', width: '70%' }}>
					<View
						style={{
							backgroundColor: '#ECECEC',
							borderRadius: 20,
							marginRight: width * 0.04,
						}}
					>
						<Image
							source={{ uri: imageUrl }}
							style={{
								height: 0.11 * height,
								width: 0.2 * width,
								paddingTop: 0.01 * height,
								borderRadius: 20,
							}}
						/>
					</View>
					<View
						style={{
							justifyContent: 'center',
							lineHeight: 30,
						}}
					>
						<HunterSemiBoldText style={{ fontSize: 16, letterSpacing: 0.5 }}>
							{name}
						</HunterSemiBoldText>
						<HunterText>{position}</HunterText>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								// justifyContent: 'space-between',
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									borderStyle: 'solid',
									borderWidth: 1,
									borderColor: '#ECECEC',
									borderRadius: 10,
									paddingHorizontal: height * 0.005,
									alignItems: 'center',
								}}
							>
								<View
									style={{
										borderStyle: 'solid',
										borderWidth: 4,
										borderColor: 'blue',
										borderRadius: 10,
										height: 0.01,
										width: 0.01,
									}}
								>
									<HunterText> </HunterText>
								</View>
								<HunterText
									style={{
										fontSize: 12,
										flexWrap: 'wrap',
										maxWidth: 0.2 * width,
									}}
								>
									{' '}
									{nationality}
								</HunterText>
							</View>
							<View
								style={{
									flexDirection: 'row',
									borderStyle: 'solid',
									borderWidth: 1,
									borderColor: '#ECECEC',
									borderRadius: 10,
									paddingHorizontal: height * 0.005,
									marginLeft: 0.01 * width,
									alignItems: 'center',
								}}
							>
								<View
									style={{
										borderStyle: 'solid',
										borderWidth: 4,
										borderColor: 'red',
										borderRadius: 10,
										height: 0.01,
										width: 0.01,
									}}
								>
									<HunterText> </HunterText>
								</View>
								<HunterText
									style={{
										fontSize: 12,
										flexWrap: 'wrap',
										maxWidth: 0.2 * width,
									}}
								>
									{' '}
									{ipl_team}
								</HunterText>
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						alignItems: 'center',
						width: '27.5%',
					}}
				>
					<HunterBoldText style={{ fontSize: 16, letterSpacing: 1 }}>
						₹{NumberToWord(price.toFixed(2))}
					</HunterBoldText>
					<PercentageChange value={Math.round(percentagechange * 100) / 100} />
					{/* <HunterText style={{ color: "green", marginVertical:height*0.01 }}>95%</HunterText> */}
					{/* <Button title="Buy/Sell" color="black"  /> */}
					{button && (
						<Pressable
							onPress={() => navigation.navigate('PlayerInfo')}
							style={styles.button}
						>
							<HunterText style={styles.text}>Buy/Sell</HunterText>
						</Pressable>
					)}
				</View>
				{!checkbox && <HunterText>{'❯'}</HunterText>}
				{/* <Pressable
				onPress={() => {
					setIsChecked(!isChecked)
				}}
			>
				{checkbox && (
					<Checkbox
						color={isChecked ? '#6D48FF' : undefined}
						value={isChecked}
						onValueChange={() => {
							setIsChecked(!isChecked)
						}}
					/>
				)}
			</Pressable> */}
			</View>
		</View>
	)
}

export default PlayerCard

const styles = StyleSheet.create({
	maindiv: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginVertical: height * 0.011,
		marginHorizontal: 0.03 * width,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 0.025 * width,
		paddingVertical: 0.01 * height,
		backgroundColor: 'white',
		borderRadius: 20,
		elevation: 10,
		width: 0.8 * width,
	},
	button: {
		backgroundColor: 'black',
		borderRadius: 30,
		paddingHorizontal: height * 0.01,
		paddingVertical: height * 0.005,
	},
	text: {
		color: 'white',
		textAlign: 'center',
		fontSize: 12,
		paddingHorizontal: width * 0.03,
	},
})

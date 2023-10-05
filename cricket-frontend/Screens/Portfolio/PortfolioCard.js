//
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	Pressable,
} from 'react-native'
import React from 'react'

import PercentageChange from './../../components/UI/PercentageChange'
import { useNavigation } from '@react-navigation/native'
import { image17 } from './../../assets/assets'
import appColors from './../../styles/Colors'
import HunterText from './../../components/UI/HunterText'
import screenUtils from '../../constants/Dimensions'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import shortName from '../../helpers/shortNameHelper'
import NumberToWord from '../../helpers/NumberToWord'

const { width, height } = Dimensions.get('window')

const PortfolioCard = ({
	name,
	position,
	nationality,
	ipl_team,
	imageURL,
	player_stock,
	stock_amount,
}) => {
	if (name?.length > 15) {
		name = name.substring(0, 15) + '...'
	}

	const navigation = useNavigation()
	return (
		<View style={styles.cardView}>
			<View style={styles.cardInside}>
				<View>
					<Image
						source={{ uri: imageURL }}
						style={{
							height: height / 16,
							width: width / 40,
							padding: width / 10,
						}}
					/>
				</View>
				<View style={{ alignItems: 'center', lineHeight: 10 }}>
					<HunterSemiBoldText
						style={{ fontSize: 16, letterSpacing: 0.5, textAlign: 'center' }}
					>
						{name}
					</HunterSemiBoldText>
					<HunterText>{position}</HunterText>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.teamStyle}>
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
						<HunterText style={{ fontSize: 12 }}>
							{' '}
							{shortName(nationality)}
						</HunterText>
					</View>

					<View style={styles.teamStyle}>
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
						<HunterText style={{ fontSize: 12 }}>
							{' '}
							{shortName(ipl_team)}
						</HunterText>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 7,
					}}
				>
					<HunterText style={{ fontSize: 16, letterSpacing: 1 }}>
						{NumberToWord(player_stock.price.toFixed(3))}
					</HunterText>
					<PercentageChange value={player_stock.one_hour} />
				</View>

				{/* Quantity View */}
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						borderWidth: 2,
						width: 0.36 * width,
						height: 0.04 * height,
						borderRadius: 40,
						borderColor: appColors.white,
						backgroundColor: '#6D48FF33',
						elevation: 10,
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginHorizontal: screenUtils.width / 40,
						}}
					>
						<HunterText style={{ fontWeight: '400', fontSize: 10 }}>
							QTY
						</HunterText>
						<HunterText style={{ fontSize: 16 }}>
							{' '}
							{parseFloat(stock_amount).toFixed(4)}
						</HunterText>
					</View>
					<View
						style={{
							backgroundColor: appColors.white,
							borderRadius: 40,
							alignItems: 'center',
							justifyContent: 'center',
							paddingHorizontal: 10,
						}}
					>
						<HunterText style={{ color: 'green' }}>
							{parseInt(player_stock.one_hour)}
						</HunterText>
					</View>
				</View>
			</View>
		</View>
	)
}

export default PortfolioCard

const styles = StyleSheet.create({
	cardView: {
		justifyContent: 'center',
		borderRadius: 20,
		width: 0.4 * width,
		backgroundColor: appColors.white,
		elevation: 10,
		marginHorizontal: width * 0.04,
		marginVertical: width * 0.05,
	},
	cardInside: {
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: height * 0.02,
		paddingHorizontal: width * 0.01,
		// borderWidth: 1,
	},
	virat: {
		width: width * 0.2,
		height: height * 0.08,
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
	teamStyle: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#ECECEC',
		borderRadius: 74,
		paddingHorizontal: height * 0.005,
		marginLeft: 0.01 * width,
		alignItems: 'center',
	},
})

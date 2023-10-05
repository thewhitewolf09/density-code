import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	Pressable,
} from 'react-native'
import React from 'react'

import PercentageChange from '../../../components/UI/PercentageChange'
import { useNavigation } from '@react-navigation/native'
import { image17 } from '../../../assets/assets'
import appColors from '../../../styles/Colors'
import HunterText from '../../../components/UI/HunterText'

const { width, height } = Dimensions.get('window')

const PortfolioCard = ({ item }) => {
	const navigation = useNavigation()
	return (
		<View style={styles.cardView}>
			<View style={styles.cardInside}>
				<View>
					<Image source={image17} style={styles.virat} />
				</View>
				<View style={{ alignItems: 'center', lineHeight: 10 }}>
					<HunterText
						style={{ fontWeight: '700', fontSize: 16, letterSpacing: 0.5 }}
					>
						Virat Kohli
					</HunterText>
					<HunterText>Batsman</HunterText>
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
						<HunterText style={{ fontSize: 12 }}> India</HunterText>
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
						<HunterText style={{ fontSize: 12 }}> RCB</HunterText>
					</View>
				</View>

				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 7,
					}}
				>
					<HunterText
						style={{ fontWeight: '500', fontSize: 16, letterSpacing: 1 }}
					>
						₹5,500
					</HunterText>
					<PercentageChange value={95} />
				</View>
				<Pressable
					onPress={() => navigation.navigate('PlayerInfo')}
					style={styles.button}
				>
					<HunterText style={styles.text}>Buy/Sell</HunterText>
				</Pressable>
			</View>
		</View>
	)
}

export default PortfolioCard

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardView: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		width: 0.44 * width,
		height: height * 0.3,
		backgroundColor: appColors.white,
		elevation: 10,
		// marginHorizontal: width*0.04,
		marginVertical: width * 0.05,
	},
	cardInside: {
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

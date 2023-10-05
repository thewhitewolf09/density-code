import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import PercentageChange from '../../../components/UI/PercentageChange'
import BackArrow from '../../../assets/Images/Svg/BackArrow'
import { useNavigation } from '@react-navigation/native'
import HunterText from '../../../components/UI/HunterText'
import { vkSmall } from '../../../assets/assets'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const PlayerInfoCard = ({ onPress, player }) => {
	if (player.nationality?.length > 15) {
		player.nationality = player.nationality.substring(0, 15) + '...'
	}
	if (player.ipl_team?.length > 15) {
		player.ipl_team = player.ipl_team.substring(0, 15) + '...'
	}
	if (player.name?.length > 20) {
		player.name = player.name.substring(0, 20) + '...'
	}
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<View style={{ marginTop: height / 105 }}>
				<HunterSemiBoldText
					style={{
						color: '#0B0617',
						fontSize: 16,
					}}
				>
					{player.name}
				</HunterSemiBoldText>
				<HunterText style={{ fontSize: 12, lineHeight: 18 }}>
					{player.type}
				</HunterText>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					<View style={styles.teamContainer}>
						<View style={styles.dotBlue}>
							<HunterText> </HunterText>
						</View>
						<HunterText style={{ fontSize: 12 }}>
							{' '}
							{player.nationality}
						</HunterText>
					</View>
					<View style={styles.teamContainer}>
						<View style={styles.dotRed}>
							<HunterText> </HunterText>
						</View>
						<HunterText style={{ fontSize: 12 }}> {player.ipl_team}</HunterText>
					</View>
				</View>
			</View>
			<View style={{ alignSelf: 'center', marginHorizontal: 2 }}>
				<HunterText>
					₹
					{player ? parseFloat(player.player_stock?.price).toFixed(2) : '5,500'}
				</HunterText>
				<PercentageChange
					value={player ? player.player_stock?.one_hour.toFixed(2) : 10}
				/>
			</View>
			<View
				style={{
					width: '20%',
				}}
			>
				<Image
					source={{ uri: player.image_URL }}
					style={{
						flex: 1,
						borderRadius: 20,
					}}
				/>
			</View>
		</View>
	)
}
export default PlayerInfoCard
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 12,
	},
	dotRed: {
		borderStyle: 'solid',
		borderWidth: 4,
		borderColor: '#D23954',
		borderRadius: 10,
		height: 0.01,
		width: 0.01,
	},
	dotBlue: {
		borderStyle: 'solid',
		borderWidth: 4,
		borderColor: '#4674D7',
		borderRadius: 10,
		height: 0.01,
		width: 0.01,
	},
	teamContainer: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#9292924d',
		borderRadius: 74,
		paddingHorizontal: width / 80,
		paddingVertical: height / 400,
		marginVertical: height / 200,
		alignItems: 'center',
		marginRight: width / 175,
	},
})

import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import FooterButtons from '../../components/UI/Buttons/FooterButtons'
import { useNavigation } from '@react-navigation/native'

const YouveWon = ({ handleresultbottomsheet, handleLiquidatebottomsheet }) => {
	const navigation = useNavigation()
	return (
		<View style={{ height: '88%' }}>
			<View style={{ ...styles.MatchTeamDetails, marginTop: 20 }}>
				<View
					style={{
						backgroundColor: 'white',
						width: '90%',
						// height: 70,
						borderRadius: 20,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						marginTop: 10,
						paddingVertical: 10,
						elevation: 5,
					}}
				>
					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						<View
							style={{
								backgroundColor: '#fff',
								width: '30%',
								// height: 70,
								borderRadius: 13,
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								//   marginTop: 10,
								padding: 10,
								elevation: 5,
							}}
						>
							<Image
								style={styles.tinyLogo}
								source={require('./../../assets/Images/flagvs1.png')}
							/>
						</View>
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Text
								style={{
									paddingHorizontal: 8,
									fontWeight: '700',
									fontSize: 16,
								}}
							>
								IND
							</Text>
						</View>
					</View>
					<View style={{ display: 'flex', justifyContent: 'center' }}>
						<Text style={{ fontWeight: '400', fontSize: 12, color: 'black' }}>
							VS
						</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						<View
							style={{
								backgroundColor: '#fff',
								width: '30%',
								// height: 70,
								borderRadius: 13,
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								//   marginTop: 10,
								padding: 10,
								elevation: 5,
								alignItems: 'center',
							}}
						>
							<Image
								style={styles.tinyLogo}
								source={require('./../../assets/Images/flagvs2.png')}
							/>
						</View>
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Text
								style={{
									paddingHorizontal: 8,
									fontWeight: '700',
									fontSize: 16,
								}}
							>
								PAK
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: '12%',
				}}
			>
				<Text style={{ fontSize: 16, fontWeight: '600', padding: 10 }}>
					You’ve won 400 stocks
				</Text>
				<Text style={{ fontSize: 12, textAlign: 'center', color: '#525252' }}>
					You can either liquidate your winnings or keep it in {'\n'} the
					wallet.
				</Text>
			</View>

			<FooterButtons
				leftPress={() => {
					navigation.navigate('BottomNavigation')
				}}
				rightPress={() => {
					handleLiquidatebottomsheet(0)
					handleresultbottomsheet(-1)
				}}
				leftVisible={true}
				leftTitle={"Don't Liquidate"}
				rightTitle={'Liquidate'}
				checked={true}
			/>
		</View>
	)
}

export default YouveWon

const styles = StyleSheet.create({
	MatchTeamADetails: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	MatchTeamDetails: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})

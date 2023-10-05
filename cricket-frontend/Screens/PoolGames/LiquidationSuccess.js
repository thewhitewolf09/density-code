import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'

import WalletHeader from '../../components/UI/WalletHeader'
import HunterText from '../../components/UI/HunterText'
import Colors from '../../styles/Colors'
import HunterButton from '../../components/UI/Buttons/HunterButton'

import { LinearGradient } from 'expo-linear-gradient'
import { mobilePhoneCoin1 } from '../../assets/assets'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Liquidate = () => {
	const navigation = useNavigation()
	return (
		<View style={{ flex: 1 }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader style={{}} />
				<View
					style={{
						height: 0.91 * height,
						borderColor: Colors.white,
						backgroundColor: Colors.whiteHalf,
						borderTopLeftRadius: 17,
						borderTopRightRadius: 17,
					}}
				>
					<View style={{ marginVertical: height * 0.067 }}>
						<Image source={mobilePhoneCoin1} />
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<View style={{ alignItems: 'center', justifyContent: 'center' }}>
							<HunterText style={{ fontSize: 20, fonstWeight: '700' }}>
								Liquidation Initiated Successfully
							</HunterText>
						</View>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								width: 0.89 * width,
							}}
						>
							<HunterText style={{ fontSize: 14, fonstWeight: '400' }}>
								It might take upto 2 working days for the liquidation. We thank
								you for the patience.
							</HunterText>
						</View>
					</View>
				</View>
				<View
					style={{
						elevation: 10,
						position: 'absolute',
						bottom: 0,
						flex: 1,
						flexDirection: 'row',
						margin: 16,
					}}
				>
					<HunterButton
						onPress={() => {
							navigation.navigate('BottomNavigation')
						}}
						title={'Go Home'}
					/>
				</View>
			</LinearGradient>
		</View>
	)
}

export default Liquidate

const styles = StyleSheet.create({})

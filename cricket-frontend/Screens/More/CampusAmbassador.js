import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Dimensions,
	Pressable,
	Image,
	ScrollView,
} from 'react-native'
import ForwardArrow from '../../assets/MoreIcons/arrow_forward.png'

import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import HunterText from '../../components/UI/HunterText'
import ToggleSwitch from 'toggle-switch-react-native'
import screenUtils from '../../constants/Dimensions'
import {
	arrowDownward,
	arrowDownwardIos,
	cap_more,
	DummyProfileImg,
	language,
	notifications_active,
	signout,
} from '../../assets/assets'
import HunterSemiBoldText from '../../components/UI/HunterSemiBoldText'
import Moretrial from './Moretrial'
import HunterBoldText from '../../components/UI/HunterBoldText'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const CampusAmbassador = () => {
	const [toggleSwitch, setToggleSwitch] = useState(true)
	return (
		<SafeAreaView>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<ScrollView style={{ height: sHeight / 1 }}>
					<WalletHeader />
					<View
						style={{
							padding: sWidth / 40,
							borderWidth: 0,
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-around',
								alignItems: 'center',
							}}
						>
							<Image
								source={require('../../assets/Images/CA.png')} // source={require("../assets/images/sort.png")}
								style={{
									width: sWidth / 4,
									height: sHeight / 3.2,
									marginBottom: -12,
									zIndex: 2,
								}}
							/>
							<View style={{ width: sWidth / 1.79, padding: sWidth / 13 }}>
								<HunterBoldText style={{ fontSize: 20 }}>
									Become a student Campus Ambassador with density
								</HunterBoldText>
							</View>
						</View>
						<View
							style={{
								height: sHeight / 1.42,
								backgroundColor: 'white',
								width: sWidth / 1.07,
								borderWidth: 0,
								borderRadius: 12,
								elevation: 4,
								padding: sWidth / 30,
								paddingTop: sWidth / 13,
							}}
						>
							<HunterText>
								Convallis sapien eleifend eget mollis nisi id bibendum aenean.
								Porta amet commodo ut sed at. Viverra donec leo vitae tellus
								mattis tristique convallis porta at. Sagittis suspendisse vitae
								sed sagittis phasellus in pellentesque elementum. Blandit nullam
								blandit augue sit. Feugiat malesuada lacus ac vitae pulvinar
								enim. Vivamus sed ornare posuere sed ac euismod vestibulum
								tortor aliquam. Egestas turpis interdum lectus orci lectus
								tellus. Sem faucibus tristique placerat pellentesque id turpis.
								Platea ipsum montes commodo malesuada at fermentum sed. Tempus
								nisl nisi quis curabitur. In vestibulum hac integer sit et
								aliquam vitae eget ac. Enim et bibendum velit ut pellentesque
								sed turpis. Praesent at quam commodo laoreet nibh nibh. Quis
								nulla enim duis gravida vel aenean quis volutpat. Posuere risus
								donec neque lectus bibendum eleifend nunc lectus eget. Egestas
								purus libero massa aenean ridiculus. Sed arcu tincidunt massa
								tellus nisi suspendisse augue lorem ut. Blandit eu quis dui
								mauris. Ac sed tellus rhoncus accumsan duis cursus semper sit.
								Tellus sagittis cursus posuere potenti nec. Sagittis nulla
								sollicitudin aliquet metus. Diam orci lectus imperdiet
								condimentum. Turpis non ac id semper dolor. Nam mauris tellus
								lacinia eu eu convallis interdum egestas.
							</HunterText>
						</View>
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default CampusAmbassador

const styles = StyleSheet.create({
	upperContainer: {
		borderRadius: 12,
		paddingVertical: 10,
	},
})

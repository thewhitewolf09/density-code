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

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const More = () => {
	const [toggleSwitch, setToggleSwitch] = useState(true)
	return (
		<SafeAreaView>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<ScrollView style={{ height: sHeight / 1.06 }}>
					<WalletHeader />
					<View style={{ marginHorizontal: sWidth / 20 }}>
						<LinearGradient
							start={{ x: 0.5, y: 0.0 }}
							end={{ x: 0.5, y: 1.0 }}
							locations={[0.1, 1.0]}
							colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.56)']}
							style={{
								borderRadius: 20,
								paddingVertical: 10,
								borderColor: '#fff',
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'flex-start',
								}}
							>
								<View
									style={{
										width: 78,
										height: 78,
										backgroundColor: 'rgba(235, 224, 255, 1)',
										borderRadius: 13,
										marginHorizontal: 10,
										alignSelf: 'center',
										justifyContent: 'center',
									}}
								>
									<Image
										source={DummyProfileImg}
										style={{ width: 44, height: 44, alignSelf: 'center' }}
									/>
								</View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										flex: 9,
										alignSelf: 'center',
										paddingHorizontal: 10,
									}}
								>
									<View>
										<HunterText
											style={{
												fontSize: 16,
												fontWeight: '500',
												lineHeight: 24,
											}}
										>
											User1308
										</HunterText>
										<HunterText
											style={{
												fontSize: 12,
												fontWeight: '400',
												lineHeight: 18,
												color: '#1F1D29',
											}}
										>
											+91 ******58
										</HunterText>
									</View>
									<View style={{ justifyContent: 'center' }}>
										<Image
											source={ForwardArrow}
											style={{
												width: screenUtils.width / 34,
												height: screenUtils.height / 38,
											}}
										/>
									</View>
								</View>
							</View>
						</LinearGradient>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
						}}
					>
						<Moretrial />
					</View>
					<View
						style={{
							margin: sWidth / 20,
						}}
					>
						<LinearGradient
							start={{ x: 0.5, y: 0.0 }}
							end={{ x: 0.5, y: 1.0 }}
							locations={[0.1, 1.0]}
							colors={['rgba(109, 72, 255, 1)', 'rgba(161, 63, 194, 0.09)']}
							style={styles.upperContainer}
						>
							<View style={{ flexDirection: 'row', paddingTop: 20 }}>
								<View>
									<View>
										<HunterText
											style={{
												fontSize: 16,
												fontWeight: '600',
												lineHeight: 24,
												color: '#fff',
												left: 20,
											}}
										>
											Join Student campus {'\n'}ambassador program
										</HunterText>
									</View>
									<View>
										<Pressable
											style={{ marginVertical: 15 }}
											onPress={() => navigation.navigate('PlayerList')}
										>
											<LinearGradient
												start={{ x: 0.0, y: 0.0 }}
												end={{ x: 0.5, y: 1.25 }}
												locations={[0, 1]}
												colors={['#Fff', '#fFF']}
												style={{
													width: 91,
													height: 27,
													color: '#000',
													paddingVertical: 5,
													borderRadius: 12,
													left: 20,
												}}
											>
												<HunterText
													style={{
														color: '#000',
														fontWeight: '500',
														textAlign: 'center',
														lineHeight: 15,
														fontSize: 10,
													}}
												>
													Get started{' '}
												</HunterText>
											</LinearGradient>
										</Pressable>
									</View>
								</View>
								<View
									style={{
										position: 'absolute',
										left: sWidth / 2,
										top: -sHeight / 20,
									}}
								>
									<Image
										source={cap_more}
										style={{ height: sHeight / 6.1, width: sWidth / 2.65 }}
									/>
								</View>
							</View>
						</LinearGradient>
					</View>

					<View
						style={{
							margin: sWidth / 20,
						}}
					>
						<LinearGradient
							start={{ x: 0.5, y: 0.0 }}
							end={{ x: 0.5, y: 1.0 }}
							locations={[0.1, 1.0]}
							colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.56)']}
							style={{
								borderRadius: 20,
								paddingVertical: 10,
								justifyContent: 'space-evenly',
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'flex-start',
									paddingBottom: 10,
								}}
							>
								<View
									style={{
										width: 36,
										height: 36,
										backgroundColor: 'rgba(203, 190, 255, 0.51)',
										borderRadius: 13,
										marginHorizontal: 10,
										alignSelf: 'center',
										justifyContent: 'center',
									}}
								>
									<Image
										source={notifications_active}
										style={{ width: 13.33, height: 13.33, alignSelf: 'center' }}
									/>
								</View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										flex: 9,
										alignSelf: 'center',
										paddingHorizontal: 10,
									}}
								>
									<View>
										<HunterText
											style={{
												fontSize: 16,
												fontWeight: '500',
												lineHeight: 24,
											}}
										>
											Notifications
										</HunterText>
									</View>
									<View style={{ justifyContent: 'center' }}>
										<ToggleSwitch
											isOn={toggleSwitch}
											onColor="green"
											offColor="rgba(127, 95, 255, 0.56)"
											labelStyle={{ color: 'black', fontWeight: '900' }}
											size="small"
											onToggle={(isOn) => setToggleSwitch(!toggleSwitch)}
										/>
									</View>
								</View>
							</View>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'flex-start',
									paddingVertical: 10,
								}}
							>
								<View
									style={{
										width: 36,
										height: 36,
										backgroundColor: 'rgba(203, 190, 255, 0.51)',
										borderRadius: 13,
										marginHorizontal: 10,
										alignSelf: 'center',
										justifyContent: 'center',
									}}
								>
									<Image
										source={language}
										style={{ width: 13.33, height: 13.33, alignSelf: 'center' }}
									/>
								</View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										flex: 9,
										alignSelf: 'center',
										paddingHorizontal: 10,
									}}
								>
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-evenly',
										}}
									>
										<HunterText
											style={{
												fontSize: 16,
												fontWeight: '500',
												lineHeight: 24,
											}}
										>
											Change Language
										</HunterText>
									</View>
									<View
										style={{
											// justifyContent: 'center',
											flexDirection: 'row',
											alignSelf: 'center',
										}}
									>
										<View style={{ paddingHorizontal: 10 }}>
											<HunterSemiBoldText
												style={{
													fontSize: 14,
													lineHeight: 21,
													color: '#A3A3A3',
												}}
											>
												EN
											</HunterSemiBoldText>
										</View>
										<View style={{ alignSelf: 'center' }}>
											<Image source={arrowDownwardIos} />
										</View>
									</View>
								</View>
							</View>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'flex-start',
									paddingTop: 10,
								}}
							>
								<View
									style={{
										width: 36,
										height: 36,
										backgroundColor: 'rgba(203, 190, 255, 0.51)',
										borderRadius: 13,
										marginHorizontal: 10,
										alignSelf: 'center',
										justifyContent: 'center',
									}}
								>
									<Image
										source={signout}
										style={{ width: 13.33, height: 13.33, alignSelf: 'center' }}
									/>
								</View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										flex: 9,
										alignSelf: 'center',
										paddingHorizontal: 10,
									}}
								>
									<View>
										<HunterText
											style={{
												fontSize: 16,
												fontWeight: '500',
												lineHeight: 24,
											}}
										>
											Sign out
										</HunterText>
									</View>
									<View style={{ justifyContent: 'center' }}>
										<Image source={arrowDownwardIos} />
									</View>
								</View>
							</View>
						</LinearGradient>
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default More

const styles = StyleSheet.create({
	upperContainer: {
		borderRadius: 12,
		paddingVertical: 10,
	},
})

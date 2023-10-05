import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { call, DummyProfileImg, email } from '../../assets/assets'
import HunterText from '../../components/UI/HunterText'
import WalletHeader from '../../components/UI/WalletHeader'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
const ContactUs = () => {
	return (
		<View>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<WalletHeader />
				<View style={{ marginTop: 0, margin: sWidth / 20 }}>
					<View style={{ elevation: 20 }}>
						<LinearGradient
							start={{ x: 0.5, y: 0.0 }}
							end={{ x: 0.5, y: 1.0 }}
							locations={[0.1, 1.0]}
							colors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 1)']}
							style={{
								borderRadius: 32,
								paddingVertical: 10,
								borderColor: '#fff',
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'flex-start',
									height: 120,
								}}
							>
								<View
									style={{
										marginHorizontal: 19,
										alignSelf: 'center',
										justifyContent: 'center',
									}}
								>
									<Image
										source={email}
										style={{ width: 78, height: 69, alignSelf: 'center' }}
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
												paddingVertical: 3,
											}}
										>
											Send an Email{' '}
										</HunterText>
										<HunterText
											style={{
												fontSize: 16,
												fontWeight: '600',
												lineHeight: 24,
												color: '#6D48FF',
												paddingVertical: 3,
											}}
										>
											help@hunterapp.com{' '}
										</HunterText>
									</View>
								</View>
							</View>
						</LinearGradient>
					</View>
				</View>
				<View style={{ marginTop: 20, margin: sWidth / 20 }}>
					<LinearGradient
						start={{ x: 0.5, y: 0.0 }}
						end={{ x: 0.5, y: 1.0 }}
						locations={[0.1, 1.0]}
						colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.56)']}
						style={{
							borderRadius: 32,
							paddingVertical: 10,
							borderColor: '#fff',
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'flex-start',
								height: 120,
							}}
						>
							<View
								style={{
									marginHorizontal: 29,
									alignSelf: 'center',
									justifyContent: 'center',
								}}
							>
								<Image
									source={call}
									style={{ width: 60, height: 68, alignSelf: 'center' }}
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
											paddingVertical: 3,
										}}
									>
										Call Us{' '}
									</HunterText>
									<HunterText
										style={{
											fontSize: 16,
											fontWeight: '600',
											lineHeight: 24,
											color: '#6D48FF',
											paddingVertical: 3,
										}}
									>
										+91-9876543210{' '}
									</HunterText>
								</View>
							</View>
						</View>
					</LinearGradient>
				</View>
			</LinearGradient>
		</View>
	)
}

export default ContactUs

const styles = StyleSheet.create({})

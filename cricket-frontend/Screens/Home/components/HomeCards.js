import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import HunterText from '../../../components/UI/HunterText'
import {
	cricketHomeCard,
	cricketPlayerCard,
	mergedOnlineCricketCard,
} from '../../../assets/assets'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
export default function HomeCards() {
	const navigation = useNavigation()
	return (
		<View
			style={{
				margin: sWidth / 20,
			}}
		>
			<View style={{}}>
				<Pressable>
					<LinearGradient
						start={{ x: 0.0, y: 0.25 }}
						end={{ x: 0.75, y: 1.0 }}
						locations={[0, 0.4, 1]}
						colors={['#b5a2ff', '#9175ff', '#6d48ff']}
						style={styles.upperContainer}
					>
						<View style={{ alignItems: 'center' }}>
							<Image source={cricketHomeCard} />
						</View>
						<View style={{ alignItems: 'center' }}>
							<HunterText
								style={{
									fontSize: 24,
									fontWeight: '600',
									lineHeight: 36,
									color: '#fff',
								}}
							>
								Go Pool or Go Home
							</HunterText>
							<HunterText
								style={{
									fontSize: 12,
									fontWeight: '400',
									lineHeight: 18,
									color: '#fff',
								}}
							>
								Create your fantasy team and win BIG
							</HunterText>
							<Pressable
								onPress={() => navigation.navigate('UpComingMatchList')}
							>
								<LinearGradient
									start={{ x: 0.0, y: 0.0 }}
									end={{ x: 0.5, y: 1.25 }}
									locations={[0, 1]}
									colors={['rgba(11, 6, 23, 0.51)', 'rgba(11, 6, 23,1)']}
									style={{
										width: '100%',
										padding: sHeight / 70,
										marginVertical: sHeight / 35,
										borderRadius: 36,
									}}
								>
									<HunterText
										style={{
											color: 'white',
											textAlign: 'center',
											fontSize: 14,
											fontWeight: '800',
											paddingHorizontal: 20,
											lineHeight: 21,
										}}
									>
										{"Let's Play!"}
									</HunterText>
								</LinearGradient>
							</Pressable>
						</View>
					</LinearGradient>
				</Pressable>
			</View>
			<View style={{ marginTop: 30 }}>
				<Pressable>
					<LinearGradient
						start={{ x: 0.0, y: 0.25 }}
						end={{ x: 0.75, y: 1.25 }}
						locations={[0, 0.4, 0.5, 0.9, 1]}
						colors={[
							'rgba(42, 21, 123, 0.2)',
							'#fff',
							'#fff',
							'#fff',
							'rgba(42, 21, 123, 0.2)',
						]}
						style={styles.upperContainer}
					>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}
						>
							<View>
								<Image
									source={cricketPlayerCard}
									style={{ borderBottomLeftRadius: 36 }}
								/>
							</View>
							<View style={{ left: -sWidth / 8.8 }}>
								<HunterText
									style={{
										fontSize: 24,
										// fontWeight: '600',
										lineHeight: 36,
										color: '#000',
									}}
								>
									Cricket Braniac
								</HunterText>
								<HunterText
									style={{
										fontSize: 12,
										fontWeight: '400',
										lineHeight: 18,
										color: '#000',
									}}
								>
									Create your fantasy team {'\n'}and win BIG
								</HunterText>
								<Pressable
									onPress={() => navigation.navigate('ParlayUpComingMatchList')}
								>
									<HunterText
										style={{
											width: '50%',
											backgroundColor: '#6D48FF',
											color: 'white',
											textAlign: 'center',
											fontSize: 14,
											padding: sHeight / 90,
											marginVertical: sHeight / 45,
											elevation: 40,
											fontWeight: '800',
											borderRadius: 36,
											lineHeight: 21,
										}}
									>
										{"Let's win"}
									</HunterText>
								</Pressable>
							</View>
						</View>
					</LinearGradient>
				</Pressable>
			</View>
			<View style={{ marginTop: 30 }}>
				<Pressable>
					<View>
						<LinearGradient
							start={{ x: 0.0, y: 0.25 }}
							end={{ x: 0.75, y: 1.25 }}
							locations={[0, 0.4, 0.5, 0.9, 1]}
							colors={[
								'rgba(42, 21, 123, 0.2)',
								'#fff',
								'#fff',
								'#fff',
								'rgba(42, 21, 123, 0.2)',
							]}
							style={styles.upperContainer}
						>
							<View>
								<Image
									source={mergedOnlineCricketCard}
									style={{
										borderRadius: 36,
										alignSelf: 'center',
										width: sWidth / 1.2,
									}}
								/>
							</View>
							<View style={{ zIndex: 1, marginTop: -125, left: 50 }}>
								<HunterText
									style={{
										fontSize: 16,
										fontWeight: '600',
										lineHeight: 24,
										color: '#000',
									}}
								>
									Introducing new {'\n'}Player Cards
								</HunterText>
								<View style={{ left: -50 }}>
									<Pressable onPress={() => navigation.navigate('PlayerList')}>
										<LinearGradient
											start={{ x: 0.0, y: 0.0 }}
											end={{ x: 0.5, y: 1.25 }}
											locations={[0, 1]}
											colors={['#FD3F9D', '#6D48FF']}
											style={{
												width: '30%',
												color: 'white',
												padding: sHeight / 70,
												marginVertical: sHeight / 45,
												borderRadius: 36,
												left: 40,
											}}
										>
											<HunterText
												style={{
													color: '#FFF',
													fontWeight: '800',
													textAlign: 'center',
													lineHeight: 18,
													fontSize: 14,
												}}
											>
												Check Out
											</HunterText>
										</LinearGradient>
									</Pressable>
								</View>
							</View>
						</LinearGradient>
					</View>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	upperContainercard3: {
		borderRadius: 32,
		paddingTop: 10,
		paddingBottom: -100,
	},
	upperContainer: {
		borderRadius: 36,
		paddingVertical: 10,
	},
})

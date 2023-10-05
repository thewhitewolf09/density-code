import {
	Animated,
	Dimensions,
	Image,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import {
	arrowDownwardIos,
	cricketHelmet,
	tickHelmet,
} from '../../assets/assets'
// import { BlurView } from "@react-native-community/blur";

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
export default function StockPurchased() {
	return (
		<View>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1.5 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
				style={{ height: sHeight }}
			>
				<View
					style={{
						margin: sWidth / 20,
					}}
				>
					<View style={{ marginTop: 150 }}>
						<View>
							<LinearGradient
								start={{ x: 0.0, y: 0.25 }}
								end={{ x: 0.75, y: 1.0 }}
								locations={[0, 0.4, 1]}
								colors={[
									'rgba(237, 234, 244, 0.6)',
									'rgba(237, 234, 244, 0.6)',
									'rgba(237, 234, 244, 0.6)',
								]}
								style={styles.upperContainer}
							>
								<View style={{ alignItems: 'center', textAlign: 'center' }}>
									<Image
										source={cricketHelmet}
										style={{
											width: 218,
											height: 216,
											zIndex: 1,
											marginTop: -135,
										}}
									/>
								</View>
								<View style={{ alignItems: 'center' }}>
									<Image source={tickHelmet} style={{ marginTop: -19 }} />
								</View>

								<View style={{ alignItems: 'center' }}>
									<View
										style={{
											backgroundColor: 'rgba(237, 239, 241, 1)',
											width: 284,
											height: 70,
											borderRadius: 12,
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											marginTop: 10,
										}}
									>
										<Text
											style={{
												fontSize: 16,
												fontWeight: '600',
												lineHeight: 24,
												color: 'rgba(117, 117, 117, 1)',
												textAlignVertical: 'center',
												textAlign: 'center',
											}}
										>
											Successfully purchased {'\n'}{' '}
											<Text style={{ fontWeight: 'bold' }}> 2 Virat Kohli</Text>{' '}
											stocks at
											<Text style={{ fontWeight: 'bold' }}> ₹2400</Text>
										</Text>
									</View>
									<Text
										style={{
											fontSize: 12,
											fontWeight: '400',
											lineHeight: 18,
											color: 'rgba(117, 117, 117, 0.6)',
											textAlignVertical: 'center',
											textAlign: 'center',
											marginTop: 10,
										}}
									>
										Respective stocks has been added {'\n'}to your portfolio.
									</Text>
								</View>

								<Animated.View
									// style={{ ...value1.getLayout(), ...value2.getLayout() }}
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<View
										style={{
											backgroundColor: 'rgba(255, 255, 255, 0.8)',
											width: 132,
											height: 39,
											borderRadius: 20,
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											marginTop: 20,
										}}
									>
										<TouchableOpacity
										// onPress={() => {
										//   if (value1) {
										//     moveViewDetailsDown();
										//   } else if (value2) {
										//     moveViewDetailsUp();
										//   }
										// }}
										>
											<Text
												style={{
													fontSize: 12,
													fontWeight: '400',
													lineHeight: 18,
													color: 'rgba(117, 117, 117, 1)',
													textAlignVertical: 'center',
													textAlign: 'center',
												}}
											>
												View Details{'  '}
												<Image
													source={arrowDownwardIos}
													style={{
														zIndex: 1,
														marginTop: 105,
													}}
												/>
											</Text>
										</TouchableOpacity>
									</View>
								</Animated.View>
							</LinearGradient>
							<Pressable
								style={{
									backgroundColor: 'rgba(237, 239, 241, 1)',
									width: 165,
									height: 50,
									borderRadius: 12,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									alignSelf: 'center',
									marginTop: sHeight / 10,

									elevation: 10,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										paddingHorizontal: 20,
										lineHeight: 24,
										textAlignVertical: 'center',
										textAlign: 'center',
									}}
								>
									Go Back
								</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</LinearGradient>
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
		borderRadius: 32,
		paddingTop: 0,
		justifyContent: 'center',
		paddingBottom: 30,
	},
	StockPurchased: {
		borderRadius: 32,
		paddingTop: 10,
	},
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
})

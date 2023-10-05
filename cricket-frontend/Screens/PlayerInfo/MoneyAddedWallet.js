import {
	Dimensions,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { stockPurch2 } from '../../assets/assets'
// import { BlurView } from "@react-native-community/blur";
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
export default function MoneyAddedWallet() {
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
										source={stockPurch2}
										style={{
											width: 139,
											height: 139,
											zIndex: 1,
											marginTop: -105,
										}}
									/>
								</View>
								{/* <View style={{ alignItems: "center" }}>
                    <Image
                      source={require("../../assets/Images/TickHelmet.png")}
                      style={{ marginTop: -19 }}
                    />
                  </View>
   */}
								<View style={{ alignItems: 'center' }}>
									{/* <View
                      style={{
                        backgroundColor: "rgba(237, 239, 241, 1)",
                        width: 284,
                        height: 70,
                        borderRadius: 12,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "600",
                          lineHeight: 24,
                          color: "rgba(117, 117, 117, 1)",
                          textAlignVertical: "center",
                          textAlign: "center",
                        }}
                      >
                        Successfully purchased {"\n"}{" "}
                        <Text style={{ fontWeight: "bold" }}> 2 Virat Kohli</Text>{" "}
                        stocks at
                        <Text style={{ fontWeight: "bold" }}> ₹2400</Text>
                      </Text>
                    </View> */}
									<Text
										style={{
											color: 'rgba(31,29,41, 0.6)',
											fontSize: 12,
											fontWeight: '400',
										}}
									>
										S U C C E S S F U L L
									</Text>
									<Text
										style={{
											fontSize: 36,
											lineHeight: 54,
											fontWeight: '700',
											color: 'rgba(31,29,41, 0.8)',
											fontStyle: 'normal',
										}}
									>
										₹150
									</Text>
									<Text
										style={{
											fontSize: 12,
											fontWeight: '400',
											lineHeight: 18,
											color: '#1F1D29',
											textAlignVertical: 'center',
											textAlign: 'center',
										}}
									>
										Added to your wallet
									</Text>
								</View>
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
									marginTop: 40,
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

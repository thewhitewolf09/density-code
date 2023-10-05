// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Colors from '../../../styles/Colors'

// const ManualUPI = () => {
// 	return (
// 		<>
// 			<View>
// 				<Text
// 					style={{
// 						fontWeight: '500',
// 						fontSize: 14,
// 						marginHorizontal: width * 0.03,
// 					}}
// 				>
// 					Add manual UPI ID
// 				</Text>
// 				<View
// 					style={{
// 						borderStyle: 'solid',
// 						borderColor: '#C7C7C7',
// 						borderWidth: 2,
// 						borderRadius: 10,
// 						flexDirection: 'row',
// 						alignItems: 'center',
// 						justifyContent: 'space-between',
// 						paddingHorizontal: width * 0.05,
// 						marginHorizontal: width * 0.03,
// 						height: height * 0.07,
// 						alignContent: 'center',
// 						marginVertical: height * 0.02,
// 					}}
// 				>
// 					<TextInput
// 						placeholder="yourupiid@bank"
// 						onChange={(text) => setUpiid(text)}
// 						style={{
// 							flex: 3,
// 							fontSize: 16,
// 						}}
// 					/>
// 					{/* Below is the text and images that will be used for the upi id input and stuff. */}

// 					{/* <Image source={require('../../assets/Images/check_circle.png')} /> */}
// 					{/* <Image source={require('../../assets/Images/error.png')} /> */}

// 					<Text
// 						style={{
// 							fontSize: 16,
// 							fontWeight: '500',
// 							color: upiid ? 'green' : '#C7C7C7',
// 						}}
// 					>
// 						Verify
// 					</Text>
// 				</View>

// 				{/* <Text style={{ fontWeight: "400", fontSize: 12, color: "#019453", marginHorizontal: width*0.03, marginVertical: -9 }} >JOHN DOE</Text> */}
// 				{/* <Text style={{ fontWeight: "400", fontSize: 12, color: "#D23954", marginHorizontal: width*0.03, marginVertical: -9 }} >Incorrect UPI ID,please try again</Text> */}
// 			</View>
// 			<View>
// 				<Pressable
// 					style={{
// 						backgroundColor: upiid ? Colors.hunter : Colors.secondary, // Revert back to gray from blue
// 						width: 0.9 * width,
// 						height: 50,
// 						borderRadius: 12,
// 						display: 'flex',
// 						justifyContent: 'center',
// 						alignItems: 'center',
// 						alignSelf: 'center',
// 						marginVertical: height * 0.02,
// 						paddingHorizontal: width * 0.05,
// 						elevation: 10,
// 					}}
// 				>
// 					<Text
// 						style={{
// 							fontSize: 16,
// 							fontWeight: '500',
// 							paddingHorizontal: 20,
// 							lineHeight: 24,
// 							textAlignVertical: 'center',
// 							textAlign: 'center',
// 							color: upiid ? 'white' : 'black',
// 						}}
// 					>
// 						Continue
// 					</Text>
// 				</Pressable>
// 			</View>
// 		</>
// 	)
// }

// export default ManualUPI

// const styles = StyleSheet.create({})

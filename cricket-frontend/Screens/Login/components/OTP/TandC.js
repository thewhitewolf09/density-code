import { Dimensions, Pressable, Text, View } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox'
import HunterText from '../../../../components/UI/HunterText'
import { useNavigation } from '@react-navigation/core'


const sWidth = Dimensions.get('window').width

const TandC = ({ isChecked1, setChecked1, isChecked2, setChecked2 }) => {
	const navigation = useNavigation()

	return (
		<View
			style={{
				margin: sWidth / 20,
			}}
		>
			<View
				style={{
					borderRadius: 20,
					padding: sWidth / 40,
					backgroundColor: '#FFFFFF',
				}}
			>
				<Pressable
					onPress={() => setChecked1(!isChecked1)}
					style={{
						display: 'flex',
						margin: 2,
						flexDirection: 'row',
						padding: sWidth / 40,
					}}
				>
					<Checkbox
						style={{
							alignSelf: 'center',
						}}
						color={isChecked1 ? '#6D48FF' : undefined}
						value={isChecked1}
						onValueChange={setChecked1}
					/>
					<HunterText
						style={{
							margin: sWidth / 40,
						}}
					>
						{' '}
						I agree, I am above 18 years of age not from Andhra Pradesh,
						Telangana, Odisha, and Assam{' '}
					</HunterText>
				</Pressable>

				<Pressable
					onPress={() => setChecked2(!isChecked2)}
					style={{
						display: 'flex',
						margin: 2,
						flexDirection: 'row',
						borderTopWidth: 1,
						borderColor: '#EAE5F4',
						padding: 10,
					}}
				>
					<Checkbox
						style={{
							alignSelf: 'center',
						}}
						color={isChecked2 ? '#6D48FF' : undefined}
						value={isChecked2}
						onValueChange={setChecked2}
					/>
					<View style={{
						display: 'flex',
						flexDirection: "row",
						margin: 10,
					}}>
						<HunterText>I accept the </HunterText>
						<Pressable 
						onPress={()=>{
							navigation.navigate("TermsAndCondition")
						}}>
							<Text style={{ textDecorationLine: "underline" }}>T&C</Text>
						</Pressable>
						<HunterText> and </HunterText>
						<Pressable 
						onPress={()=>{
							navigation.navigate("Privacy")
						}}>
							<Text style={{ textDecorationLine: "underline" }}>Privacy</Text>
						</Pressable>
					</View>
				</Pressable>
			</View>
		</View>
	)
}

export default TandC

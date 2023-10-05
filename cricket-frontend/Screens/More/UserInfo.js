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
import UserInfoCard from './components/UserInfoCard'
import FilterButton from '../../components/UI/Buttons/FilterButton'
import editimg from '../../assets/MoreIcons/editbtn.png'

import saveimg from '../../assets/MoreIcons/account_balance.png'
import closebtn from '../../assets/MoreIcons/closebtn.png'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import HunterText from '../../components/UI/HunterText'
import ToggleSwitch from 'toggle-switch-react-native'
import screenUtils from '../../constants/Dimensions'
import appColors from '../../styles/Colors'
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
import { Button } from 'react-native-paper'
import { getProfile } from './apiFunction'
import { updateProfile } from './apiFunction'
// import { stat } from 'fs'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height
console.log(sWidth)
console.log(sHeight)

const UserInfo = () => {
	const [toggleSwitch, setToggleSwitch] = useState(true)
	const [togglen, setTogglen] = useState(1)
	const [userMobile, setUserMobile] = useState()
	const [userName, setUserName] = useState()
	const [email, setEmail] = useState()
	const [name, setName] = useState()
	const [age, setAge] = useState()
	const [state, setState] = useState()
	const [dob, setdob] = useState()
	const [pincode, setPincode] = useState()

	useEffect(() => {
		getProfile()
			.then((res) => {
				console.log(res.data)
				setUserMobile(res.data.user.mobile_number)
				setUserName(res.data.user.username)
				setEmail(res.data.user.email)
				setName(res.data.user.firstName + ' ' + res.data.user.lastName)
				let date = new Date(res.data.user.dob)
				date.setHours(date.getHours() + 5)
				setdob(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))

				// console.log('from userinfo.js' ,res.data.mobile_number ,  userMobile)
			})
			.catch((err) => console.log(err))
		{
			console.log(togglen)
		}
	}, [togglen])

	useEffect(() => {
		console.log(userMobile)
	}, [userMobile])

	const userInfoUpdate = () => {
		console.log('name from user Info Update ', name, userName)
		const userinfoObject = {
			firstName: name,
			lastName: '',
			dob: dob,
			mobile_number: '+917689816680',
			address: '',
			panNumber: '',
			profilePic: '',
			nameAsPerPAN: '',
		}

		updateProfile(JSON.stringify(userinfoObject))
			.then((response) => {
				console.log(response.data)
			})
			.catch((e) => {
				console.log('from userInfoUpdate ')
				console.log(e)
			})
	}

	return (
		<SafeAreaView>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				<ScrollView style={{ height: sHeight }}>
					<WalletHeader />
					<View
						style={{
							display: 'flex',
							marginLeft: !toggleSwitch ? sWidth / 2.1 : sWidth / 1.3,
							alignItems: 'center',
							flexDirection: 'row',
						}}
					>
						{toggleSwitch ? (
							<Pressable
								onPress={() => {
									setToggleSwitch(false)
									setTogglen(0)
								}}
								style={{
									backgroundColor: 'white',
									paddingHorizontal: sWidth / 40,
									marginHorizontal: sWidth / 40,
									paddingVertical: sHeight / 130,
									borderRadius: 36,
									backgroundColor: toggleSwitch
										? appColors.primary
										: appColors.white,
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<Image
									source={editimg}
									style={{
										width: screenUtils.width / 29.55,
										height: screenUtils.height / 59.81,
										marginRight: screenUtils.width / 50,
									}}
								/>
								<HunterText
									style={{
										alignSelf: 'center',
										textAlignVertical: 'center',
										fontSize: 12,
										color: !toggleSwitch
											? appColors.primary
											: appColors.secondary,
									}}
								>
									Edit
								</HunterText>
							</Pressable>
						) : (
							<View style={{ display: 'flex', flexDirection: 'row' }}>
								<Pressable
									onPress={() => {
										setTogglen(2)
										setToggleSwitch(true)
										userInfoUpdate()
									}}
									style={{
										backgroundColor: 'white',
										paddingHorizontal: sWidth / 40,
										marginHorizontal: sWidth / 40,
										paddingVertical: sHeight / 130,
										borderRadius: 36,
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<Image
										source={saveimg}
										style={{
											width: screenUtils.width / 29.55,
											height: screenUtils.height / 59.81,
											marginRight: screenUtils.width / 50,
										}}
									/>

									<HunterText
										style={{
											alignSelf: 'center',
											textAlignVertical: 'center',
											fontSize: 12,
											color: !toggleSwitch
												? appColors.primary
												: appColors.secondary,
										}}
									>
										Save
									</HunterText>
								</Pressable>

								<Pressable
									onPress={() => {
										setToggleSwitch(true)
										setTogglen(3)
									}}
									style={{
										backgroundColor: 'white',
										paddingHorizontal: sWidth / 40,
										marginHorizontal: sWidth / 40,
										paddingVertical: sHeight / 130,
										borderRadius: 17,
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
									}}
								>
									<Image
										source={closebtn}
										style={{
											width: screenUtils.width / 29.55,
											height: screenUtils.height / 59.81,
											marginRight: screenUtils.width / 50,
										}}
									/>

									<HunterText
										style={{
											alignSelf: 'center',
											textAlignVertical: 'center',
											fontSize: 12,
											color: !toggleSwitch
												? appColors.primary
												: appColors.secondary,
										}}
									>
										Cancel
									</HunterText>
								</Pressable>
							</View>
						)}
					</View>

					<View
						style={{
							display: 'flex',
							justifyContent: 'center',
							paddingLeft: sWidth / 20,
						}}
					>
						<UserInfoCard
							title="Mobile"
							editcheck={!toggleSwitch}
							state={userMobile}
							setState={setUserMobile}
						/>
						<UserInfoCard
							title="Username"
							editcheck={!toggleSwitch}
							state={userName}
							setState={setUserName}
						/>
						<UserInfoCard
							title="Email"
							editcheck={!toggleSwitch}
							state={email}
							setState={setEmail}
						/>
						<UserInfoCard
							title="Name"
							editcheck={!toggleSwitch}
							state={name}
							setState={setName}
						/>
						<UserInfoCard
							title="Age"
							editcheck={!toggleSwitch}
							state={age}
							setState={setAge}
						/>
						<UserInfoCard
							title="State"
							editcheck={!toggleSwitch}
							state={state}
							setState={setState}
						/>
						<UserInfoCard
							title="DOB"
							editcheck={!toggleSwitch}
							state={dob}
							setState={setdob}
						/>
						<UserInfoCard
							title="Pincode"
							editcheck={!toggleSwitch}
							state={pincode}
							setState={setPincode}
						/>
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default UserInfo

const styles = StyleSheet.create({
	upperContainer: {
		borderRadius: 12,
		paddingVertical: 10,
	},
})

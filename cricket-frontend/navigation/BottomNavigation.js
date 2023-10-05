import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useState } from 'react'
import PlayerList from '../Screens/SearchPlayer/PlayerList'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HomeIconFill from '../assets/Images/Svg/HomeIcon'
import HomeIcon from '../assets/Images/Svg/HomeIconFill'
import SportCricketIconFill from '../assets/Images/Svg/SportCricketIconFill'
import SportCricketIcon from '../assets/Images/Svg/SportCricketIcon'
import DataUsageIconFill from '../assets/Images/Svg/DataUsageIconFill'
import DataUsageIcon from '../assets/Images/Svg/DataUsageIcon'
import DragHandleIconFill from '../assets/Images/Svg/DragHandleIconFill'
import DragHandleIcon from '../assets/Images/Svg/DragHandleIcon'
import { LinearGradient } from 'expo-linear-gradient'
import StoreFrontIcon from '../assets/Images/Svg/StoreFrontIcon'
import Home from '../Screens/Home/Home'
import UpComingMatchList from '../Screens/PoolGames/UpComingMatchList'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import Portfolio from '../Screens/Portfolio/Portfolio'
import { useDrawerStatus } from '@react-navigation/drawer'
import More from '../Screens/More/More'
import screenUtils from '../constants/Dimensions'

const CustomButton = ({ children, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.navigation_button_store_front}
			onPress={onPress}
		>
			<View>{children}</View>
		</TouchableOpacity>
	)
}

const BottomNavigation = () => {
	const Tab = createBottomTabNavigator()
	const navigation = useNavigation()
	// const isDrawerOpen = useDrawerStatus() === 'open'
	//console.log(isDrawerOpen)

	// const [drawerStatus, setDrawerStatus] = useState(false)

	// drawerStatus ? navigation.dispatch(DrawerActions.openDrawer()) : null

	// if (isDrawerOpen === false && drawerStatus === true) {
	// 	setDrawerStatus(false)
	// }

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					position: 'absolute',
					bottom: 0,
					backgroundColor: 'white',
					width: '100%',
					height: screenUtils.height / 13.3,
					borderTopLeftRadius: 16,
					borderTopRightRadius: 16,
					...styles.shadow,
				},
			}}
			//initialRouteName="Home"
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View style={styles.navigation_button}>
								<View
									style={
										focused
											? [
													styles.navigation_button_icon_container,
													{
														shadowColor: '#6D48FF',
														elevation: 20,
													},
											  ]
											: styles.navigation_button_icon_container
									}
								>
									{focused ? <HomeIcon /> : <HomeIconFill />}
								</View>
								<Text
									style={
										focused
											? [styles.navigation_button.font, { color: '#6D48FF' }]
											: [styles.navigation_button.font, { color: '#6D6A74' }]
									}
								>
									Home
								</Text>
							</View>
						)
					},
				}}
			/>
			<Tab.Screen
				name="Game"
				component={UpComingMatchList}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View style={styles.navigation_button}>
								<View
									style={
										focused
											? [
													styles.navigation_button_icon_container,
													{
														shadowColor: '#6D48FF',
														elevation: 20,
													},
											  ]
											: styles.navigation_button_icon_container
									}
								>
									{focused ? <SportCricketIconFill /> : <SportCricketIcon />}
								</View>
								<Text
									style={
										focused
											? [styles.navigation_button.font, { color: '#6D48FF' }]
											: [styles.navigation_button.font, { color: '#6D6A74' }]
									}
								>
									Game
								</Text>
							</View>
						)
					},
				}}
			/>
			<Tab.Screen
				name="PlayerList"
				component={PlayerList}
				options={{
					tabBarIcon: ({ focused }) => {
						return focused ? (
							<LinearGradient
								//gradient for circle on active
								colors={['#FD3F9D', '#6D48FF', '#8547EE', '#AE44D3']}
								start={{ x: 0.1, y: 0.3 }}
								style={
									styles.navigation_button_store_front.backgroundColorOnActive
								}
							>
								<StoreFrontIcon />
							</LinearGradient>
						) : (
							<View
								style={[
									styles.navigation_button_store_front.backgroundColorOnActive,
									{ backgroundColor: '#6D48FF' },
								]}
							>
								<StoreFrontIcon />
							</View>
						)
					},
					tabBarButton: (props) => <CustomButton {...props} />,
				}}
			/>
			<Tab.Screen
				name="Portfolio"
				component={Portfolio}
				initialParams={{ name: 'User' }}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View style={styles.navigation_button}>
								<View
									style={
										focused
											? [
													styles.navigation_button_icon_container,
													{
														shadowColor: '#6D48FF',
														elevation: 20,
													},
											  ]
											: styles.navigation_button_icon_container
									}
								>
									{focused ? <DataUsageIconFill /> : <DataUsageIcon />}
								</View>
								<Text
									style={
										focused
											? [styles.navigation_button.font, { color: '#6D48FF' }]
											: [styles.navigation_button.font, { color: '#6D6A74' }]
									}
								>
									Portfolio
								</Text>
							</View>
						)
					},
				}}
			/>
			<Tab.Screen
				name="More"
				component={More}
				options={{
					tabBarIcon: ({ focused }) => {
						return (
							<View style={styles.navigation_button}>
								<View
									style={
										focused
											? [
													styles.navigation_button_icon_container,
													{
														shadowColor: '#6D48FF',
														elevation: 20,
													},
											  ]
											: styles.navigation_button_icon_container
									}
								>
									{focused ? <DragHandleIconFill /> : <DragHandleIcon />}
								</View>
								<Text
									style={
										focused
											? [styles.navigation_button.font, { color: '#6D48FF' }]
											: [styles.navigation_button.font, { color: '#6D6A74' }]
									}
								>
									More
								</Text>
							</View>
						)
					},
					// tabBarButton: (props) => (
					// 	<TouchableOpacity
					// 		{...props}
					// 		onPress={() => {
					// 			setDrawerStatus(true)
					// 		}}
					// 	/>
					// ),
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomNavigation

const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#6D6A74',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0,
		shadowRadius: 3.5,
		elevation: 5,
	},
	navigation_button: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: 72,
		height: 64,
		font: {
			fontSize: 12,
			fontWeight: '400',
			lineHeight: 18,
			marginTop: 4,
		},
	},
	navigation_button_icon_container: {
		height: 24,
		width: 24,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	navigation_button_store_front: {
		height: 64,
		width: 64,
		top: 15,
		borderRadius: 36,
		backgroundColorOnActive: {
			height: 64,
			width: 64,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 36,
			borderColor: 'white',
			borderWidth: 4,
		},
	},
})

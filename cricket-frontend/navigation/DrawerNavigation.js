import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { useState } from 'react'
import Home from '../Screens/Home/Home'
import CustomDrawer from './CustomDrawer'
import StackNavigation from './StackNavigation'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
	const [swipe, setSwipe] = useState(false)
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
				drawerPosition: 'right',
				drawerActiveBackgroundColor: '#6D48FF',
				drawerActiveTintColor: '#FFFFFF',
				drawerInactiveTintColor: '#333',
				swipeEnabled: swipe,
			}}
			drawerContent={(props) => <CustomDrawer {...props} setSwipe={setSwipe} />}
		>
			<Drawer.Screen name="My Order" component={StackNavigation} />
			<Drawer.Screen name="Wallet" component={Home} />
			<Drawer.Screen name="How it Works" component={Home} />
			<Drawer.Screen name="Contact Us" component={Home} />
			<Drawer.Screen name="Share a friend" component={Home} />
			<Drawer.Screen name="Logout" component={Home} />
		</Drawer.Navigator>
	)
}

export default DrawerNavigation

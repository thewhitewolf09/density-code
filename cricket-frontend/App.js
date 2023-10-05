import { Provider } from 'react-redux'
import React from 'react'
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { hunter, hunterBold, hunterSemiBold } from './assets/assets'
import { StatusBar } from 'react-native'
import { store } from './redux/store'
import StackNavigation from './navigation/StackNavigation'

export default function App() {
	const [fontsLoaded] = useFonts({
		hunter: hunter,
		hunterBold: hunterBold,
		hunterSemiBold: hunterSemiBold,
	})
	if (!fontsLoaded) return null

	return (
		<Provider store={store}>
			<StatusBar backgroundColor="#6D48FF" barStyle="light-content" />
			<NavigationContainer>
				<StackNavigation />
			</NavigationContainer>
		</Provider>
	)
}

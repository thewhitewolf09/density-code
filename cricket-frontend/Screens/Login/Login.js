import { Image, TouchableHighlight, View } from 'react-native'
import React from 'react'
import globalStyles from '../../styles/GlobalStyles'
import appColors from '../../styles/Colors'
import HunterText from '../../components/UI/HunterText'
import { hunterLogo } from '../../assets/assets'

const Login = ({ navigation }) => {
	return (
		<TouchableHighlight
			//activeOpacity={1}
			style={{ flex: 1 }}
			onPress={() => navigation.navigate('PhoneNumber')}
		>
			<View style={[globalStyles.container, { justifyContent: 'center' }]}>
				<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
					<Image style={{ width: 100, height: 100 }} source={hunterLogo} />
				</View>
				<HunterText
					style={{
						fontFamily: 'hunter',
						color: appColors.white,
						letterSpacing: 16.76,
						fontWeight: '800',
						margin: 20,
						fontSize: 32,
						textAlign: 'center',
					}}
				>
					Hunter
				</HunterText>
			</View>
		</TouchableHighlight>

		
	)
}

export default Login

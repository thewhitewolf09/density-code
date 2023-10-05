import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TextInput,
	Dimensions,
	Image,
	ScrollView,
	Pressable,
	TouchableOpacity,
	Alert,
} from 'react-native'
import WalletHeader from '../../components/UI/WalletHeader'
import FaqCard from './components/FaqCard'

import { LinearGradient } from 'expo-linear-gradient'
import screenUtils from '../../constants/Dimensions'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Faq = () => {
	function showAlert1() {
		Alert.alert(
			'Facilisis mauris turpis sed amet diam phasellus quis?',
			'It stands for frequently-asked questions, and its a page on a website that gives quick answers to customer questions. The idea is to keep the answers short and direct so that people find info quickly',
			[
				{
					text: 'Cancel',
					// onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{
					text: 'OK',
					// onPress: () => console.log('OK Pressed')
				},
			],
		)
	}

	return (
		<SafeAreaView style={{ height: '100%' }}>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
				{/* Header View */}

				<WalletHeader title={'Pool Games'} />
				<View style={{ margin: screenUtils.width / 20 }}>
					<ScrollView
						style={{ height: screenUtils.height / 1, display: 'flex' }}
					>
						<TouchableOpacity onPress={showAlert1}>
							<FaqCard />
						</TouchableOpacity>
						<TouchableOpacity onPress={showAlert1}>
							<FaqCard />
						</TouchableOpacity>
						<TouchableOpacity onPress={showAlert1}>
							<FaqCard />
						</TouchableOpacity>
						<TouchableOpacity onPress={showAlert1}>
							<FaqCard />
						</TouchableOpacity>
						<TouchableOpacity onPress={showAlert1}>
							<FaqCard />
						</TouchableOpacity>
					</ScrollView>
				</View>
			</LinearGradient>
		</SafeAreaView>
	)
}

export default Faq

const styles = StyleSheet.create({
	upperContainer: {
		borderBottomLeftRadius: 32,
		borderBottomRightRadius: 32,
	},
	playerhead: {
		flexDirection: 'row',
		height: 0.11 * height,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	hunter: {
		flex: 5,
		fontSize: 40,
		fontWeight: '400',
		letterSpacing: 2.9,
		paddingTop: 0.02 * height,
	},
	wallet: {
		display: 'flex',
		flex: 1,
		flexDirecton: 'row',
		backgroundColor: 'lightgray',
		marginRight: 0.02 * width,
		marginTop: 0.02 * height,
	},
	wallettext: {
		// flexDirection: "row",
	},
	searchdiv: {
		marginVertical: 15,
		marginHorizontal: 15,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 10,
		alignItems: 'center',
		paddingHorizontal: width * 0.03,
	},
	searching: {
		padding: height * 0.01,
		borderRadius: 10,
		width: 0.8 * width,
	},
	sorch: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	sort: {
		flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 5,
		height: 0.05 * height,
		marginHorizontal: width * 0.04,
		backgroundColor: 'white',
		paddingHorizontal: width * 0.1,
	},
	filter: {
		flex: 3,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		// width: 0.3*width,
		height: 0.05 * height,
		borderRadius: 5,
		marginHorizontal: width * 0.04,
		paddingHorizontal: width * 0.03,
		backgroundColor: 'white',
	},

	filter_background_container_0: {
		display: 'none',
	},

	filter_background_container_100: {
		display: 'flex',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},

	filter_container: {
		position: 'absolute',
		width: '100%',
		bottom: 0,
		height: 500,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	filter_heading_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 32,
		paddingTop: 30,
		paddingRight: 30,
		height: 80,
		borderBottomColor: '#EAE5F4',
		borderBottomWidth: 1,
	},
	filter_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},

	sort_background_container_0: {
		display: 'none',
	},

	sort_background_container_100: {
		display: 'flex',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.8)',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	sort_container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		height: 433,
		backgroundColor: '#ffffff',
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	sort_heading_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 32,
		paddingTop: 30,
		paddingRight: 30,
		height: 80,
		borderBottomColor: '#EAE5F4',
		borderBottomWidth: 1,
	},
	sort_heading: {
		fontSize: 20,
		fontWeight: '700',
		lineHeight: 30,
	},
})

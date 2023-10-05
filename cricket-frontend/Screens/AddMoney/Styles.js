import { Dimensions, StyleSheet } from 'react-native'
import appColors from '../../styles/Colors'
const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const AddMoneyStyles = StyleSheet.create({
	walletBalanceCard: {},
	paymentModesContainer: {
		padding: 12,
		borderWidth: 1,
		borderColor: appColors.secondaryDark,
		borderRadius: 12,
		marginVertical: sHeight / 70.8,
	},
	addMoneyContainer: {
		paddingHorizontal: 20,
		paddingVertical: 50,
		backgroundColor: appColors.white,
		top: -sHeight / 25,
	},
})
export default AddMoneyStyles

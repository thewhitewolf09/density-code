import styled from 'styled-components'
import Colors from '../../styles/Colors'

const googleStyle = {
	paddingVertical: 13,
	paddingHorizontal: 38,
	borderRadius: 15,
	backgroundColor: '#FFFFFF',
	borderColor: '#E2E2E2',
}
export const ButtonContainer = styled.TouchableOpacity`
	background-color: #d8e9a8;
	padding: 20px;
	justify-content: center;
	align-items: center;
	width: 200px;
	margin-top: 30px;
`

export const ButtonText = styled.Text`
	color: black;
	font-size: 20px;
`
const otpStyles = {
	borderColor: Colors.hunter,
	backgroundColor: '#417d7a20',
	width: 40,
	height: 50,
	marginHorizontal: 10,
	marginTop: 34,
	borderRadius: 5,
	textAlign: 'center',
	fontFamily: 'hunter',
	fontSize: 20,
	color: Colors.hunter,
	fontWeight: '800',
}

export const loginStyles = { googleStyle, otpStyles }

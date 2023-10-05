import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

export const OTPInputContainer = styled.View`
	align-items: center;
`

export const TextInputHidden = styled.TextInput`
	position: absolute;
	opacity: 0;
	cursor: none;
	width: 1000px;
	height: ${sHeight / 8}px;
	keyboard-type: numeric;
`

export const SplitOTPBoxesContainer = styled.Pressable`
	width: 80%;
	flex-direction: row;
	vertical-align: middle;
	justify-content: space-evenly;
`
export const SplitBoxes = styled.View`
	border-color: #ffffff;
	background-color: #ffffff;
	border-radius: 12px;
	height: ${sWidth / 7.5}px;
	width: ${sWidth / 7.5}px;
	margin: ${sWidth / 20}px;
`
export const SplitBoxesRed = styled.View`
	border-color: red;
	background-color: #ffffff;
	border-width: 1px;
	border-radius: 12px;
	height: ${sWidth / 7.5}px;
	width: ${sWidth / 7.5}px;
	margin: ${sWidth / 20}px;
`

export const SplitBoxText = styled.Text`
	font-size: 24px;
	text-align: center;
	text-align-vertical: center;
	height: 100%;
`

export const SplitBoxesFocused = styled(SplitBoxes)`
	border-color: #d9d9ff;
	background-color: #ffffff;
`

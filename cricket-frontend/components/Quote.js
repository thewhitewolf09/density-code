import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAxios from '../hooks/useAxios'
import HunterText from './UI/HunterText'

const Quote = () => {
	const [quote, setQuote] = useState()
	const { response, loading, error } = useAxios([
		'Any',
		'get',
		JSON.stringify({ accept: '*/*' }),
	])
	useEffect(() => {
		if (response) setQuote(response.setup)
	}, [response, loading, error])
	return (
		<>
			<View>
				{quote ? (
					<HunterText>Quote : {quote}</HunterText>
				) : (
					<HunterText> Loading</HunterText>
				)}
			</View>
		</>
	)
}

export default Quote

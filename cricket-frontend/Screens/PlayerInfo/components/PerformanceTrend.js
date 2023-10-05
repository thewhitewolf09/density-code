import { Dimensions, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { BarChart } from 'react-native-chart-kit'
import HunterText from '../../../components/UI/HunterText'
import FilterButton from '../../../components/UI/Buttons/FilterButton'
import screenUtils from '../../../constants/Dimensions'
import HunterSemiBoldText from '../../../components/UI/HunterSemiBoldText'
const PerformanceTrend = ({ inCompare, type, isBowl }) => {
	const chartConfig = {
		backgroundGradientFrom: '#F9F9F9',
		backgroundGradientFromOpacity: 0,
		backgroundGradientToOpacity: 0.5,
		backgroundGradientTo: '#F9F9F9',
		fillShadowGradientTo: isBowl ? '#5F40DD' : '#CF7A6A',
		fillShadowGradientFrom: isBowl ? '#EF528D' : '#743FD4',
		// #CF7A6A
		// #5F40DD
		// #A13FC2
		// #743FD4
		fillShadowGradientFromOpacity: '1',
		fillShadowGradientToOpacity: '0.9',
		propsForHorizontalLabels: { display: 'hidden' },
		barRadius: 4,
		color: (opacity = 1) => `rgba(109, 72, 255, ${opacity})`,
		strokeWidth: 20, // optional, default 3
	}
	const filters = inCompare
		? ['10', '30', 'All']
		: ['10 matches', '30 matches', 'All time']
	const [activeIndex, setActiveIndex] = useState(0)
	const sWidth = Dimensions.get('window').width
	const barData = {
		labels: ['1', '', '', '', '', '', '15', '', '', '', '', '', '30'],
		datasets: [
			{
				data:
					activeIndex === 0
						? [20, 45, 28, 80, 99, 43, 20, 45, 28, 80]
						: [
								20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 20, 45, 28, 80, 99, 43,
								20, 45, 28, 80, 20, 45, 28, 80, 99, 43, 20, 45, 28, 80,
						  ],
			},
		],
	}
	return (
		<View
			style={{
				backgroundColor: '#FFFFFF',
				padding: sWidth / 28.5,
				marginHorizontal: sWidth / 20,
				marginVertical: screenUtils.height / 80,
				borderRadius: 20,
				elevation: 10,
			}}
		>
			<HunterSemiBoldText
				style={{
					fontSize: screenUtils.width / 25,
				}}
			>
				{type === 'batting' ? 'Batting Performance' : 'Bowling Performance'}
			</HunterSemiBoldText>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginVertical: screenUtils.height / 54,
				}}
			>
				{filters.map((filter, index) => (
					<FilterButton
						key={index}
						title={filter}
						active={index === activeIndex}
						onPress={() => setActiveIndex(index)}
					/>
				))}
			</View>
			<BarChart
				// formatYLabel={(label) => {
				//  label + 'runs'
				// }}
				style={{
					shadowColor: '#6D48FF',
				}}
				data={barData}
				width={inCompare ? sWidth / 2.5 : sWidth / 1.2}
				height={220}
				chartConfig={{
					...chartConfig,
					barPercentage:
						activeIndex === 0
							? 0.6 / (inCompare ? 4 : 1)
							: 0.2 / (inCompare ? 4 : 1),
				}}
				verticalLabelRotation={0}
			/>
		</View>
	)
}
export default PerformanceTrend
const styles = StyleSheet.create({})

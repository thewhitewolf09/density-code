import { StyleSheet, Text, View, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import React, { useState } from 'react';
 const { width, height } = Dimensions.get('window')
 import Colors from '../../../styles/Colors'

const answers = [
    {
        id: 1,
        answer: '1 wicket',
    },
    {
        id: 2,
        answer: '2 wicket',
    },
    {
        id: 3,
        answer: '3 wicket',
    },
    {
        id: 4,
        answer: 'More than 3 wickets',
    },
]

const QuestionPart = () => {
    const [checked, setChecked] = useState(-1)
  return (
    <View
					style={{
						// flexDierection: 'column',
						// justifyContent: "space-between",
						elevation: 10,
						backgroundColor: Colors.white,
						height: height * 0.65,
					}}
				>
					<View>
						<View style={{ alignItems: 'center' }}>
							<Text
								style={{
									fontWeight: '600',
									fontSize: 16,
									marginVertical: width * 0.067,
								}}
							>
								Q1. How many wickets in first powerplay?
							</Text>
						</View>
						<View>
							{answers.map((item, i) => {
								return checked === i ? (
									<Pressable
										key={i}
										style={{
											flexDirection: 'row',
											alignItems: 'center',
											backgroundColor: Colors.white,
											marginVertical: height * 0.01,
											marginHorizontal: width * 0.05,
											paddingHorizontal: width * 0.05,
											paddingVertical: height * 0.02,
											borderRadius: 12,
											elevation: 10,
										}}
									>
										<TouchableOpacity
											style={{
												height: 20,
												width: 20,
												borderColor: '#6D48FF',
												borderRightWidth: 2,
												borderBottomWidth: 2,
												borderLeftWidth: 2,
												borderTopWidth: 2,
												borderRadius: 40,
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										>
											<View
												style={{
													height: 14,
													width: 14,
													backgroundColor: '#6D48FF',
													borderRadius: 40,
												}}
											></View>
										</TouchableOpacity>

										<Text style={{ marginHorizontal: 10 }}>{item.answer}</Text>
									</Pressable>
								) : (
									<Pressable
										key={i}
										onPress={() => {
											setChecked(i)
										}}
										style={{
											flexDirection: 'row',
											alignItems: 'center',
											backgroundColor: Colors.white,
											marginVertical: height * 0.01,
											marginHorizontal: width * 0.05,
											paddingHorizontal: width * 0.05,
											paddingVertical: height * 0.02,
											borderRadius: 12,
											elevation: 10,
										}}
									>
										<TouchableOpacity
											style={{
												height: 20,
												width: 20,
												borderColor: '#6D48FF',
												borderRightWidth: 2,
												borderBottomWidth: 2,
												borderLeftWidth: 2,
												borderTopWidth: 2,
												borderRadius: 40,
												display: 'flex',
												justifyContent: 'center',
												alignItems: 'center',
											}}
										></TouchableOpacity>
										<Text style={{ marginHorizontal: 10 }}>{item.answer}</Text>
									</Pressable>
								)
							})}
						</View>
					</View>
				</View>
  )
}

export default QuestionPart

const styles = StyleSheet.create({})
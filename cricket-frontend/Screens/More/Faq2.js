import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import Dropdown from '../../components/UI/Dropdown'

const { width, height } = Dimensions.get('window')

const Faq2 = () => {
	return (
		<SafeAreaView style={{ flex: 1, }} >
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
			>
			    <WalletHeader title={'FAQ'} noWllet={true} />
                <View style={{ alignItems: "center", height: height*0.88 }} >
                    <ScrollView>
                        <Dropdown />
                        <Dropdown />
                        <Dropdown />
                        <Dropdown />
                        <Dropdown />
                        <Dropdown />
                        <Dropdown />
                        <Dropdown />
                        <Dropdown />
                        <Dropdown />
                    </ScrollView>
                </View>
            </LinearGradient>
		</SafeAreaView>
	)
}

export default Faq2

const styles = StyleSheet.create({})

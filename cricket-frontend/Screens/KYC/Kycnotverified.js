import { StyleSheet, Text, View, Dimensions, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import HunterGradient from '../../components/UI/Gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import { dialog_bubble_icon } from '../../assets/assets'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const sWidth = Dimensions.get('window').width
const sHeight = Dimensions.get('window').height

const Kycnotverified = () => {

    const navigation = useNavigation()
    return (
        <View>
            <HunterGradient style={{ height: sHeight }}>
                <WalletHeader noWallet={true} />

                <View
                    style={{
                        margin: sWidth / 20,
                    }}
                >
                    <View style={{
                        marginTop: 108
                    }}>
                        <View>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.25 }}
                                end={{ x: 0.75, y: 1.0 }}
                                locations={[0, 0.4, 1]}
                                colors={[
                                    'rgba(237, 234, 244, 0.6)',
                                    'rgba(237, 234, 244, 0.6)',
                                    'rgba(237, 234, 244, 0.6)',
                                ]}
                                style={[styles.upperContainer, { borderRadius: 18}]}
                            >
                                <View style={{ alignItems: 'center', textAlign: 'center' }}>
                                    <Image
                                        source={dialog_bubble_icon}
                                        style={{
                                            width: 112,
                                            height: 134,
                                            position : 'relative',
                                            zIndex: 1,
                                            marginTop: -105,
                                            marginBottom :20,
                                        }}
                                    />
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text
                                        style={{
                                            color: '#1F1D29',
                                            fontSize: 16,
                                            fontWeight: '600',
                                            lineHeight: 24,
                                            width: 240,
                                            height: 24,
                                            letterSpacing: 6
                                        }}
                                    >
                                        KYC NOT VERIFIED
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            lineHeight: 18,
                                            fontWeight: '400',
                                            color: 'rgba(31, 29, 41, 0.5)',
                                            fontStyle: 'normal',
                                            width :217,
                                            height : 36,
                                            textAlign : 'center',
                                            margin :12,
                                            paddingHorizontal :20
                                        }}
                                    >
                                       Please complete your KYC to proceed
                                    </Text>
                                    
                                </View>
                            </LinearGradient>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: 'rgba(11, 6, 23, 0.51)',
                                    width: 112,
                                    height: 32,
                                    borderRadius: 36,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    marginTop: 40,
                                    elevation: 10,
                                }}
                                onPress = {()=>{
                                    navigation.navigate("CompleteKYC")
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: '400',
                                        width :87,
                                        lineHeight: 18,
                                        textAlignVertical: 'center',
                                        textAlign: 'center',
                                        color : "white",
                                    }}
                                >
                                    Complete KYC
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </HunterGradient>
        </View>
    )
}

export default Kycnotverified

const styles = StyleSheet.create({
    upperContainercard3: {
		borderRadius: 32,
		paddingTop: 10,
		paddingBottom: -100,
	},
	upperContainer: {
		borderRadius: 32,
        height :150,
		paddingTop: 0,
		justifyContent: 'center',
		paddingBottom: 30,
	},
	StockPurchased: {
		borderRadius: 32,
		paddingTop: 10,
	},
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
})
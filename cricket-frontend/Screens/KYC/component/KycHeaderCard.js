import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import appColors from '../../../styles/Colors'
import HunterText from '../../../components/UI/HunterText'
import { kyc_image } from '../../../assets/assets'
import { LinearGradient } from 'expo-linear-gradient'


const KycHeaderCard = () => {
    return (
        <LinearGradient
            start={{ x: 0.1, y: -0.2 }}
            end={{ x: 1, y: 1 }}
            //locations={[0, 0.2, 0.5, 0.6]}
            colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
            style={styles.walletContainer}>
            <View style={styles.balanceHolder}>
                <View style={{
                    paddingTop : 20,
                }}>
                    <HunterText style={{
                        fontSize: 12,
                        fontWeight: "400",
                        lineHight: 18,
                        letterSpacing: 5,
                        color: "#1F1D29",
                        opacity: 0.7,
                    }}>COMPLETE YOUR</HunterText>
                    <HunterText
                        style={{
                            fontSize: 36,
                            fontWeight: "700",
                            lineHeight: 54,
                            fontFamily: 'hunterSemiBold',
                            color: "#1F1D29",
                            opacity: 0.8,
                        }}
                    >
                        KYC
                    </HunterText>
                </View>
                <View>
                    <Image source={kyc_image} style={{ height: 166, width: 166 }} />
                </View>
            </View>
        </LinearGradient>
    )
}

export default KycHeaderCard

const styles = StyleSheet.create({
    walletContainer: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        height: 140,
        width: "90%",
        zIndex: 1,
        position: "absolute",
        top: 100,
        shadowColor :"#6D48FF",
        elevation :25,
        borderColor : "#FFFFFF",
        borderWidth : 1,
    },
    balanceHolder: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 20,
        justifyContent: "center",
    },
})

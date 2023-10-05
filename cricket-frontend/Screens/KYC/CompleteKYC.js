import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import HunterGradient from '../../components/UI/Gradient'
import WalletHeader from '../../components/UI/WalletHeader'
import HunterButton from '../../components/UI/Buttons/HunterButton'
import KycHeaderCard from './component/KycHeaderCard'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const CompleteKYC = () => {
    return (
        <View >
            <View>
                <HunterGradient style={{ height: '100%' }}>
                    <WalletHeader />
                    <KycHeaderCard />
                    <View style={{
                        backgroundColor: "white",
                        position: "absolute",
                        top: 216,
                        width: "100%",
                        height: 584,
                        paddingTop: 70,
                        padding: 20,
                    }}
                    >

                        <View style={{ flex: 1 }}>
                            <ProgressSteps borderWidth={2}>
                                <ProgressStep label="Verify PAN" >
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>This is the content within step 1!</Text>
                                    </View>
                                </ProgressStep>
                                <ProgressStep label="Verify Aadhaar">
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>This is the content within step 2!</Text>
                                    </View>
                                </ProgressStep>
                                <ProgressStep label="Seflie">
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>This is the content within step 3!</Text>
                                    </View>
                                </ProgressStep>
                            </ProgressSteps>
                        </View>

                    </View>
                </HunterGradient>
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    flex: 1,
                    flexDirection: 'row',
                    margin: 16,
                }}
            >
                <HunterButton
                    onPress={() => navigation.navigate('RazorpayCheckout')}
                    title={'Add money'}
                />
            </View>
        </View>
    )
}

export default CompleteKYC

const styles = StyleSheet.create({})
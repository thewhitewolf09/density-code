import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import timeTillStart from '../../helpers/timeTillStartHelper'

const TimeProgressBar = (props) => {
    const {startTime, timeOfMatchEntry} = props

    const [progressBarWidth, setProgressBarWidth] = useState(44)
    
    let timeRemain = timeTillStart(startTime).timeRemaininSecond

    useEffect(() => {
        if (timeRemain >= 0) {
            let width = 44 - ((timeRemain * 44) / timeOfMatchEntry);
            setProgressBarWidth(width)
        }
    }, [])

    return (
        <View style={{
            width: 44,
            height: 3,
            backgroundColor: "#E5E5E5",
            borderRadius: 4,
        }}>

            <LinearGradient
                // Background Linear Gradient
                colors={['#CF7A6A', '#EF528D', "#5F40DD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                    width: (timeRemain >= 0) ? progressBarWidth : 44,
                    height: 3,
                    borderRadius: 4,
                }}
            />

        </View>
    )
}

export default TimeProgressBar

const styles = StyleSheet.create({})
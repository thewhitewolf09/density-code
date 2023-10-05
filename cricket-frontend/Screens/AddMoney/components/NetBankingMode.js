import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AddMoneyStyles from '../Styles'
import appColors from '../../../styles/Colors'
import RadioButton from '../../../components/UI/Buttons/RadioButton'
import HunterText from '../../../components/UI/HunterText'

const NetBankingMode = ({ setActiveButton, activeButton }) => {
  const addedBanks = ["SBI", "PNB"];
  const [selectedBankIndex, setSelectedBankIndex] = useState();
  return (
    <View style={AddMoneyStyles.paymentModesContainer}>
      <View
        style={{
          borderBottomWidth: 1,
          paddingVertical: 2,
          borderColor: Colors.secondaryDark,
        }}
      >
        <Text style={{ fontFamily: "hunterSemiBold", fontSize: 14 }}>Card</Text>
        <HunterText style={{ color: "gray", marginVertical: 2 }}>
          Add money using any card
        </HunterText>
      </View>
      <ScrollView
        style={{ maxHeight: 150, paddingTop: 26, paddingHorizontal: 16 }}
      >
        {addedBanks.map((card, index) => (
          <RadioButton
            key={index}
            isActive={index === selectedBankIndex}
            onPress={() => {
              setActiveButton(true);
              setSelectedBankIndex(index);
            }}
            title={card}
          />
        ))}
      </ScrollView>
      <Pressable>
        <HunterText
          style={{
            color: Colors.hunter,
            fontSize: 14,
          }}
        >
          + Add bank details
        </HunterText>
      </Pressable>
    </View>
  );
};

export default NetBankingMode

const styles = StyleSheet.create({})

import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import HunterText from '../../../components/UI/HunterText'
import appColors from '../../../styles/Colors'
import RadioButton from '../../../components/UI/Buttons/RadioButton'
import AddMoneyStyles from '../Styles'
import { useNavigation } from '@react-navigation/native'

const CardMode = ({ setActiveButton, activeButton }) => {
  const addedCards = ["xxxx-xxxx-xxxx-8847"];
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
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
        {addedCards.map((card, index) => {
          return (
            <RadioButton
              key={index}
              isActive={index === selectedCardIndex}
              onPress={() => {
                setActiveButton(true);
                setSelectedCardIndex(index);
              }}
              title={card}
            />
          );
        })}
      </ScrollView>
      <Pressable>
        <HunterText
          style={{
            color: Colors.hunter,
            fontSize: 14,
          }}
        >
          + Add another card
        </HunterText>
      </Pressable>
    </View>
  );
};

export default CardMode

const styles = StyleSheet.create({})

import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import RadioButton from "../../../components/UI/Buttons/RadioButton";
import Colors from "../../../styles/Colors";
import HunterButton from "../../../components/UI/Buttons/HunterButton";
import HunterText from "../../../components/UI/HunterText";
import Fetching from "../../../assets/Images/Svg/Fetching";
import AddMoneyStyles from "../Styles";

const UPIModes = ({ setActiveButton, activeButton }) => {
  const upiApps = ["Phone Pe", "Google Pay", "Paytm"];
  const [selectedAppIndex, setSelectedAppIndex] = useState(-1);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    setTimeout(() => setFetched(true), 2000);
  }, []);

  return (
    <View>
      <View style={AddMoneyStyles.paymentModesContainer}>
        <View
          style={{
            borderBottomWidth: 1,
            paddingVertical: 2,
            borderColor: Colors.secondaryDark,
          }}
        >
          <Text style={{ fontFamily: "hunterSemiBold", fontSize: 14 }}>
            UPI
          </Text>
          <HunterText style={{ color: "gray", marginVertical: 2 }}>
            Add money using UPI
          </HunterText>
        </View>
        {fetched ? (
          <ScrollView
            style={{ maxHeight: 150, paddingTop: 26, paddingHorizontal: 16 }}
          >
            {upiApps.map((app, index, arr) => {
              return (
                <RadioButton
                  key={index}
                  title={app}
                  isActive={index === selectedAppIndex}
                  onPress={() => {
                    setActiveButton(true);
                    setSelectedAppIndex(index);
                  }}
                />
              );
            })}
          </ScrollView>
        ) : (
          <View style={{ paddingVertical: 20 }}>
            <View style={styles.fetchContainer}>
              <Fetching />
            </View>
            <HunterText style={{ textAlign: "center", color: "gray" }}>
              Fetching UPI Apps
            </HunterText>
          </View>
        )}

				<Pressable>
					<HunterText
						style={{
							color: appColors.hunter,
							fontSize: 14,
						}}
					>
						+ Add manual UPI
					</HunterText>
				</Pressable>
			</View>
		</View>
	)
}

export default UPIModes

const styles = StyleSheet.create({
	fetchContainer: {
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		margin: 4,
	},
})

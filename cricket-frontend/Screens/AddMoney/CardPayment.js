import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CardMode from "./components/CardMode";
import UPIModes from "./components/UPIModes";
import HunterGradient from "../../components/UI/Gradient";
import WalletHeader from "../../components/UI/WalletHeader";
import WalletBalance from "./components/WalletBalance";
import HunterButton from "../../components/UI/Buttons/HunterButton";
import AddAmount from "./components/AddAmount";
import AddMoneyStyles from "./Styles";
const CardPayment = () => {
  const [activeButton, setActiveButton] = useState(false);

  return (
    <View style={{ height: "100%" }}>
      <ScrollView>
        <HunterGradient>
          <WalletHeader />
          <View>
          <View style={{zIndex: 1, position: "relative", alignItems: "center"}}>
          <WalletBalance />
          </View>
            <View style={AddMoneyStyles.addMoneyContainer}>
              <AddAmount />
              <View>
                {/* <AddAmount/> */}
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "hunterSemiBold",
                  }}
                >
                  Choose a payment mode
                </Text>

                <CardMode
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
                />
              </View>
            </View>
          </View>
        </HunterGradient>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flex: 1,
          flexDirection: "row",
          margin: 16,
        }}
      >
        {activeButton ? (
          <HunterButton disabled={false} title={"Add money"} />
        ) : (
          <HunterButton disabled={true} title={"Add money"} />
        )}
      </View>
    </View>
  );
};

export default CardPayment;

const styles = StyleSheet.create({});

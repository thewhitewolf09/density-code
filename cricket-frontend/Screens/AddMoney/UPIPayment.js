import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import UPIModes from "./components/UPIModes";
import WalletHeader from "../../components/UI/WalletHeader";
import WalletBalance from "./components/WalletBalance";
import HunterGradient from "../../components/UI/Gradient";
import HunterButton from "../../components/UI/Buttons/HunterButton";
import AddMoneyStyles from "./Styles";
import AddAmount from "./components/AddAmount";

const UPIPayment = () => {
  const [activeButton, setActiveButton] = useState(false);
  return (
    <View style={{ height: "100%" }}>
      <ScrollView>
        <HunterGradient>
          <WalletHeader />
          <View style={{zIndex: 1, position: "relative", alignItems: "center"}}>
          <WalletBalance />
          </View>
          <View style={AddMoneyStyles.addMoneyContainer}>
            <View>
              <AddAmount />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "hunterSemiBold",
                }}
              >
                Choose a payment mode
              </Text>
              <UPIModes activeButton={activeButton}
                  setActiveButton={setActiveButton}/>
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

export default UPIPayment

const styles = StyleSheet.create({})

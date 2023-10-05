import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../styles/Colors";
// import { BlurView } from "@react-native-community/blur";

const sWidth = Dimensions.get("window").width;
const sHeight = Dimensions.get("window").height;

export default function StocksSold() {
  const [showMoreToggle, setShowMoreToggle] = useState(false);
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115)
  ).current;
  const categoryListMarginAnimationValue = useRef(
    new Animated.Value(5)
  ).current;
  let ViewDetails = [
    {
      id: 1,
      detailName: "Quantity bought",
      detailQt: 2,
    },
    {
      id: 2,
      detailName: "Average Price",
      detailQt: "₹2210",
    },
    {
      id: 3,
      detailName: "Platform charges",
      detailQt: "₹15 (0.5% of transaction)",
    },
    {
      id: 4,
      detailName: "Slippage %",
      detailQt: "4%",
    },
  ];

  // const [categories, setCategories] = useState(categoriesData)

	return (
		<View>
			<LinearGradient
				start={{ x: 0.5, y: 0 }}
				end={{ x: 0.5, y: 1.5 }}
				locations={[0, 0.2, 0.5, 0.6]}
				colors={['#6D48FF', '#f09bc066', '#724cfe33', '#6e49ff00']}
				style={{ height: sHeight }}
			>
				<View
					style={{
						margin: sWidth / 20,
					}}
				>
					<View style={{ marginTop: 150 }}>
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
								style={styles.upperContainer}
							>
								<View style={{ alignItems: 'center', textAlign: 'center' }}>
									<Image
										source={stockPurch2}
										style={{
											width: 139,
											height: 139,
											zIndex: 1,
											marginTop: -105,
										}}
									/>
								</View>
								{/* <View style={{ alignItems: "center" }}>
                      <Image
                        source={require("../../assets/Images/TickHelmet.png")}
                        style={{ marginTop: -19 }}
                      />
                    </View>
     */}
                <Animated.View
                  style={{ height: categoryListHeightAnimationValue }}
                  // style={{ ...value1.getLayout(), ...value2.getLayout() }}
                >
                  <View style={{ alignItems: "center", position: "relative" }}>
                    <View>
                      <Text
                        style={{
                          color: "rgba(31,29,41, 0.6)",
                          fontSize: 12,
                          fontWeight: "400",
                        }}
                      >
                        S U C C E S S F U L L Y {"  "}P U R C H A S E D
                      </Text>
                      <Text
                        style={{
                          fontSize: 36,
                          lineHeight: 54,
                          fontWeight: "700",
                          color: "rgba(31,29,41, 0.8)",
                          textAlignVertical: "center",
                          textAlign: "center",
                        }}
                      >
                        ₹2400
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "400",
                          lineHeight: 18,
                          color: "#1F1D29",
                          textAlignVertical: "center",
                          textAlign: "center",
                        }}
                      >
                        2 Virat Kohli stocks
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: "400",
                          lineHeight: 18,
                          color: "rgba(117, 117, 117, 0.6)",
                          textAlignVertical: "center",
                          textAlign: "center",
                          marginTop: 10,
                        }}
                      >
                        Respective stocks has been added {"\n"}to your
                        portfolio.
                      </Text>
                    </View>
                    {showMoreToggle ? (
                      <View
                        style={{
                          backgroundColor: "rgba(237, 239, 241, 1)",
                          width: "80%",
                          // height: 70,
                          borderRadius: 20,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop: 10,
                          padding: 20,
                        }}
                      >
                        <View style={{ fontSize: 10, fontWeight: "400" }}>
                          {ViewDetails.map((data, i) => {
                            return <Text style={{ fontSize: 10, fontWeight: "400", lineHeight: 18 }} key={i}>{data.detailName}</Text>;
                          })}
                        </View>
                        <View>
                        {ViewDetails.map((data, i) => {
                            return <Text style={{ fontSize: 10, fontWeight: "600", lineHeight: 18 }} key={i}>{data.detailQt}</Text>;
                          })}
                        </View>
                      </View>
                    ) : undefined}
                    <Animated.View
                      style={{ top: categoryListMarginAnimationValue }}
                    >
                      <View
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          width: 132,
                          height: 39,
                          borderRadius: 20,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          // marginTop: categoryListHeightAnimationValue,
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            if (showMoreToggle) {
                              Animated.timing(
                                categoryListHeightAnimationValue,
                                {
                                  toValue: 145,
                                  duration: 300,
                                  useNativeDriver: false,
                                }
                              ).start();
                              Animated.timing(
                                categoryListMarginAnimationValue,
                                {
                                  toValue: 40,
                                  duration: 500,
                                  useNativeDriver: false,
                                }
                              ).start();
                            } else {
                              Animated.timing(
                                categoryListHeightAnimationValue,
                                {
                                  toValue: 272.5,
                                  duration: 300,
                                  useNativeDriver: false,
                                }
                              ).start();
                              Animated.timing(
                                categoryListMarginAnimationValue,
                                {
                                  toValue: 42,
                                  duration: 500,
                                  useNativeDriver: false,
                                }
                              ).start();
                            }
                            setShowMoreToggle(!showMoreToggle);
                          }}
                          // onPress={() => {
                          //   if (value1) {
                          //     moveViewDetailsDown();
                          //   } else if (value2) {
                          //     moveViewDetailsUp();
                          //   }
                          // }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "400",
                              lineHeight: 18,
                              color: "rgba(117, 117, 117, 1)",
                              textAlignVertical: "center",
                              textAlign: "center",
                            }}
                          >
                            View Details{"  "}
                            <Image
                              source={
                                showMoreToggle
                                  ? require("../../assets/Images/arrow_upward_ios.png")
                                  : require("../../assets/Images/arrow_downward_ios.png")
                              }
                              style={{
                                zIndex: 1,
                                marginTop: 105,
                              }}
                            />
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </Animated.View>
                  </View>
                </Animated.View>
              </LinearGradient>
              <Pressable
                style={{
                  backgroundColor: "rgba(237, 239, 241, 1)",
                  width: 165,
                  height: 50,
                  borderRadius: 12,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  position: "absolute",
                  top: sHeight/1.5,
                  // marginTop: 340,
                  elevation: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                    paddingHorizontal: 20,
                    lineHeight: 24,
                    textAlignVertical: "center",
                    textAlign: "center",
                  }}
                >
                  Go Back
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  upperContainercard3: {
    borderRadius: 32,
    paddingTop: 10,
    paddingBottom: -100,
  },
  upperContainer: {
    borderRadius: 32,
    paddingTop: 0,
    justifyContent: "center",
    paddingBottom: 30,
  },
  StockPurchased: {
    borderRadius: 32,
    paddingTop: 10,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

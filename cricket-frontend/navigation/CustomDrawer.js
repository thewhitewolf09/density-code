import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList,useDrawerStatus } from '@react-navigation/drawer'
import Cross from '../assets/Images/Svg/Cross'
import { useNavigation, DrawerActions } from '@react-navigation/native';

const CustomDrawer = (props) => {
    const navigation = useNavigation()
    const {setSwipe} = props;
    const isDrawerOpen = useDrawerStatus() === 'open';
      if(isDrawerOpen===true) {
        setSwipe(true)
      }else{
        setSwipe(false)
      }
      
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{

                }}>

                <View style={{
                    height: 200,
                    //borderBottomWidth: 0.5,
                    display : "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderColor: "grey",
                    padding: 20,
                }}>
                     <TouchableOpacity
                     onPress={()=>{
                        navigation.dispatch(DrawerActions.closeDrawer())
                     }}
                     >
                        <Cross/>
                     </TouchableOpacity>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                        <View>
                            {/* for profile icon */}
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: "500",
                            }}>+918303088493</Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "300"
                                }}>Sumit Nirmal</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            paddingTop: 20,
                        }}>
                        <View
                            style={{
                                borderRightWidth: 1,
                                paddingRight: 20
                            }}>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: "700"
                            }}>Total Balance</Text>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 12
                            }}>₹0.00</Text>
                        </View>
                        <View>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: "700"
                            }}>Withdrawable</Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 12
                                }}>₹0.00</Text>
                        </View>
                    </View>
                </View>

                <DrawerItemList {...props} />
                
            </DrawerContentScrollView>

            {/* footer section */}
            <View style={{
                marginBottom: 20,
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: "700"
                }}>v1.0.00</Text>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                    <Text style={styles.footerFont}>Terms and Conditions</Text>
                    <Text style={styles.footerFont}>|</Text>
                    <Text style={styles.footerFont}>Privecy Policy</Text>
                </View>
            </View>
        </View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    footerFont: {
        fontSize: 12,
        marginTop: 20,
    }
})
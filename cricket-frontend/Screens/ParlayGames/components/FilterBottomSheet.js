import { StyleSheet, Text, View, Pressable,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const Entry_Price = [
    {
        name: "₹1 - ₹50"
    },
    {
        name: "₹51 - ₹100"
    },
    {
        name: "₹100 - ₹1,000"
    },
    {
        name: "₹1,001 & above"
    },
]

const Slot = [
    {
        name: "₹1 - ₹10,000"
    },
    {
        name: "₹10,000 - ₹1 Lakh"
    },
    {
        name: "₹1 Lakh - ₹10 Lakh"
    },
    {
        name: "₹10 Lakh - ₹25 Lakh"
    },
    {
        name: "₹25 Lakh & above"
    },

]
const FilterBottomSheet = ({ entryPrice, slot, setEntryPrice, setSlot }) => {

    const [state, setState] = useState(1)
    const [radiochecked1, setRadioChecked1] = useState(0)
    const [radiochecked2, setRadioChecked2] = useState(0)
    return (
        <View style={styles.filter_content_container}>

            {/*container for filter tabs  */}
            <View style={styles.filter_vertical_tab}>

                {/* tab for Entry_Price */}
                <Pressable style={(state === 1) ? styles.filter_vertical_tab_button_selected : styles.filter_vertical_tab_button_not_selected}
                    onPress={() => setState(1)}
                >
                    <Text style={styles.filter_vertical_tab_button}>Entry Price</Text>
                </Pressable>


                {/* tab for Slot */}
                <Pressable style={(state === 2) ? styles.filter_vertical_tab_button_selected : styles.filter_vertical_tab_button_not_selected}
                    onPress={() => setState(2)}
                >
                    <Text style={styles.filter_vertical_tab_button}>Slot</Text>
                </Pressable>
            </View>
    
            {/* container for filter tab content  */}
            <View>
                {/* tab content for Entry_Price */}
                <View style={(state === 1) ? styles.filter_tabcontent_selected : styles.filter_tabcontent_not_selected}>
                    <View style={{ width: "100%" }}>
                        {
                            Entry_Price && Entry_Price.map((item, i) => {
                                return (
                                    (radiochecked1 === i) ?
                                        <Pressable key={i}
                                            style={styles.tabcontentchild}
                                        >
                                            <TouchableOpacity style={{
                                                height: 20,
                                                width: 20,
                                                borderColor: "#6D48FF",
                                                borderRightWidth: 2,
                                                borderBottomWidth: 2,
                                                borderLeftWidth: 2,
                                                borderTopWidth: 2,
                                                borderRadius: 40,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}>
                                                <View
                                                    style={{
                                                        height: 14,
                                                        width: 14,
                                                        backgroundColor: "#6D48FF",
                                                        borderRadius: 40,
                                                    }}></View>
                                            </TouchableOpacity>

                                            <Text style={styles.tabcontentchild.font}>{item.name}</Text>
                                        </Pressable> :
                                        <Pressable key={i}
                                            style={styles.tabcontentchild}
                                            onPress={() => {
                                                setRadioChecked1(i);
                                                setEntryPrice(i)
                                            }}
                                        >
                                            <TouchableOpacity style={{
                                                height: 20,
                                                width: 20,
                                                borderColor: "#6D48FF",
                                                borderRightWidth: 2,
                                                borderBottomWidth: 2,
                                                borderLeftWidth: 2,
                                                borderTopWidth: 2,
                                                borderRadius: 40,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                            ></TouchableOpacity>
                                            <Text style={styles.tabcontentchild.font}>{item.name}</Text>
                                        </Pressable>
                                )
                            })
                        }
                    </View>
                </View>

              
                {/* tab content for Slot */}
                <View style={(state === 2) ? styles.filter_tabcontent_selected : styles.filter_tabcontent_not_selected}>
                    <View style={{ width: "100%" }}>
                        {
                            Slot && Slot.map((item, i) => {
                                return (
                                    (radiochecked2 === i) ?
                                        <Pressable key={i}
                                            style={styles.tabcontentchild}
                                        >
                                            <TouchableOpacity style={{
                                                height: 20,
                                                width: 20,
                                                borderColor: "#6D48FF",
                                                borderRightWidth: 2,
                                                borderBottomWidth: 2,
                                                borderLeftWidth: 2,
                                                borderTopWidth: 2,
                                                borderRadius: 40,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}>
                                                <View
                                                    style={{
                                                        height: 14,
                                                        width: 14,
                                                        backgroundColor: "#6D48FF",
                                                        borderRadius: 40,
                                                    }}></View>
                                            </TouchableOpacity>

                                            <Text style={styles.tabcontentchild.font}>{item.name}</Text>
                                        </Pressable> :
                                        <Pressable key={i}
                                            style={styles.tabcontentchild}
                                            onPress={() => {
                                                setRadioChecked2(i);
                                                setSlot(i)
                                            }}
                                        >
                                            <TouchableOpacity style={{
                                                height: 20,
                                                width: 20,
                                                borderColor: "#6D48FF",
                                                borderRightWidth: 2,
                                                borderBottomWidth: 2,
                                                borderLeftWidth: 2,
                                                borderTopWidth: 2,
                                                borderRadius: 40,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                            ></TouchableOpacity>
                                            <Text style={styles.tabcontentchild.font}>{item.name}</Text>
                                        </Pressable>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FilterBottomSheet

const styles = StyleSheet.create({
    filter_content_container: {
        display: "flex",
        flexDirection: "row",
    },
    filter_vertical_tab: {
        backgroundColor: "#FFFFFF",
        width: "40%",
        height: 420,
        boxSizing: "border-box",
        borderRightWidth: 1,
        borderRightColor: "#EFEFEF",
        shadowColor: "rgba(0, 0, 0, 0.09)",
        elevation: 10,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: { height: 1, width: 1 }
    },
    filter_vertical_tab_button_selected: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 44,
        backgroundColor: "#E7E7E7",
    },
    filter_vertical_tab_button_not_selected: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 44,
    },
    filter_vertical_tab_button: {
        fontSize: 16,
        fontWeight: "500",
        color: "#1F1D29",
    },
    filter_tabcontent_selected: {
        display: "flex",
        padding: 12,
        flex: 1,
        width: 234,
        marginBottom :50,
    },
    filter_tabcontent_not_selected: {
        display: "none",
        padding: 12,
    },
    tabcontentchild: {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        height: 44,
        font: {
            marginLeft: 10,
            fontWeight: "500",
            fontSize: 14,
            lineHeight: 21,
            color: "#1F1D29"
        }
    }
})
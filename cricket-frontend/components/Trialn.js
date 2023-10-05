import { Dimensions, Pressable , SafeAreaView , Text} from 'react-native'
import React from 'react'
import PressableCard from '../Screens/More/components/PressableCard'

const Trialn = () => {
	return (
	<SafeAreaView><PressableCard/></SafeAreaView>
	)
}

export default Trialn




// { style, title, onPress, active }
// <Pressable
// style={[
//     {
//         backgroundColor: active ? appColors.primary : appColors.white,
//         borderRadius: 17,
//         borderColor: appColors.secondaryDark,
//         borderWidth: 1,
//         paddingHorizontal: sWidth / 40,
//         paddingVertical: sHeight / 170,
//     },
//     style,
// ]}
// onPress={onPress}
// >
// <HunterText
//     style={{
//         alignSelf: 'center',
//         textAlignVertical: 'center',
//         fontSize: 12,
//         color: !active ? appColors.primary : appColors.secondary,
//     }}
// >
//     {title}
// </HunterText>
// </Pressable>
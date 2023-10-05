import React, { useRef, useState } from 'react'
import { View } from 'react-native'
import {
  OTPInputContainer,
  SplitBoxText,
  SplitBoxes,
  SplitBoxesFocused,
  SplitBoxesRed,
  SplitOTPBoxesContainer,
  TextInputHidden,
} from './Styles'

const OtpFields = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
  incorrect,
}) => {
  const inputRef = useRef()
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false)

  const handleOnPress = () => {
    setIsInputBoxFocused(true)
    inputRef.current.focus()
  }
  const boxArray = new Array(maximumLength).fill(0)
  const handleOnBlur = () => {
    setIsInputBoxFocused(false)
  }
  const boxDigit = (_, index) => {
    const emptyInput = ''
    const digit = code[index] || emptyInput

    const isCurrentValue = index === code.length
    const isLastValue = index === maximumLength - 1
    const isCodeComplete = code.length === maximumLength

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);
    const StyledSplitBoxes =
      isInputBoxFocused && isValueFocused
        ? SplitBoxesFocused
        : !incorrect
          ? SplitBoxes
          : SplitBoxesRed;
    return (
      <StyledSplitBoxes key={index}>
        <SplitBoxText>{digit}</SplitBoxText>
      </StyledSplitBoxes>
    );
  };
  return (
    <View style={{ marginTop: 30, marginBottom: -15 }}>
      <OTPInputContainer>
        <SplitOTPBoxesContainer onPress={handleOnPress}>
          {boxArray.map(boxDigit)}
        </SplitOTPBoxesContainer>
        <TextInputHidden
          value={code}
          onChangeText={setCode}
          maxLength={maximumLength}
          keyboardType="numeric"
          ref={inputRef}
          onBlur={handleOnBlur}
        />
      </OTPInputContainer>
    </View>
  );
};

export default OtpFields

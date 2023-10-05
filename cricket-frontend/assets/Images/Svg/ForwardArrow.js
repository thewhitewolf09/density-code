import React from "react";
import { Path, Svg } from "react-native-svg";

const ForwardArrow = ({ color }) => (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M5.99935 11.3346L5.04935 10.4013L8.78268 6.66797H0.666016V5.33464H8.78268L5.04935 1.6013L5.99935 0.667969L11.3327 6.0013L5.99935 11.3346Z" fill={color == undefined ? "black" : color} />
    </Svg>
);

export default ForwardArrow;
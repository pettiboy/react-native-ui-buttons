import React, { FunctionComponent } from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { reduceOpacity } from "../utils/reduceOpacity";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLORS } from "../utils/constants";

interface ButtonOutlineProps extends TouchableOpacityProps {
  // container style
  title?: string;
  useColor?: string;
  style?: ViewStyle;

  // container style utils
  opacityReducer?: number;
  padding?: number;
  borderRadius?: number;
  noDisabledStyle?: boolean;

  // text style
  textStyle?: TextStyle;

  // text style utils
  textOpacityReducer?: number;

  // manage state
  disabled?: boolean;
  buttonLoading?: boolean;

  // icon props
  materialIconRight?: string;
  materialIconLeft?: string;
  iconColor?: string;
  iconSize?: number;
}

const ButtonOutline: FunctionComponent<ButtonOutlineProps> = ({
  // container style
  title,
  useColor = COLORS.PRIMARY,
  style,

  // container style utils
  opacityReducer = 3,
  padding = 18,
  borderRadius = 4,
  noDisabledStyle = false,

  // text style
  textStyle = {},

  // text style utils
  textOpacityReducer = 5,

  // manage state
  disabled = false,
  buttonLoading = false,

  // icon props
  materialIconRight,
  materialIconLeft,
  iconColor = useColor,
  iconSize = 18,

  onPress,
}) => {
  const borderWidth = 1;
  const backgroundColor = reduceOpacity(useColor, opacityReducer);

  const styles = StyleSheet.create({
    button: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: borderWidth, // defined as const
      backgroundColor: backgroundColor, // parameters from props
      borderColor: useColor, // same as main color
      padding: padding, // default or customizable
      borderRadius: borderRadius, // default or customizable
    },

    disabledButton: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: backgroundColor, // same as background color of button
      borderColor: "transparent", // tranparent
      padding: padding, // default or customizable
      borderRadius: borderRadius, // default or customizable
    },

    outlineText: {
      color: useColor, // same as main color
      textAlign: "center",
      marginHorizontal: 7,
    },
    outlineTextDisabled: {
      color: noDisabledStyle
        ? useColor
        : reduceOpacity(useColor, textOpacityReducer), // main color with less opacity
      textAlign: "center",
      marginHorizontal: 7,
    },
  });

  return (
    <>
      <TouchableOpacity
        style={[
          noDisabledStyle || !disabled ? styles.button : styles.disabledButton,
          style,
        ]}
        disabled={disabled}
        onPress={onPress}
      >
        {materialIconLeft && !buttonLoading && (
          <MaterialIcons
            color={
              disabled && noDisabledStyle
                ? reduceOpacity(iconColor, textOpacityReducer)
                : iconColor
            }
            name={materialIconLeft}
            size={iconSize}
          />
        )}

        {buttonLoading ? (
          <ActivityIndicator color={useColor} />
        ) : (
          <Text
            style={[
              !disabled ? styles.outlineText : styles.outlineTextDisabled,
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}

        {materialIconRight && !buttonLoading && (
          <MaterialIcons
            color={
              disabled && !noDisabledStyle
                ? reduceOpacity(iconColor, textOpacityReducer)
                : iconColor
            }
            name={materialIconRight}
            size={iconSize}
          />
        )}
      </TouchableOpacity>
    </>
  );
};

export default ButtonOutline;

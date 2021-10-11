import React, {FunctionComponent} from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../utils/constants';
import {reduceOpacity} from '../utils/reduceOpacity';

interface ButtonSolidProps extends TouchableOpacityProps {
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
  textColor?: string;
  textStyle?: TextStyle;

  // manage state
  disabled?: boolean;
  buttonLoading?: boolean;

  // icon props
  materialIconRight?: string;
  materialIconLeft?: string;
  iconColor?: string;
  iconSize?: number;
}

const ButtonSolid: FunctionComponent<ButtonSolidProps> = ({
  // container style
  title,
  useColor = COLORS.PRIMARY,
  style,

  // container style utils
  opacityReducer = 5,
  padding = 19,
  borderRadius = 4,
  noDisabledStyle = false,

  // text style
  textStyle = {},

  // text style utils
  textColor = COLORS.WHITE,

  // manage state
  disabled = false,
  buttonLoading = false,

  // icon props
  materialIconRight,
  materialIconLeft,
  iconColor = COLORS.WHITE,
  iconSize = 18,

  onPress,
}) => {
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: useColor,
      padding: padding,
      borderRadius: borderRadius,
      alignItems: 'center',
    },
    disabledButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: noDisabledStyle
        ? useColor
        : reduceOpacity(useColor, opacityReducer),
      padding: padding,
      borderRadius: borderRadius,
    },
    text: {
      textAlign: 'center',
      color: textColor,
      marginHorizontal: 7,
    },
  });

  return (
    <>
      <TouchableOpacity
        style={[disabled ? styles.disabledButton : styles.button, style]}
        onPress={onPress}
        disabled={disabled}>
        {materialIconLeft && !buttonLoading && (
          <MaterialIcons
            color={iconColor}
            name={materialIconLeft}
            size={iconSize}
          />
        )}

        {buttonLoading ? (
          <ActivityIndicator color={useColor} />
        ) : (
          <Text style={[styles.text, textStyle]}>{title}</Text>
        )}

        {materialIconRight && !buttonLoading && (
          <MaterialIcons
            color={iconColor}
            name={materialIconRight}
            size={iconSize}
          />
        )}
      </TouchableOpacity>
    </>
  );
};

export default ButtonSolid;

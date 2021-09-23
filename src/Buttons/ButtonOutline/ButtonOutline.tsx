import React, {FunctionComponent} from 'react';

import {
  ButtonProps,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {reduceOpacity} from '../utils/reduceOpacity';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../utils/colors';

interface ButtonOutlineProps extends TouchableOpacityProps {
  title?: string;

  disabled?: boolean;
  useColor?: string; // rgb format required
  opacityReducer?: number;
  textOpacityReducer?: number;
  padding?: number;
  borderRadius?: number;
  materialIcon?: string;
  iconAlignRight?: boolean;
  iconSize?: number;
  iconColor?: string;
  noDisabledStyle?: boolean;

  style?: ViewStyle;
  textStyle?: TextStyle;
}

const ButtonOutline: FunctionComponent<ButtonOutlineProps> = ({
  title,
  style,
  textStyle,
  disabled = false,
  useColor = COLORS.PRIMARY, // rgb format required
  opacityReducer = 2,
  textOpacityReducer = 6,
  padding = 18,
  borderRadius = 4,
  materialIcon,
  iconColor = useColor,
  iconAlignRight = false,
  onPress,
  iconSize = 20,
  noDisabledStyle,
}) => {
  const borderWidth = 1;
  const backgroundColor = reduceOpacity(useColor, opacityReducer);

  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: borderWidth, // defined as const
      backgroundColor: backgroundColor, // parameters from props
      borderColor: useColor, // same as main color
      padding: padding, // default or customizable
      borderRadius: borderRadius, // default or customizable
    },

    disabledButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor, // same as background color of button
      borderColor: 'transparent', // tranparent
      padding: padding, // default or customizable
      borderRadius: borderRadius, // default or customizable
    },

    outlineText: {
      color: useColor, // same as main color
      textAlign: 'center',
    },
    outlineTextDisabled: {
      color: reduceOpacity(useColor, textOpacityReducer), // main color with less opacity
      textAlign: 'center',
    },
  });

  return (
    <>
      {disabled ? (
        // disabled button
        <TouchableOpacity
          style={[
            noDisabledStyle ? styles.button : styles.disabledButton,
            style,
          ]}
          disabled={disabled}
          onPress={onPress}>
          {!iconAlignRight && materialIcon && (
            <MaterialIcons
              color={iconColor}
              name={materialIcon}
              size={iconSize}
            />
          )}
          {/* disabled text */}
          <Text style={[styles.outlineTextDisabled, textStyle]}>{title}</Text>
          {iconAlignRight && materialIcon && (
            <MaterialIcons
              color={iconColor}
              name={materialIcon}
              size={iconSize}
            />
          )}
        </TouchableOpacity>
      ) : (
        // enabled button
        <TouchableOpacity
          style={[styles.button, style]}
          disabled={disabled}
          onPress={onPress}>
          {!iconAlignRight && materialIcon && (
            <MaterialIcons
              color={iconColor}
              name={materialIcon}
              size={iconSize}
            />
          )}
          {/* enabled text */}
          <Text style={[styles.outlineText, textStyle]}>{title}</Text>
          {iconAlignRight && materialIcon && (
            <MaterialIcons
              color={iconColor}
              name={materialIcon}
              size={iconSize}
            />
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

export default ButtonOutline;

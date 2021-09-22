import React, { FunctionComponent } from 'react';

import { ActivityIndicator, StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../../constants';
import { reduceOpacity } from '../../../utils/reduceOpacity';
import Text from '../Text/Text';


interface ButtonSolidProps extends TouchableOpacityProps {
  title?: string,

  disabled?: boolean,
  buttonLoading?: boolean,
  useColor?: string, // rgb format required
  opacityReducer? : number,
  textOpacityReducer? : number
  padding?: number,
  borderRadius?: number,
  materialIcon?: string,
  iconColor?: string,
  iconAlignRight?: boolean,
  textColor?: string,
  iconSize?: number,
  noColorChangeWhenDisabled?: boolean,

  style?: ViewStyle,
  textStyle?: TextStyle,
}

const ButtonSolid: FunctionComponent<ButtonSolidProps> = (
    {
      title,
      style,
      textStyle={},
      disabled=false,
      buttonLoading=false,
      useColor=COLORS.PRIMARY, // rgb format required
      noColorChangeWhenDisabled=false,
      opacityReducer=5,
      textOpacityReducer=6,
      padding=18,
      borderRadius=4, 
      materialIcon,
      iconColor='#000',
      iconAlignRight=false,
      textColor=useColor,
      iconSize=20,

      onPress,
    }) => {

  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: useColor,
      padding: padding,
      borderRadius: borderRadius,
      alignItems: 'center'
    },
    disabledButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: noColorChangeWhenDisabled ? useColor : reduceOpacity(useColor, opacityReducer),
      padding: padding,
      borderRadius: borderRadius,
    },
    text: {
      textAlign: 'center',
      fontFamily: 'Nunito-Regular',
      color: COLORS.WHITE
    },
  })


  return (
    <>
      {disabled && (        
        // disabled button
        <TouchableOpacity
          style={[ styles.disabledButton, style]}
          onPress={onPress}
          disabled={disabled}
        >
          {materialIcon && <MaterialIcons 
            color={iconColor}
            name={materialIcon} 
            size={iconSize} />
          }
          {/* disabled text */}
          {!buttonLoading && <Text
            style={[styles.text, textStyle]}
          >
            {title}
          </Text>}
          {buttonLoading && <ActivityIndicator color={useColor} />}

          {iconAlignRight && materialIcon && <MaterialIcons 
            color={useColor}
            name={materialIcon} 
            size={iconSize} />}
        </TouchableOpacity>

      )} 

      {!disabled && (
        // enabled button
        <TouchableOpacity
          style={[ styles.button, style]}
          onPress={onPress}
          disabled={disabled}
        >
          
          {!iconAlignRight && materialIcon && <MaterialIcons 
            color={iconColor}
            name={materialIcon} 
            size={iconSize} />}
          {/* enabled text */}
          <Text 
            style={[styles.text, textStyle,]}
          >
            {title}
          </Text>
          {iconAlignRight && materialIcon && <MaterialIcons 
            color={iconColor}
            name={materialIcon} 
            size={iconSize} />}

        </TouchableOpacity>
      )}
  </>)
}




export default ButtonSolid
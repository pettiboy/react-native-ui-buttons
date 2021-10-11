# React Native UI Button

## ✨ Installation

If you want to use icons make sure you have [`react-native-vector-icon`](https://github.com/oblador/react-native-vector-icons) installed in your project.

```
npm install --save react-native-ui-buttons
```

## ⚙️ Getting started

### 🚀 Solid Button

```
import {ButtonSolid} from 'react-native-ui-buttons';

<ButtonSolid
    title={'Button Solid'}
/>
```

### 🚀 Dual Tone Outline Button

```
import {ButtonOutline} from 'react-native-ui-buttons';

<ButtonOutline
    title={'Button Outline'}
/>
```

## 💡 Props

1. All [`TouchableOpacityProps`](https://reactnative.dev/docs/touchableopacity#props) are valid.
2. All props are optional.

### 🎨 Props to customize container styles

| Attributes | Type        | Description                               | Default               |
| :--------- | :---------- | :---------------------------------------- | :-------------------- |
| `title`    | `string`    | Name of the button                        | -                     |
| `useColor` | `string`    | rgb() format required                     | `'rgb(235, 52, 122)'` |
| `style`    | `ViewStyle` | style will be applied to button container | -                     |

### 🎨 Props to customize container styles (utils)

| Attributes        | Type      | Description                                                                                                                                           | Default                              |
| :---------------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| `opacityReducer`  | `number`  | `ButtonSolid`: amount by which opacity of disabled button should be reduced, `ButtonOutline`: ammount by which background of button should be reduced | ButtonSolid `5`, ButtonOutline `3`   |
| `padding`         | `number`  | padding of button                                                                                                                                     | ButtonOutline `18`, ButtonSolid `19` |
| `borderRadius`    | `number`  | Border Radius of button                                                                                                                               | `4`                                  |
| `noDisabledStyle` | `boolean` | if `true` disabled button will be styled same as enabled button                                                                                       | `false`                              |

### 🎨 Props to customize text styles

| Attributes           | Type        | Description                                                                                       | Default            |
| :------------------- | :---------- | :------------------------------------------------------------------------------------------------ | :----------------- |
| `textStyle`          | `TextStyle` | style will be applied to text                                                                     | -                  |
| `textOpacityReducer` | `number`    | `(ButtonOutline only)` amount by which opacity of text should be reduced, when button is disabled | `5`                |
| `textColor`          | `string`    | `(ButtonSolid only)` color of text                                                                | `rgb(255,255,255)` |

### 🎨 Props to manage state of button

| Attributes      | Type      | Description                              | Default |
| :-------------- | :-------- | :--------------------------------------- | :------ |
| `disabled`      | `boolean` | set it to `true` when button is disabled | `false` |
| `buttonLoading` | `boolean` | set it to `true` when button is loading  | `false` |

### 🎨 Props for Icon

| Attributes          | Type     | Description                             | Default                                                  |
| :------------------ | :------- | :-------------------------------------- | :------------------------------------------------------- |
| `materialIconRight` | `string` | `name` field for MaterialIcon component | -                                                        |
| `materialIconLeft`  | `string` | `name` field for MaterialIcon component | -                                                        |
| `iconColor`         | `string` | Color of icon                           | ButtonOutline `useColor`, ButtonSolid `rgb(255,255,255)` |
| `iconSize`          | `number` | Size of icon                            | `18`                                                     |

## 📦 react-native-vector-icons Installation

1. Install package

```
npm install --save react-native-vector-icons
```

### IOS

2. In your `Info.plist` add

```
<key>UIAppFonts</key>
<array>
    <string>MaterialIcons.ttf</string>
</array>
```

3. Install pods and reinstall app

```
npx pod-install
npx react-native run-ios
```

### Android

2. In your `android/app/build.gradle` add

```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf' ]
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

3. Reinstall app

```
npx react-native run-ios
```

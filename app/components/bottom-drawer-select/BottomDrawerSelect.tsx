import React, {Dispatch, SetStateAction} from "react";
import {StyleSheet, View, Dimensions, TouchableWithoutFeedback} from "react-native";
import {Overlay} from "react-native-elements";
import {SafeAreaView} from "react-native-safe-area-context";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

type Props = {
    children: React.ReactNode,
    toggle: () => void,
    isActive: boolean
}

const BottomDrawerSelect = ({children, toggle, isActive}: Props) => {
    return (
        <Overlay
            isVisible={isActive}
            onBackdropPress={toggle}
            backdropStyle={{
                opacity: 0.5
            }}
            overlayStyle={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                paddingHorizontal: 24,
                paddingVertical: 24,
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35
            }}
            statusBarTranslucent={true}
        >
            {children}
        </Overlay>
    )
}

export default BottomDrawerSelect;
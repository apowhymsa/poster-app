import {Text, TouchableOpacity, View} from "react-native";
import {Sort} from "iconsax-react-native";
import React from "react";
import BottomDrawerItem from "@components/bottom-drawer-select/BottomDrawerItem";

const BottomDrawerContainer = ({data, title, setData}
                                   : { data: any[], title: string, setData: any }) => {
    if (data.length <= 0) {
        return null;
    }

    return (
        <View style={{
            gap: 24
        }}>
            <Text style={{
                textAlign: 'center',
                fontFamily: 'Montserrat-Bold',
                fontSize: 20
            }}>{title}</Text>
            <View style={{
                rowGap: 16
            }}>
                {data.map((item: any, index: number) => (
                    <BottomDrawerItem item={item} data={data} index={index} setData={setData}/>
                ))}
            </View>
        </View>
    )
}

export default BottomDrawerContainer;
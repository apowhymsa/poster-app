import {Text, TouchableOpacity} from "react-native";
import {Sort} from "iconsax-react-native";
import React, {useState} from "react";

const BottomDrawerItem = ({item, data, index, setData}: {item: any, data: any[], index: number, setData: any}) => {
    const [active, setActive] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => {
                setActive(true);
                const updatedArray = [...data]
                    .map(item => {
                        return {...item, checked: false}
                    });

                updatedArray[index].checked = !updatedArray[index].checked;
                setData(updatedArray);
            }}
            style={{
                // backgroundColor: sortedList[index].isChecked ? '#fc8080' : '#f4f4f4',
                backgroundColor: data[index].checked ? '#fc8080': '#f4f4f4',
                paddingHorizontal: 24,
                paddingVertical: 18,
                borderRadius: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 16,
                // color: sortedList[index].isChecked ? 'white' : 'black',
                color: data[index].checked ? 'white': 'black',
            }}>{item.title}</Text>
            {data[index].checked && (
                <Sort
                    size="20"
                    color="white"
                    variant="Broken"
                />
            )}
        </TouchableOpacity>
    )
}

export default BottomDrawerItem;
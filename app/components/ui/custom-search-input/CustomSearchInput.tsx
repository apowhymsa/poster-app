import {SearchNormal1} from "iconsax-react-native";
import {TextInput} from "react-native-paper";
import {View} from "react-native";

const CustomSearchInput = () => {
    return (
        <View style={{
            marginTop: 24,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'relative',
            marginHorizontal: 24
        }}>
            <SearchNormal1 size={24} color="black" variant="Broken" style={{
                position: 'absolute',
                zIndex: 1,
                marginHorizontal: 20,
                top: 20,
            }}/>
            <TextInput
                style={{flex: 1, paddingLeft: 40}}
                mode="outlined"
                label="Поиск"
                activeOutlineColor="#fc8080"
                outlineColor="#e7eaeb"
                outlineStyle={{borderWidth: 2.5, borderRadius: 50}}
                contentStyle={{
                    fontFamily: 'Montserrat-Regular'
                }}
            />
        </View>
    )
}
export default CustomSearchInput;
import {SearchNormal1} from "iconsax-react-native";
import {TextInput} from "react-native-paper";
import {View} from "react-native";
import {Colors} from "../../../constants";

const CustomSearchInput = () => {
    return (
        <View style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            position: 'relative',
            height: 45,
            flex: 1,
        }}>
            <SearchNormal1 size={20} color="black" variant="Broken" style={{
                position: 'absolute',
                zIndex: 1,
                marginHorizontal: 20,
                top: 15,
            }}/>
            <TextInput
                style={{flex: 1, paddingLeft: 40, height: 40, backgroundColor: '#f4f4f4'}}
                mode="outlined"
                label="Поиск"
                activeOutlineColor={Colors.primary}
                outlineColor="#e7eaeb"
                outlineStyle={{borderRadius: 50}}
                contentStyle={{
                    fontFamily: 'Montserrat-Regular'
                }}
            />
        </View>
    )
}
export default CustomSearchInput;
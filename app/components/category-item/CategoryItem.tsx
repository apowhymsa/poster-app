import {Text, View, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import {ICategoryItemProps} from "@components/category-item/category-item.interface";
import {Image} from "expo-image";

const CategoryItem = ({categoryName, imageURL}: ICategoryItemProps) => {
    return (
            <View style={[styles.categoryContainer]}>
                <View style={[styles.categoryContent]}>
                    <Image contentFit="contain" source={{uri: imageURL}} style={{flex: 1}}/>
                </View>
                <Text style={{
                    fontFamily: 'Montserrat-Regular'
                }}>{categoryName}</Text>
            </View>
    )
}

export default CategoryItem;

const styles = StyleSheet.create({
    categoryContainer: {
        alignItems: 'center',
        rowGap: 10
    },
    categoryContent: {
        width: 56,
        height: 56,
        backgroundColor: '#f3f3f3',
        borderRadius: 50,
        overflow: 'hidden'
    },
})
import {View, Text, TouchableOpacity} from "react-native";
import {useAppSelector} from "@utils//store";
import {Image} from 'expo-image'
import React from "react";
import {ArrowLeft2} from "iconsax-react-native";
import CustomSearchInput from "@components/ui/custom-search-input/CustomSearchInput";

const CategoriesScreen = (props: any) => {
    const categories = useAppSelector((state) => state.category);

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
            paddingHorizontal: 24
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 20,
            }}>
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    marginTop: 3
                }} onPress={() => props.navigation.popToTop()}>
                    <View style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f4f4f4'
                    }}>
                        <ArrowLeft2
                            size={24}
                            color="black"
                            variant="Broken"
                        />
                    </View>
                </TouchableOpacity>
                <CustomSearchInput/>
            </View>
            <Text style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 20,
                marginVertical: 24
            }}>Покупка за категориями</Text>
            <View style={{
                rowGap: 10,
            }}>
                {categories.categories.map((data: any) => (
                    <TouchableOpacity onPress={() => props.navigation.navigate('ProductsByCategory', {
                        category_id: data.category_id,
                        category_name: data.category_name
                    })}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            height: 65,
                            backgroundColor: '#f4f4f4',
                            gap: 20,
                            padding: 20,
                            borderRadius: 14
                        }}>
                            <Image source={{uri: `https://webwhymsa.joinposter.com/${data.category_photo}`}}
                                   style={{borderRadius: 50, width: 40, height: 40, resizeMode: 'contain'}}/>
                            <Text style={{
                                fontFamily: 'Montserrat-SemiBold',
                            }}>{data.category_name}</Text>
                        </View>
                    </TouchableOpacity>

                ))}
            </View>
        </View>
    )
}

export default CategoriesScreen;
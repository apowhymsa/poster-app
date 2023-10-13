import {View, Text, TouchableOpacity, ScrollView, RefreshControl} from "react-native";
import {useAppSelector} from "@utils//store";
import {Image} from 'expo-image'
import React, {useCallback, useEffect, useState} from "react";
import {ArrowLeft2} from "iconsax-react-native";
import CustomSearchInput from "@components/ui/custom-search-input/CustomSearchInput";
import Loader from "@components/loader/Loader";

const CategoriesScreen = (props: any) => {
    const categories = useAppSelector((state) => state.category);
    const [refreshLoader, setRefreshLoader] = useState(false);
    const [refreshLoaderMain, setRefreshLoaderMain] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshLoader(true);
        setRefreshLoader(false);
        setRefreshLoaderMain(true);
    }, []);

    useEffect(() => {
        if (refreshLoaderMain) {
            setTimeout(() => setRefreshLoaderMain(false), 3000)
        }
    }, [refreshLoaderMain])

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#ffffff',
            paddingHorizontal: 24,
            paddingBottom: 110
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    rowGap: 10,
                    flex: refreshLoaderMain ? 1 : 0
                }}
                refreshControl={<RefreshControl
                    refreshing={refreshLoader}
                    onRefresh={onRefresh}
                />}
            >
                {refreshLoaderMain
                    ? (<Loader/>)
                    : (
                        categories.categories.map((data: any) => (
                            <>
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
                                               style={{
                                                   borderRadius: 50,
                                                   width: 40,
                                                   height: 40,
                                                   resizeMode: 'contain'
                                               }}/>
                                        <Text style={{
                                            fontFamily: 'Montserrat-SemiBold',
                                        }}>{data.category_name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </>
                        ))
                    )}
            </ScrollView>
        </View>
    )
}

export default CategoriesScreen;
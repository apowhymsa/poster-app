import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useCallback, useEffect, useState} from "react";
import {ArrowLeft2, Notepad2} from "iconsax-react-native";
import ProductItem from "@components/product-item/ProductItem";
import * as SplashScreen from 'expo-splash-screen';
import {useAppSelector} from "@utils/store";
import {Colors} from "../constants";


interface IResponse {
    response: any[]
}

const ignore = SplashScreen.preventAutoHideAsync();

const ProductsByCategoryScreen = (props: any) => {
    const URL = `https://joinposter.com/api/menu.getProducts?token=569986:0996291ac9481581c876036c856da3dd&category_id=${props.route.params.category_id}&type=batchtickets`;
    const products = useAppSelector((state) => state.product);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                paddingHorizontal: 24,
                // paddingBottom: 16
                paddingBottom: 110
            }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
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
            {products.products
                .filter(product => product.menu_category_id === props.route.params.category_id).length === 0 ? (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 20
                }}>
                    <Notepad2
                        size="128"
                        color={Colors.primary}
                        variant="Bulk"
                    />
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 20,
                        textAlign: 'center'
                    }}>Нет товаров выбранной категории</Text>
                    <TouchableOpacity style={{
                        paddingHorizontal: 24,
                        paddingVertical: 16,
                        backgroundColor: Colors.primary,
                        borderRadius: 100,
                    }} onPress={() => props.navigation.replace('Home')}>
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Montserrat-SemiBold',
                        }}>Вернуться на главную</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        marginVertical: 24,
                        fontSize: 16
                    }}>{props.route.params.category_name} ({products.products
                        .filter(product => product.menu_category_id === props.route.params.category_id).length})</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            width: '100%',
                            gap: 20
                        }}>
                        {products.products
                            .filter(product => product.menu_category_id === props.route.params.category_id)
                            .map((product: any) => (
                            <>
                                <ProductItem
                                    isFavourites={!!product.favourite}
                                    product_object={product}
                                    navigation={props.navigation}
                                    width={'47%'}
                                    contentImage={{uri: `https://webwhymsa.joinposter.com/${product.photo}`}}
                                    title={product.product_name} price={product.price["1"]}/>
                            </>
                        ))}
                    </ScrollView>
                </>
            )}
        </View>
    )
}

export default ProductsByCategoryScreen;
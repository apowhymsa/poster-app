import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useCallback, useEffect, useState} from "react";
import {ArrowDown2, ArrowLeft2, Filter, Notepad2, Sort} from "iconsax-react-native";
import ProductItem from "@components/product-item/ProductItem";
import * as SplashScreen from 'expo-splash-screen';
import {useAppDispatch, useAppSelector} from "@utils/store";
import {Colors} from "../constants";
import BottomDrawerSelect from "@components/bottom-drawer-select/BottomDrawerSelect";
import {sortProductByPrice} from "@utils/features/productSlice";
import BottomDrawerContainer from "@components/bottom-drawer-select/BottomDrawerContainer";

interface IResponse {
    response: any[]
}

const ignore = SplashScreen.preventAutoHideAsync();

const ProductsByCategoryScreen = (props: any) => {
    const dispatch = useAppDispatch();
    const URL = `https://joinposter.com/api/menu.getProducts?token=569986:0996291ac9481581c876036c856da3dd&category_id=${props.route.params.category_id}&type=batchtickets`;
    const products = useAppSelector((state) => state.product);
    const [filteredProducts, setFilteredProducts] = useState([...products.products]);
    const [sortedOptions, setSortedOptions] = useState<boolean[]>([false, false, false]);
    const [sortByPriceList, setSortByPriceList] = useState([
        {
            title: 'Дешевый-Дорогой',
            type: 0,
            checked: false
        },
        {
            title: 'Дорогой-Дешёвый',
            type: 1,
            checked: false
        }
    ])

    useEffect(() => {
        sortByPriceList.forEach((item, index) => {
            if (item.checked) {
                if (item.type === 0) {
                    const filtered = [...products.products].sort((a, b) => Number(a.price["1"]) - Number(b.price["1"]))
                    setFilteredProducts(filtered);
                } else if (item.type === 1){
                    const filtered = [...products.products].sort((a, b) => Number(b.price["1"]) - Number(a.price["1"]))
                    setFilteredProducts(filtered);
                }
            }
        })
    }, [sortByPriceList]);

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
            {filteredProducts
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
                    }}>{props.route.params.category_name} ({filteredProducts
                        .filter(product => product.menu_category_id === props.route.params.category_id).length})</Text>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 15,
                        marginBottom: 24
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 50,
                            backgroundColor: '#f4f4f4'
                        }}>
                            <Filter
                                size="24"
                                color="black"
                                variant="Broken"
                            />
                            <Text>{sortByPriceList.reduce((acc, value) => {
                                return value.checked ? acc += 1 : acc += 0
                            }, 0)}</Text>
                        </View>

                        {/*СОРТИРОВКИ*/}
                        <TouchableOpacity
                            onPress={() => setSortedOptions([true, false, false])}
                            style={{
                                width: 'auto',
                                backgroundColor: sortedOptions[0] || sortByPriceList.some(item => item.checked) ? '#fc8080' : '#f4f4f4',
                                paddingHorizontal: 16,
                                paddingVertical: 10,
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 5,
                                borderRadius: 50,
                                alignSelf: 'flex-start',
                            }}>
                            <Text style={{
                                fontFamily: 'Montserrat-Medium',
                                fontSize: 16,
                                color: sortedOptions[0] || sortByPriceList.some(item => item.checked) ? 'white' : 'black',
                            }}>Сортировка</Text>
                            <ArrowDown2
                                size="24"
                                color={sortedOptions[0] || sortByPriceList.some(item => item.checked) ? 'white' : 'black'}
                                variant="Broken"
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            width: '100%',
                            gap: 20
                        }}>
                        {filteredProducts
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
            <BottomDrawerSelect isActive={Boolean(sortedOptions[0])} toggle={() => setSortedOptions([false, false, false])}>
                <BottomDrawerContainer data={sortByPriceList} title="Сортировка по цене" setData={setSortByPriceList}/>
            </BottomDrawerSelect>
        </View>
    )
}

export default ProductsByCategoryScreen;
import {FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {ArrowLeft2, DirectNotification, MessageNotif, Notepad2} from "iconsax-react-native";
import ProductItem from "@components/product-item/ProductItem";


interface IResponse {
    response: any[]
}

const ProductsByCategoryScreen = (props: any) => {
    const URL = `https://joinposter.com/api/menu.getProducts?token=569986:0996291ac9481581c876036c856da3dd&category_id=${props.route.params.category_id}&type=batchtickets`;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<IResponse>();

    useEffect(() => {
        console.log(props.route.params)

        async function getProducts() {
            await fetch(URL)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    console.log(data)
                })
                .finally(() => setLoading(false))
        }

        const ignore = getProducts();
    }, []);

    if (loading) {
        return <View>
            <Text>Loading...</Text>
        </View>
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 24,
            paddingBottom: 16
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
            {data?.response.length !== undefined && data.response.length <= 0 ? (
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 20
                }}>
                    <Notepad2
                        size="128"
                        color="#fc8080"
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
                        backgroundColor: '#fc8080',
                        borderRadius: 100,
                    }} onPress={() => props.navigation.goBack()}>
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
                    }}>{props.route.params.category_name} ({data?.response.length})</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            width: '100%',
                            gap: 20
                        }}>
                        {data?.response.map((product: any, index) => (
                            <>
                                <ProductItem
                                    width={'47%'}
                                    contentImage={{uri: `https://webwhymsa.joinposter.com/${product.photo}`}}
                                    title={product.product_name} price={product.price["1"]}/>
                                <ProductItem
                                    width={'47%'}
                                    contentImage={{uri: `https://webwhymsa.joinposter.com/${product.photo}`}}
                                    title={product.product_name} price={product.price["1"]}/>
                                <ProductItem
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
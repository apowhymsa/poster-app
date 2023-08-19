import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Image} from 'expo-image';
import {Bag2} from 'iconsax-react-native';
import React, {useEffect, useState} from "react";
import CategoryItem from "@components/category-item/CategoryItem";
import ProductItem from "@components/product-item/ProductItem";
import CustomSearchInput from "@components/ui/custom-search-input/CustomSearchInput";
import {Link} from "@react-navigation/native";
import {useAppDispatch, useAppSelector} from "@utils/store";
import {setCategories} from "@utils/features/categoriesSlice";
import {Colors} from "../constants";

const URL = 'https://joinposter.com/api/menu.getCategories/?token=569986:0996291ac9481581c876036c856da3dd'
const URLProducts = 'https://joinposter.com/api/menu.getProducts/?token=569986:0996291ac9481581c876036c856da3dd&type=batchtickets'
const HomeScreen = (props: any) => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.category);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getCategories() {
            await fetch(URL)
                .then(response => response.json())
                .then(data => {
                    dispatch(setCategories(data.response));
                })
                .catch(error => console.error(error))
        }

        async function getProducts() {
            await fetch(URLProducts)
                .then(response => response.json())
                .then(data => setProducts(data.response))
                .catch(error => console.error(error))
                .finally(() => setLoaded(true))
        }

        const ignoreCategories = getCategories();
        const ignoreProducts = getProducts();
    }, [])

    if (!loaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <>
            <View style={{flex: 1, backgroundColor: '#ffffff', paddingBottom: 110}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 24}}>
                    <View style={{width: 40, height: 40}}>
                        <Image contentFit="contain" source={require('../../assets/avatar.png')} style={{flex: 1}}/>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: Colors.primary,
                            borderRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Bag2 size={24} color="white" variant="Broken"/>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/*Секция поиска товара*/}
                    <View style={{
                        marginTop: 24,
                        marginHorizontal: 24
                    }}>
                        <CustomSearchInput/>
                    </View>


                    <View style={{
                        marginTop: 24
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 24
                        }}>
                            <Text style={{
                                fontFamily: 'Montserrat-Bold'
                            }}>Категории</Text>
                            <Text style={{
                                color: Colors.primary,
                                fontFamily: 'Montserrat-Bold'
                            }}>
                                <Link to={{screen: 'Categories'}}>
                                    Смотреть все
                                </Link>
                            </Text>
                        </View>
                        {/*Секция категорий*/}
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                justifyContent: 'space-between',
                                gap: 20,
                                paddingHorizontal: 24,
                            }}
                            horizontal={true} style={{
                            marginTop: 16
                        }}>
                            {categories.categories.map((data: any) => (
                                <Link to={{
                                    screen: 'ProductsByCategory', params: {
                                        category_id: data.category_id,
                                        category_name: data.category_name
                                    }
                                }}>
                                    <CategoryItem categoryName={data.category_name}
                                                  imageURL={`https://webwhymsa.joinposter.com/${data.category_photo}`}
                                    />
                                </Link>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{
                        marginTop: 24
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 24
                        }}>
                            <Text style={{
                                fontFamily: 'Montserrat-Bold'
                            }}>Популярные</Text>
                            <Text style={{
                                color: Colors.primary,
                                fontFamily: 'Montserrat-Bold'
                            }}>Смотреть все</Text>
                        </View>
                        {/*Секция популярных товаров*/}
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            contentContainerStyle={{
                                justifyContent: 'space-between',
                                gap: 15,
                                paddingHorizontal: 24
                            }}
                            style={{
                                marginTop: 16,
                            }}>

                            {products.map((product: any) => (
                                <ProductItem
                                    product_object={product}
                                    navigation={props.navigation}
                                    width={170}
                                    contentImage={{uri: `https://webwhymsa.joinposter.com/${product.photo}`}}
                                    title={product.product_name} price={product.price["1"]}/>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{
                        marginTop: 24
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 24
                        }}>
                            <Text style={{
                                fontFamily: 'Montserrat-Bold'
                            }}>Новые</Text>
                            <Text style={{
                                color: Colors.primary,
                                fontFamily: 'Montserrat-Bold'
                            }}>Смотреть все</Text>
                        </View>
                        {/*Секция популярных товаров*/}
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            contentContainerStyle={{
                                gap: 15,
                                paddingHorizontal: 24,
                            }}
                            style={{
                                marginTop: 16,
                            }}>


                            {products.map((product: any) => (
                                <ProductItem
                                    product_object={product}
                                    navigation={props.navigation}
                                    width={170}
                                    contentImage={{uri: `https://webwhymsa.joinposter.com/${product.photo}`}}
                                    title={product.product_name} price={product.price["1"]}/>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default HomeScreen;
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Image} from 'expo-image';
import {Bag2} from 'iconsax-react-native';
import {useEffect, useState} from "react";
import CategoryItem from "@components/category-item/CategoryItem";
import ProductItem from "@components/product-item/ProductItem";
import CustomSearchInput from "@components/ui/custom-search-input/CustomSearchInput";
import {Link} from "@react-navigation/native";
import {useAppDispatch, useAppSelector} from "@utils/store";
import {setCategories} from "@utils/features/categoriesSlice";

const URL = 'https://joinposter.com/api/menu.getCategories/?token=569986:0996291ac9481581c876036c856da3dd'
const HomeScreen = (props: any) => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.category);

    useEffect(() => {
        async function getCategories() {
            await fetch(URL)
                .then(response => response.json())
                .then(data => {
                    dispatch(setCategories(data.response));
                })
                .catch(error => console.error(error))
                .finally(() => {
                    setLoaded(true)
                })
        }

        const ignore = getCategories();
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
                        <Image source={require('../../assets/avatar.png')} style={{flex: 1, resizeMode: 'contain'}}/>
                    </View>
                    <TouchableOpacity>
                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#fc8080',
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
                    <CustomSearchInput/>

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
                                color: '#fc8080',
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
                                color: '#fc8080',
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

                            <ProductItem width={170} title="Товар 1" price={200} isFavourites={false}
                                         contentImage={require('../../assets/flower1.png')}/>
                            <ProductItem width={170} title="Товар 1" price={200} isFavourites={false}
                                         contentImage={require('../../assets/flower1.png')}/>
                            <ProductItem width={170} title="Товар 1" price={200} isFavourites={false}
                                         contentImage={require('../../assets/flower1.png')}/>
                            <ProductItem width={170} title="Товар 1" price={200} isFavourites={false}
                                         contentImage={require('../../assets/flower1.png')}/>
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
                                color: '#fc8080',
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


                            <ProductItem width={170} title="Товар 1" price={200} isFavourites={false}
                                         contentImage={require('../../assets/flower1.png')}/>
                            <ProductItem width={170} title="Товар 1" price={200} isFavourites={false}
                                         contentImage={require('../../assets/flower1.png')}/>
                            <ProductItem width={170} title="Товар 1" price={200} isFavourites={false}
                                         contentImage={require('../../assets/flower1.png')}/>
                            <ProductItem width={170} title="Товар 1" price={200} isFavourites={false}
                                         contentImage={require('../../assets/flower1.png')}/>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default HomeScreen;
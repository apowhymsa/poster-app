import React, {useState} from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Add, ArrowLeft2, Heart, Minus} from "iconsax-react-native";
import {Image} from "expo-image";
import {useAppDispatch} from "@utils/store";
import {setCartItem} from "@utils/features/cartSlice";
import {Colors} from "../constants";

const ProductScreen = (props: any) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useAppDispatch();

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
            style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 24,
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    marginTop: 3
                }} onPress={() => props.navigation.goBack()}>
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
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    marginTop: 3
                }}>
                    <View style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f4f4f4'
                    }}>
                        <Heart
                            size="24"
                            color="black"
                            variant="Broken"
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                marginVertical: 24,
                rowGap: 24
            }}>
                <View style={{
                    backgroundColor: '#f3f3f3',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 14,
                    borderTopRightRadius: 50,
                    borderBottomLeftRadius: 50
                }}>
                    <Image
                        contentFit="cover"
                        style={{width: '50%', height: 170}}
                        source={{uri: `https://webwhymsa.joinposter.com/${props.route.params.product_object.photo}`}}
                        // source={require('../../assets/flower1.png')}
                    />
                </View>
                <View style={{
                    rowGap: 16
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 16
                    }}>
                        {props.route.params.product_object.product_name}
                    </Text>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        color: Colors.primary,
                        fontSize: 16
                    }}>
                        {props.route.params.product_object.price["1"].toString().slice(0, props.route.params.product_object.price["1"].toString().length - 2)} UAH
                    </Text>
                </View>
            </View>
            <View style={{
                backgroundColor: '#f4f4f4',
                height: 56,
                borderRadius: 50,
                justifyContent: 'space-between',
                paddingHorizontal: 24,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 16
                }}>Количество</Text>
                <View style={{
                    justifyContent: 'center',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        columnGap: 24
                    }}>
                        <TouchableOpacity
                            onPress={() => setQuantity(prev => prev + 1)}
                            style={{
                            backgroundColor: Colors.primary,
                            width: 40,
                            height: 40,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Add
                                size="24"
                                color="white"
                                variant="Broken"
                            />
                        </TouchableOpacity>
                        <Text style={{
                            fontFamily: 'Montserrat-Medium',
                            fontSize: 16
                        }}>{quantity}</Text>
                        <TouchableOpacity
                            onPress={() => quantity > 1 && setQuantity(prev => prev - 1)}
                            style={{
                            backgroundColor: Colors.primary,
                            width: 40,
                            height: 40,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Minus
                                size="24"
                                color="white"
                                variant="Broken"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{
                marginVertical: 24
            }}>
                <Text style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14
                }}>
                    {props.route.params.product_object.product_production_description}
                </Text>
            </View>
            <TouchableOpacity style={{
                paddingHorizontal: 24,
                paddingVertical: 16,
                backgroundColor: Colors.primary,
                borderRadius: 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }} onPress={() => {
                dispatch(setCartItem({
                    product_object: props.route.params.product_object,
                    quantity: quantity,
                }))
            }}>
                <Text style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 16,
                    color: 'white'
                }}>{Number(props.route.params.product_object.price["1"].toString().slice(0, props.route.params.product_object.price["1"].toString().length - 2)) * quantity} UAH</Text>
                <Text style={{
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 16,
                    color: 'white'
                }}>Добавить в корзину</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ProductScreen;
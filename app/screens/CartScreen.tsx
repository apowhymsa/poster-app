import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useAppDispatch, useAppSelector} from "@utils/store";
import React, {useEffect} from "react";
import {useFocusEffect} from "@react-navigation/native";
import {ArrowLeft2} from "iconsax-react-native";
import CartItem from "@components/cart-item/CartItem";
import {Colors} from "../constants";
import {clearCart} from "@utils/features/cartSlice";

const CartScreen = (props: any) => {
    const cart = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(cart);
    }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 24
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24
            }}>
                <TouchableOpacity style={{
                    width: 40,
                    height: 40,
                    marginTop: 3,
                    flex: 1,
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
                <Text style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 16,
                    flex: 1.5,
                }}>Корзина</Text>
            </View>
            <Text
            onPress={() => dispatch(clearCart())}
                style={{
                textAlign: 'right',
                fontFamily: 'Montserrat-Regular',
                fontSize: 16
            }}>Очистить корзину</Text>
            <ScrollView
                style={{
                    marginTop: 24,
                    marginBottom: 48
                }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 14,
                }}>
                {cart.cart.map((cartItem: any) => (
                    <>
                        <CartItem
                            imageURL={cartItem.product_object.photo}
                            product_name={cartItem.product_object.product_name}
                            quantity={cartItem.quantity}
                            price={cartItem.product_object.price["1"].toString().slice(0, cartItem.product_object.price["1"].toString().length - 2)}
                            product_id={cartItem.product_object.product_id}
                        />
                    </>
                ))}
            </ScrollView>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontSize: 16,
                    fontFamily: 'Montserrat-Medium'
                }}>Полная цена</Text>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'Montserrat-Bold'
                }}>{cart.cart.reduce((acc, product) => {
                    return acc + (Number(product.product_object.price["1"].toString().slice(0, product.product_object.price["1"].toString().length - 2)) * product.quantity)
                }, 0)} UAH</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor: Colors.primary,
                paddingHorizontal: 24,
                paddingVertical: 16,
                borderRadius: 50,
                marginTop: 40,
                marginBottom: 16
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 16,
                    fontFamily: 'Montserrat-Medium',
                    textAlign: 'center'
                }}>Продолжить</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CartScreen;
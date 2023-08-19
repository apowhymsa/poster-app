import {Text, TouchableOpacity, View} from "react-native";
import {Image} from "expo-image";
import React, {useEffect, useState} from "react";
import {Colors} from "../../constants";
import {Add, Minus} from "iconsax-react-native";
import {useAppDispatch} from "@utils/store";
import {updateItem} from "@utils/features/cartSlice";

interface ICartItem {
    product_id: string,
    product_name: string,
    quantity: number,
    imageURL: string,
    price: number
}

const CartItem = ({product_id, product_name, quantity, price, imageURL}: ICartItem) => {
    const [quantityItem, setQuantityItem] = useState(quantity);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateItem({
            product_id: product_id,
            quantity: quantityItem
        }));

    }, [quantityItem]);

    return (
        <View style={{
            height: 100,
            backgroundColor: '#f4f4f4',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 14,
            gap: 12,
            borderRadius: 10
        }}>
            <Image
                style={{
                    width: 80,
                    height: '100%'
                }}
                contentFit="cover"
                source={{uri: `https://webwhymsa.joinposter.com/${imageURL}`}}
            />
            <View style={{
                justifyContent: 'space-between',
                flex: 1,
                gap: 10
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 10
                }}>
                    <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={{
                        flex: 1,
                            fontFamily: 'Montserrat-Medium',
                            fontSize: 14
                    }}>{product_name}</Text>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold'
                    }}>{price * quantityItem} UAH</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            setQuantityItem(prev => prev + 1)
                        }}
                        style={{
                            backgroundColor: Colors.primary,
                            width: 30,
                            height: 30,
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
                    }}>{quantityItem}</Text>
                    <TouchableOpacity
                        onPress={() => setQuantityItem(prev => prev - 1)}
                        style={{
                            backgroundColor: Colors.primary,
                            width: 30,
                            height: 30,
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
    );
}

export default CartItem;
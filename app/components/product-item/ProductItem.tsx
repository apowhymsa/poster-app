import {Text, TouchableOpacity, View} from "react-native";
import {HeartAdd, HeartSlash} from "iconsax-react-native";
import {Image} from "expo-image";
import {useState} from "react";
import {IPopularItemProps} from "@components/product-item/product-item.interface";

const ProductItem = ({contentImage, title, price, width, isFavourites = false, navigation, product_object}: IPopularItemProps) => {
    const [heartClicked, setHeartClicked] = useState(isFavourites);
    return (
            <TouchableOpacity
            onPress={() => navigation.navigate('Product', {
                product_object: product_object
            })}
                style={{
                width: width,
                backgroundColor: '#f3f3f3',
                paddingBottom: 16,
                paddingTop: 14,
                borderRadius: 14,
            }}>

                <TouchableOpacity style={{
                    alignItems: 'flex-end',
                    paddingHorizontal: 16,
                    alignSelf: 'flex-end'
                }} onPress={() => {
                    setHeartClicked((prev) => !prev)
                }}>
                    <View style={{
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 50,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)'
                    }}>
                        {heartClicked ? <HeartSlash size={24} color="#fc8080" variant="Broken"/> :
                            <HeartAdd size={24} color="#fc8080" variant="Broken"/>}
                    </View>
                </TouchableOpacity>

                <View style={{
                    flex: 1,
                    paddingHorizontal: 12,
                    marginVertical: 10
                }}>
                    {contentImage && (
                        <Image source={contentImage}
                               style={{width: '100%', height: 150, borderRadius: 14}}
                               contentFit="cover"/>)}
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    rowGap: 5,
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Regular'
                    }}>{title}</Text>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold'
                    }}>{price.toString().slice(0, price.toString().length - 2)} UAH</Text>
                </View>
            </TouchableOpacity>
    )
}

export default ProductItem;
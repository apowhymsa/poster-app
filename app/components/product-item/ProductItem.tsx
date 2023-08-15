import {Text, TouchableOpacity, View} from "react-native";
import {HeartAdd, HeartSlash} from "iconsax-react-native";
import {Image} from "expo-image";
import {useState} from "react";
import {IPopularItemProps} from "@components/product-item/product-item.interface";

const ProductItem = ({contentImage, title, price, width, isFavourites = false}: IPopularItemProps) => {
    const [heartClicked, setHeartClicked] = useState(isFavourites);
    return (
        <View style={{
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
            }} onPress={() => setHeartClicked((prev) => !prev)}>
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
                           style={{width: '100%', height: 150, resizeMode: 'cover', borderRadius: 14}}/>)}
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
        </View>
    )
}

export default ProductItem;
import {DimensionValue} from "react-native";

export interface IPopularItemProps {
    contentImage: any,
    title: string,
    price: number,
    isFavourites?: boolean,
    width: DimensionValue;
}
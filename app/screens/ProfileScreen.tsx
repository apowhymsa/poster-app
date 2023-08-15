import {Text, View} from "react-native";
import {useAppSelector} from "@utils//store";

const ProfileScreen = () => {
    const categories = useAppSelector((state) => state.category);

    return (
        <View>
            <Text>ProfileScreen</Text>
            {categories.categories.map((data: any) => (
                <Text>{data.category_name}</Text>
            ))}
        </View>
    )
}

export default ProfileScreen;
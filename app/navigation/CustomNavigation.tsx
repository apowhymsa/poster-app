import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CustomBottomNavigation from "@navigation//CustomBottomNavigation";
import HomeScreen from "@screens/HomeScreen";
import ProfileScreen from "@screens/ProfileScreen";
import CategoriesScreen from "@screens/CategoriesScreen";
import ProductsByCategoryScreen from "@screens/ProductsByCategoryScreen";
import ProductScreen from "@screens/ProductScreen";
import CartScreen from "@screens/CartScreen";

const Stack = createNativeStackNavigator();

const CustomNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name="Categories" component={CategoriesScreen}></Stack.Screen>
            <Stack.Screen name="ProductsByCategory" component={ProductsByCategoryScreen}></Stack.Screen>
            <Stack.Screen name="Product" component={ProductScreen}></Stack.Screen>
            <Stack.Screen name="Cart" component={CartScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default CustomNavigation;
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CustomBottomNavigation from "@navigation//CustomBottomNavigation";
import HomeScreen from "@screens/HomeScreen";
import ProfileScreen from "@screens/ProfileScreen";
import CategoriesScreen from "@screens/CategoriesScreen";
import ProductsByCategoryScreen from "@screens/ProductsByCategoryScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Root" component={CustomBottomNavigation}></Stack.Screen>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name="Categories" component={CategoriesScreen}></Stack.Screen>
            <Stack.Screen name="ProductsByCategory" component={ProductsByCategoryScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Navigation;
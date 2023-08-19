
import {SafeAreaView} from "react-native-safe-area-context";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {store} from "@utils/store";
import {useFonts} from "expo-font";
import {useCallback} from "react";
import * as SplashScreen from 'expo-splash-screen';
import CustomBottomNavigation from "@navigation/CustomBottomNavigation";

export default function App() {
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView onLayout={onLayoutRootView} style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 10}}>
            <Provider store={store}>
                <NavigationContainer>
                    {/*<CustomNavigation/>*/}
                    <CustomBottomNavigation/>
                </NavigationContainer>
            </Provider>
        </SafeAreaView>
    );
}
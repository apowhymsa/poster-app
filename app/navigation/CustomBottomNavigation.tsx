import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {useEffect, useRef} from "react";
import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import * as Animatable from 'react-native-animatable';
import {Bag2, Heart, Home, Profile} from "iconsax-react-native";
import FavouritesScreen from "@screens/FavouritesScreen";
import HomeScreen from "@screens/HomeScreen";
import ProfileScreen from "@screens/ProfileScreen";
import CustomNavigation from "@navigation/CustomNavigation";
import {Colors} from "../constants";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";

const Tab = createBottomTabNavigator()

interface IButtonProps {
    onPress: any,
    accessibilityState: any,
    icon: React.ReactNode,
    text: string
}

const animate1 = {0: {scale: 1, translateY: 7}, .92: {translateY: -34}, 1: {scale: 1, translateY: -24}}
const animate2 = {0: {scale: 1, translateY: -24}, 1: {scale: 1, translateY: 7}}

// 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 },
const circle1 = {0: {scale: 0}, 1: {scale: 1.25}}
const circle2 = {0: {scale: 1.25}, 1: {scale: 0}}

const ButtonTab = ({onPress, accessibilityState, icon, text}: IButtonProps) => {
    const focused = accessibilityState.selected;
    const viewRef = useRef<any>(null);
    const circleRef = useRef<any>(null);
    const textRef = useRef<any>(null);

    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            circleRef.current.animate(circle1);
            textRef.current.transitionTo({scale: 1});
        } else {
            viewRef.current.animate(animate2);
            circleRef.current.animate(circle2);
            textRef.current.transitionTo({scale: 0});
        }
    }, [focused])
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={styles.container}>
            <Animatable.View
                ref={viewRef}
                duration={500}
                style={styles.container}>
                <View style={styles.btn}>
                    <Animatable.View
                        ref={circleRef}
                        style={styles.circle}/>
                    {icon}
                </View>
                <Animatable.Text
                    ref={textRef}
                    style={styles.text}>
                    {text}
                </Animatable.Text>
            </Animatable.View>
        </TouchableOpacity>
    )
}
const CustomBottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: styles.tabBar,
        }}>
            <Tab.Screen name="Home" component={CustomNavigation}
                        options={({route}) => ({
                            tabBarButton: ({children, onPress, accessibilityState}) => {
                                return (
                                    <ButtonTab onPress={onPress} accessibilityState={accessibilityState}
                                               icon={<Home size={24}
                                                           color={accessibilityState?.selected ? 'white' : 'black'}
                                                           variant="Broken"/>}
                                               text="Главная"
                                    />
                                )
                            },
                            tabBarStyle: ((route: any) => {
                                const routeName = getFocusedRouteNameFromRoute(route) ?? "";

                                if (routeName === 'Cart') {
                                    return {display: 'none'};
                                }
                                return styles.tabBar;
                            })(route)
                        })}
            />
            <Tab.Screen name="Favourites" component={FavouritesScreen} options={{
                tabBarButton: ({children, onPress, accessibilityState}) => {
                    return (
                        <ButtonTab onPress={onPress} accessibilityState={accessibilityState}
                                   icon={<Heart size={24} color={accessibilityState?.selected ? 'white' : 'black'}
                                                variant="Broken"/>}
                                   text="Избранное"
                        />
                    )
                },
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                // tabBarStyle: {display: 'none'},
                tabBarButton: ({children, onPress, accessibilityState}) => {
                    return (
                        <ButtonTab onPress={onPress} accessibilityState={accessibilityState}
                                   icon={<Profile size={24} color={accessibilityState?.selected ? 'white' : 'black'}
                                                  variant="Broken"/>}
                                   text="Профиль"
                        />
                    )
                },
            }}/>
        </Tab.Navigator>
    )
}

export default CustomBottomNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 70,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 16,
    },
    btn: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 4,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 25,
        color: 'white',
    },
    text: {
        fontSize: 12,
        textAlign: 'center',
        color: Colors.primary,
        fontFamily: 'Montserrat-Bold'
    }
})
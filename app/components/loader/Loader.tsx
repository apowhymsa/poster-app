import AnimatedLoader from "react-native-animated-loader";
import {StyleSheet, View} from 'react-native'
import LottieView from "lottie-react-native";

const Loader = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <LottieView source={require('../../../assets/loader.json')} autoPlay loop style={{
                width: 100,
                height: 100,
            }}/>
        </View>
    )
}

export default Loader;
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


const HomeScreen = (): JSX.Element => {
    return (
        <View className='flex-1 bg-red-500'>
            <Text>Home Scrren</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default HomeScreen
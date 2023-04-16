import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


const TrainingListScreen = (): JSX.Element => {
    return (
        <View className='flex-1 bg-red-500'>
            <Text>Profile Pic</Text>
            <StatusBar style="auto" />
        </View>
    )
}

export default TrainingListScreen
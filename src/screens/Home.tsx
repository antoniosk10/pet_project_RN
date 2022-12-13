import {StackNavigationProp} from '@react-navigation/stack';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type StackParamList = {
  Home: undefined;
  Test: undefined;
};

type Props = {
  navigation: StackNavigationProp<StackParamList>;
};

export default function Home({navigation}: Props) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Go to Test"
          onPress={() => navigation.navigate('Test')}
        />
      </View>
    </SafeAreaView>
  );
}
